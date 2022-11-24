import React, {useEffect, useState} from "react";
import Driver from "../Driver/Driver";
import classes from './DriverList.module.css';

function DriverList(props) {

    const [drivers, setDrivers] = useState([]);

    async function fetchDrivers() {
        try {
            const response = await fetch('http://localhost:5500/getDrivers');
            const drivers = await response.json();
            setDrivers(drivers);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

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
                {
                    drivers.map(driver => {
                        return <Driver key={driver._id} driver={driver}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default DriverList;