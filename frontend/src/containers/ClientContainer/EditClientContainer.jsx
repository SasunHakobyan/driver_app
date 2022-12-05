import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ClientForm from "../../components/Clients/ClientForm/ClientForm";

const initialClient = {
    username: '',
    cardCredentials: '',
    password: ''
};

const EditClientContainer = () => {
    const navigate = useNavigate();
    const {clientId} = useParams();
    const [clientFormData, setClientFormData] = useState(initialClient);

    useEffect(() => {
        fetchClient();
    }, []);

    const fetchClient = useCallback(async () => {
        const response = await fetch(`http://localhost:5500/api/clients/${clientId}`);
        const clientData = await response.json();

        if (clientData.responseCode === 404) {
            navigate('/notfound');
        } else if (clientData.responseCode === 200) {
            const {username, password, cardCredentials} = clientData.data.client;
            setClientFormData({username, password, cardCredentials});
        }

    }, [clientId]);

    const onNewDataChange = (fieldName, value) => {
        setClientFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
    }

    const saveData = useCallback(async () => {
        const reqBody = {
            clientId: clientId,
            updateData: clientFormData
        }

        const response = await fetch('http://localhost:5500/api/clients/updateClient', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        });

        const responseData = await response.json();

        if (responseData.responseCode === 200) {
            navigate('/clients');
        } else if (responseData.responseCode === 404) {
            navigate('/notfound');
        }

    }, [clientId, clientFormData]);

    return (
        <div>
            <h2>Edit Client</h2>
            <ClientForm formData={clientFormData} saveData={saveData} onNewDataChange={onNewDataChange} />
        </div>
    );
};

export default EditClientContainer;