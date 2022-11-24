import React, {useEffect, useState} from "react";

import classes from "../ClientList/ClientsList.module.css";
import Client from "../Client/Client";

function ClientList(props) {
    const [clients, setClients] = useState([]);

    async function fetchClients() {
        try {
            const response = await fetch('http://localhost:5500/getClients');
            const clientData = await response.json();
            setClients(clientData);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <div className={classes.clientsListContainer}>
            <h3>Clients</h3>
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
                    clients.map(client => {
                        return <Client key={client._id} client={client}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;