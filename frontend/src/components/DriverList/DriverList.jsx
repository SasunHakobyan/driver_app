import Driver from "../Driver/Driver";
import classes from './DriverList.module.css';

const DriverList = (props) => {
    let driversElements = props.drivers.map(driver => {
        return <Driver key={driver._id} driver={driver}/>
    })

    return (
        <div className={classes.driversListContainer}>
            <h3>Drivers</h3>
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
                    {driversElements}
                </tbody>
            </table>
        </div>
    );
}

export default DriverList;