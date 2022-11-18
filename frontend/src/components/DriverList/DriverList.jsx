import Driver from "../Driver/Driver";
import classes from './DriverList.module.css';

const DriverList = (pops) => {
    let driver1 = {
        id: 1,
        userName: 'Armen',
        tariff: 'econom'
    };

    let driver2 = {
        id: 2,
        userName: 'Jack',
        tariff: 'comfort'
    }

    let drivers = [driver1, driver2];
    let driversElements = drivers.map(driver => {
        return <Driver driver={driver}/>
    })

    return (
        <div className={classes.driversListContainer}>
            <h3>Drivers</h3>
            <table className={classes.driversData}>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Tariff</th>
                </tr>
                {driversElements}
            </table>
        </div>
    );
}

export default DriverList;