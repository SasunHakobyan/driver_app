import {NavLink} from "react-router-dom";
import classes from './ClientItem.module.css';

const ClientItem = (props) => {
    const client = props.client;

    return (
        <tr className={classes.clientRow} key={client._id}>
            <td>{props.index}</td>
            <td><NavLink to={`/editClient/${client._id}`}>{client.username}</NavLink></td>
            <td>{client.cardCredentials}</td>
            <td>{client.registerDate}</td>
            <td><button className={classes.btnDanger} onClick={() => {props.setModal({show:true, clientId:props.client._id})}}>Delete</button></td>
        </tr>
    );
}

export default ClientItem;