import React, {useCallback, useEffect, useState} from 'react';
import ClientList from "../../components/Clients/ClientList/ClientList";

const ClientsListContainer = () => {
    const [clients, setClients] = useState([]);
    const [deleteModal, setDeleteModal] = useState({show:false, clientId: undefined});

    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [clientsCount, setClientsCount] = useState(0);

    useEffect(() => {
        fetchClients();
    }, [currentPage, pageLimit]);

    const fetchClients = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5500/api/clients?limit=${pageLimit}&pageNumber=${currentPage}`);
            const clientsData = await response.json();

            setClientsCount((prevState) => {
                return clientsData.clientsCount;
            });

            setClients((prevState) => {
                return [...clientsData.data.clients];
            });

        } catch (err) {
            console.log(err);
        }
    }, [pageLimit, currentPage]);

    const deleteClient = useCallback(async (clientId) => {
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
    }, [])

    const onLimitChange = (selectLimit) => {
        setPageLimit(selectLimit);
        setCurrentPage(1);
    }

    return (
        <ClientList
            changeLimit={onLimitChange}
            paginationData={{currentPage, setCurrentPage, itemsCount: clientsCount, pageLimit}}
            modal={deleteModal}
            setModal={setDeleteModal}
            clients={clients}
            deleteClient={deleteClient}
        />
    );
};

export default ClientsListContainer;