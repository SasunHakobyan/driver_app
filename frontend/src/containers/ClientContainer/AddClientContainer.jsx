import React, {useCallback, useEffect, useState} from 'react';
import ClientForm from "../../components/Clients/ClientForm/ClientForm";
import {useNavigate, useParams} from "react-router-dom";

const initialClient = {
    username: '',
    cardCredentials: '',
    password: ''
};

const AddClientContainer = (props) => {
    const navigate = useNavigate();
    const {clientId} = useParams();
    const [clientFormData, setClientFormData] = useState(initialClient);

    useEffect(() => {
        if (props.type === 'edit') {
            fetchClient();
        }
    }, []);

    const onNewDataChange = (fieldName, value) => {
        setClientFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
    }

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

    const addClient = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5500/api/clients/addClient', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(clientFormData)
            });

            const responseData = await response.json();

            if (responseData.responseCode === 200) {
                navigate('/clients');
            }

        } catch (err) {
            console.log(err);
        }

    }, [clientFormData]);

    const updateClient = useCallback(async () => {
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

    return <ClientForm
        formData={clientFormData}
        saveData={props.type === 'add' ? addClient : updateClient}
        onNewDataChange={onNewDataChange}/>
};

export default AddClientContainer;