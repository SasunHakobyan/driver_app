import React, {useEffect, useState} from "react";

import classes from "../ClientList/ClientsList.module.css";
import ClientItem from "../ClientItem/ClientItem";
import AddField from "../AddField/AddField";

function ClientList(props) {

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
        <div className={classes.clientsListContainer}>
            <h2>Clients</h2>
            <AddField newClientData={clients.newClient} addClient={addClient} onNewDataChange={onNewDataChange} />
            <table className={classes.clientsData}>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Card Credentials</th>
                    <th>Register Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    clients.allClients.map(client => {
                        return <ClientItem key={client._id} client={client} deleteClient={deleteClient}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;