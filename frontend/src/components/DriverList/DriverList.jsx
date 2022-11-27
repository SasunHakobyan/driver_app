import React, {useEffect, useState} from "react";
import Driver from "../Driver/Driver";
import classes from './DriverList.module.css';
import DriverForm from "../DriverForm/DriverForm";

function DriverList(props) {

    return (
        <div className={classes.driversListContainer}>
            <h2>Drivers</h2>
            <DriverForm newDriverData={props.drivers.newDriver} addDriver={props.addDriver} onNewDataChange={props.onNewDataChange} />
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
                        return <Driver key={driver._id} driver={driver} deleteDriver={props.deleteDriver}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default DriverList;