import classes from "../ClientList/ClientsList.module.css";
import ClientItem from "../ClientItem/ClientItem";
import AddField from "../AddField/AddField";

function ClientList(props) {

    return (
        <div className={classes.clientsListContainer}>
            <h2>Clients</h2>
            <AddField newClientData={props.clients.newClient} addClient={props.addClient} onNewDataChange={props.onNewDataChange} />
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