import classes from "../ClientList/ClientsList.module.css";
import ClientItem from "../ClientItem/ClientItem";
import Form from "../Form/Form";
import React from "react";

function ClientList(props) {

    const fields = [
        {fieldName: 'username'},
        {fieldName: 'password'},
        {fieldName: 'cardCredentials'},
    ]

    return (
        <div className={classes.clientsListContainer}>
            <h2>Clients</h2>
            <Form fields={fields} actionType='add' formData={props.clients.clientFormData} saveData={props.addClient} onNewDataChange={props.onNewDataChange} />
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
                    props.clients.allClients.map(client => {
                        return <ClientItem key={client._id} client={client} deleteClient={props.deleteClient}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;