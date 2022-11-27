const ClientItem = (props) => {
    return (
        <tr key={props.client._id}>
            <td>{props.client.username}</td>
            <td>{props.client.cardCredentials}</td>
            <td>{props.client.registerDate}</td>
            <td><button onClick={() => {props.deleteClient(props.client._id)}}>Delete</button></td>
        </tr>
    );
}

export default ClientItem;