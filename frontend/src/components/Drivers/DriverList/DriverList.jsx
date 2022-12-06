import classes from './DriverList.module.css';
import DeleteDriverModal from "../../Modal/DeleteDriverModal/DeleteDriverModal";
import {NavLink} from "react-router-dom";
import Pagination from "../../Pagination/Pagination";
import Grid from "../../Grid/Grid";

function DriverList(props) {
    let deleteDriverModal;

    if (props.modal.show) {
        deleteDriverModal = <DeleteDriverModal
            modal={props.modal}
            setModal={props.setModal}
            deleteDriver={props.deleteDriver}
        />
    } else {
        deleteDriverModal = '';
    }

    const switchLimit = (e) => {
        props.changeLimit(e.target.value);
    }

    const fields = [
        '#',
        'Username',
        'Tariff',
        'Rating',
        'Register Date',
        'Remove Driver'
    ];

    return (
        <div className={classes.container}>
            <div className={classes.listContainer}>
                {deleteDriverModal}
                <NavLink to='/addDriver' className={classes.addButton}>Add Driver</NavLink>

                <Grid
                    type='driver'
                    paginationData={props.paginationData}
                    data={props.drivers}
                    setModal={props.setModal}
                    deleteData={props.deleteDriver}
                    fields={fields}/>

                <select onChange={switchLimit} className={classes.limitDropdown}>
                    <option value='5'>Limit - 5</option>
                    <option value='7'>Limit - 7</option>
                    <option value='10'>Limit - 10</option>
                </select>
            </div>
            <Pagination {...props.paginationData}/>
        </div>
    );
}

export default DriverList;