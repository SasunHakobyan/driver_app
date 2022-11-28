import React, {useEffect, useState} from "react";
import DriverItem from "../DriverItem/DriverItem";
import classes from './DriverList.module.css';
import Form from "../Form/Form";

function DriverList(props) {
    const fields = [
        {fieldName: 'username'},
        {fieldName: 'password'},
        {fieldName: 'tariff'},
        {fieldName: 'rating'}
    ];

    return (
        <div className={classes.driversListContainer}>
            <h2>Drivers</h2>
            <Form fields={fields} actionType='add' formData={props.drivers.newDriver} saveData={props.addDriver} onNewDataChange={props.onNewDataChange} />
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
                        return <DriverItem key={driver._id} driver={driver} deleteDriver={props.deleteDriver}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default DriverList;