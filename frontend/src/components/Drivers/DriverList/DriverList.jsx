import DriverItem from "../DriverItem/DriverItem";
import classes from './DriverList.module.css';
import DeleteDriverModal from "../../Modal/DeleteDriverModal/DeleteDriverModal";
import {NavLink} from "react-router-dom";
import Pagination from "../../Pagination/Pagination";

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

    return (
        <div className={classes.container}>
            <div className={classes.listContainer}>
                {deleteDriverModal}
                <NavLink to='/addDriver' className={classes.addButton}>Add Driver</NavLink>
                <table className={classes.driversTable}>
                    <thead className={classes.tableHeader}>
                    <tr className={classes.headingRow}>
                        <th>#</th>
                        <th>Username</th>
                        <th>Tariff</th>
                        <th>Rating</th>
                        <th>Register Date</th>
                        <th>Remove Driver</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.drivers.map((driver, index) => {
                            const itemNumber = (index + 1) + ((props.paginationData.currentPage - 1)
                                * props.paginationData.pageLimit);

                            return <DriverItem itemNumber={itemNumber}
                                               setModal={props.setModal}
                                               key={driver._id}
                                               driver={driver}
                                               deleteDriver={props.deleteDriver}/>
                        })
                    }
                    </tbody>
                </table>
                <select onChange={(e) => props.changeLimit(e.target.value)} className={classes.limitDropdown}>
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