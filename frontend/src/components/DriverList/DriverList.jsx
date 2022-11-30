import DriverItem from "../DriverItem/DriverItem";
import classes from './DriverList.module.css';
import DriverForm from "../DriverForm/DriverForm";
import DeleteDriverModal from "../Modal/DeleteDriverModal/DeleteDriverModal";

function DriverList(props) {
    const deleteDriverModal =
        <DeleteDriverModal
            modal={props.modal}
            setModal={props.setModal}
            deleteDriver={props.deleteDriver}
        />

    return (
        <div className={classes.driversListContainer}>
            {props.modal.show ? deleteDriverModal : ''}
            <h2>Drivers</h2>
            <DriverForm formData={props.drivers.driverFormData} saveData={props.addDriver} onNewDataChange={props.onNewDataChange} />
            <table className={classes.driversData}>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Tariff</th>
                    <th>Rating</th>
                    <th>Register Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.drivers.allDrivers.map(driver => {
                        return <DriverItem setModal={props.setModal} key={driver._id} driver={driver} deleteDriver={props.deleteDriver}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default DriverList;