import classes from "./ClientsList.module.css";
import ClientItem from "../ClientItem/ClientItem";
import ClientForm from "../ClientForm/ClientForm";
import DeleteClientModal from "../../Modal/DeleteClientModal/DeleteClientModal";

function ClientList(props) {
    const deleteClientModal =
        <DeleteClientModal
            setModal={props.setModal}
            modal={props.modal}
            deleteClient={props.deleteClient}
        />

    return (
        <div className={classes.clientsListContainer}>
            {props.modal.show ? deleteClientModal : ''}
            <h2>Clients</h2>
            <ClientForm formData={props.clients.clientFormData} saveData={props.addClient}
                        onNewDataChange={props.onNewDataChange}/>
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
                        return <ClientItem setModal={props.setModal} setClient={props.setModal} key={client._id}
                                           client={client}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;