const Client = (props) => {
    return (
        <tr>
            <td>{props.client.username}</td>
            <td>{props.client.card_credentials}</td>
            <td>{props.client.register_date}</td>
        </tr>
    );
}

export default Client;