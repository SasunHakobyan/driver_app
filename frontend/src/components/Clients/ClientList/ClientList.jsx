import classes from "./ClientsList.module.css";
import DeleteClientModal from "../../Modal/DeleteClientModal/DeleteClientModal";
import {NavLink} from "react-router-dom";
import Pagination from "../../Pagination/Pagination";
import Grid from "../../Grid/Grid";

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

    const fields = [
        '#',
        'Username',
        'Card Credentials',
        'Register Date',
        'Remove Client',
    ];

    return (
        <div className={classes.container}>
            <div className={classes.listContainer}>
                {deleteClientModal}
                <NavLink to='/addClient' className={classes.addButton}>Add Client</NavLink>

                <Grid
                    type='client'
                    paginationData={props.paginationData}
                    data={props.clients}
                    setModal={props.setModal}
                    deleteData={props.deleteClient}
                    fields={fields}/>

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