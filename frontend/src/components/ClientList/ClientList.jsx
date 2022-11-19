import classes from "../ClientList/ClientsList.module.css";
import Client from "../Client/Client";

const ClientList = (props) => {
    const clientsElements = props.clients.map(client => {
        return <Client key={client._id} client={client} />
    });

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
                    {clientsElements}
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;