import {NavLink} from "react-router-dom";

const ClientItem = (props) => {
    const client = props.client;

    return (
        <tr key={client._id}>
            <td><NavLink to={`/editClient/:${client._id}`}>{client.username}</NavLink></td>
            <td>{client.cardCredentials}</td>
            <td>{client.registerDate}</td>
            <td><button onClick={() => {props.deleteClient(props.client._id)}}>Delete</button></td>
        </tr>
    );
}

export default ClientItem;