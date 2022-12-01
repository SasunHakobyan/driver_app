import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ClientForm from "../../components/Clients/ClientForm/ClientForm";

const EditClientContainer = () => {
    const navigate = useNavigate();
    const {clientId} = useParams();
    const [clientFormData, setClientFormData] = useState({});

    useEffect(() => {
        fetchClient();
    }, []);

    const fetchClient = async () => {
        const response = await fetch(`http://localhost:5500/api/clients/${clientId}`);
        const clientData = await response.json();
        const {username, password, cardCredentials} = clientData.data.client;

        setClientFormData({username, password, cardCredentials});
    }

    const onNewDataChange = (fieldName, value) => {
        setClientFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
    }

    const saveData = async () => {
        const reqBody = {
            clientId: clientId,
            updateData: clientFormData
        }

        const response = await fetch('http://localhost:5500/api/clients/updateClient', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        });

        const responseData = await response.json();

        if (responseData.responseCode === 0) {
            navigate('/clients');
        }
    }

    return (
        <div>
            <h2>Edit Client</h2>
            <ClientForm formData={clientFormData} saveData={saveData} onNewDataChange={onNewDataChange} />
        </div>
    );
};

export default EditClientContainer;