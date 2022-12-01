import classes from "./ClientsList.module.css";
import ClientItem from "../ClientItem/ClientItem";
import DeleteClientModal from "../../Modal/DeleteClientModal/DeleteClientModal";
import {NavLink} from "react-router-dom";

function ClientList(props) {
    let deleteClientModal;

    if (props.modal.show) {
        deleteClientModal = <DeleteClientModal
            setModal={props.setModal}
            modal={props.modal}
            deleteClient={props.deleteClient}
        />
    } else {
        deleteClientModal = '';
    }

    return (
        <div className={classes.listContainer}>
            {deleteClientModal}
            <NavLink to='/addClient' className={classes.addButton}>Add Client</NavLink>
            <table className={classes.clientsTable}>
                <thead className={classes.tableHeader}>
                <tr className={classes.headingRow}>
                    <th>#</th>
                    <th>Username</th>
                    <th>Card Credentials</th>
                    <th>Register Date</th>
                    <th>Remove Client</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.clients.map((client,index) => {
                        return <ClientItem index={index+1} setModal={props.setModal} setClient={props.setModal} key={client._id}
                                           client={client}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;