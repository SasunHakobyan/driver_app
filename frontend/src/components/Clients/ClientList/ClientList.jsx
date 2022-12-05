import classes from "./ClientsList.module.css";
import ClientItem from "../ClientItem/ClientItem";
import DeleteClientModal from "../../Modal/DeleteClientModal/DeleteClientModal";
import {NavLink} from "react-router-dom";
import Pagination from "../../Pagination/Pagination";

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

    const switchLimit = (e) => {
        props.changeLimit(e.target.value);
    }

    return (
        <div className={classes.container}>
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
                            const itemNumber = (index + 1) + ((props.paginationData.currentPage - 1)
                                * props.paginationData.pageLimit);

                            return <ClientItem itemNumber={itemNumber}
                                               setModal={props.setModal}
                                               key={client._id}
                                               client={client}
                                               deleteClient={props.deleteClient}/>
                        })
                    }
                    </tbody>
                </table>
                <select onChange={switchLimit} className={classes.limitDropdown}>
                    <option value='5'>Limit - 5</option>
                    <option value='7'>Limit - 7</option>
                    <option value='10'>Limit - 10</option>
                </select>
            </div>
            <Pagination {...props.paginationData} />
        </div>
    );
}

export default ClientList;