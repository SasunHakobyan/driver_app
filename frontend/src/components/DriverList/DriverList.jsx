import Driver from "../Driver/Driver";
import classes from './DriverList.module.css';

const DriverList = (props) => {
    console.log(props)
    let driversElements = props.drivers.map(driver => {
        return <Driver driver={driver}/>
    })

    return (
        <div className={classes.driversListContainer}>
            <h3>Drivers</h3>
            <table className={classes.driversData}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Tariff</th>
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