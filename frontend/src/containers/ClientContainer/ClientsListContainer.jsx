import React, {useEffect, useState} from 'react';
import ClientList from "../../components/Clients/ClientList/ClientList";

const ClientsListContainer = () => {
    const [clients, setClients] = useState([]);
    const [modal, setModal] = useState({show:false, clientId: undefined});

    useEffect(() => {
        fetchClients();
    }, []);

    async function fetchClients() {
        try {
            const response = await fetch('http://localhost:5500/api/clients');
            const clientData = await response.json();

            setClients((prevState) => {
                return [...clientData.data.clients];
            });
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

    return (
        <ClientList
            modal={modal}
            setModal={setModal}
            clients={clients}
            deleteClient={deleteClient}
        />
    );
};

export default ClientsListContainer;