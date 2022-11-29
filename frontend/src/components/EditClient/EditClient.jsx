import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ClientForm from "../ClientForm/ClientForm";

const EditClient = () => {
    const {clientId} = useParams();

    const initialClient = {
        username: '',
        password: '',
        cardCredentials: ''
    };

    const [client, setClient] = useState(initialClient);

    const fetchClient = async () => {
        const response = await fetch(`http://localhost:5500/api/clients/${clientId}`);
        const clientData = await response.json();
        const {username, password, cardCredentials} = clientData.data.client;

        setClient({username, password, cardCredentials});
    }

    const onNewDataChange = (fieldName, value) => {
        const newClient = {...client};
        newClient[fieldName] = value;

        setClient(newClient);
    }

    const saveData = async () => {
        const reqBody = {
            clientId: clientId,
            updateData: client
        }

        const response = await fetch('http://localhost:5500/api/clients/updateClient', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        });

        const {responseCode} = await response.json();

        if (responseCode === 0) {
            console.log('DONE');
        }
    }

    useEffect(() => {
        fetchClient();
    }, []);

    return <ClientForm formData={client} saveData={saveData} onNewDataChange={onNewDataChange} />
};

export default EditClient;