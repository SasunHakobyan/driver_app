import React, {useEffect, useState} from 'react';
import ClientList from "./ClientList";

const ClientApi = () => {

    const initialState = {
        newClient: {
            username: '',
            password: '',
            cardCredentials: ''
        },
        allClients: []
    }

    const [clients, setClients] = useState(initialState);

    async function fetchClients() {
        try {
            const response = await fetch('http://localhost:5500/api/clients');
            const clientData = await response.json();

            const newState = {
                ...clients,
                newClient: {
                    username: '',
                    password: '',
                    cardCredentials: ''
                },
                allClients: clientData.data.clients
            };

            setClients(newState);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchClients();
    }, []);

    const onNewDataChange = (fieldName, value) => {
        const newState = {
            ...clients,
            newClient: {
                ...clients.newClient
            }
        }

        switch (fieldName) {
            case 'username':
                newState.newClient.username = value;
                setClients(newState);
                break;
            case 'cardCredentials':
                newState.newClient.cardCredentials = value;
                setClients(newState);
                break;
            case 'password':
                newState.newClient.password = value;
                setClients(newState);
                break;
            default:
                break;
        }
    }

    const addClient = async () => {
        const newClient = {...clients.newClient};

        try {
            const response = await fetch('http://localhost:5500/api/clients/addClient', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newClient)
            });

            await fetchClients();

        } catch (err) {
            console.log(err);
        }
    }

    const deleteClient = async (clientId) => {
        try {
            const response = await fetch('http://localhost:5500/api/clients/deleteClient', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({clientId: clientId})
            });

            await fetchClients()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ClientList
            clients={clients}
            addClient={addClient}
            onNewDataChange={onNewDataChange}
            deleteClient={deleteClient}
        />
    );
};

export default ClientApi;