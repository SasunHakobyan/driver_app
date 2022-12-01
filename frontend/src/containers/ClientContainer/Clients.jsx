import React, {useEffect, useState} from 'react';
import ClientList from "../../components/Clients/ClientList/ClientList";

const initialState = {
    clientFormData: {},
    allClients: []
}

const Clients = () => {

    const [clients, setClients] = useState(initialState);
    const [modal, setModal] = useState({show:false, clientId: undefined});

    async function fetchClients() {
        try {
            const response = await fetch('http://localhost:5500/api/clients');
            const clientData = await response.json();

            const newState = {
                ...clients,
                clientFormData: {},
                allClients: clientData.data.clients
            };

            setClients(newState);
        } catch (err) {
            console.log(err);
        }
    }

    const onNewDataChange = (fieldName, value) => {
        const newState = {
            ...clients,
            clientFormData: {
                ...clients.clientFormData
            }
        }

        newState.clientFormData[fieldName] = value;
        setClients(newState);
    }

    const addClient = async () => {
        const newClient = {...clients.clientFormData};

        try {
            const response = await fetch('http://localhost:5500/api/clients/addClient', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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

            await fetchClients();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <ClientList
            modal={modal}
            setModal={setModal}
            clients={clients}
            addClient={addClient}
            onNewDataChange={onNewDataChange}
            deleteClient={deleteClient}
        />
    );
};

export default Clients;