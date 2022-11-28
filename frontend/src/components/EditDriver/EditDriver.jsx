import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Form from "../Form/Form";

const EditDriver = () => {
    const fields = [
        {fieldName: 'username'},
        {fieldName: 'password'},
        {fieldName: 'tariff'},
        {fieldName: 'rating'}
    ];

    const {driverId} = useParams();

    const initialDriver = {
        username: '',
        password: '',
        tariff: '',
        rating: ''
    };

    const [driver, setDriver] = useState(initialDriver);

    const fetchDriver = async () => {
        const response = await fetch(`http://localhost:5500/api/drivers/${driverId}`);
        const driverData = await response.json();
        const {username, password, tariff, rating} = driverData.data.driver;

        setDriver({username, password, tariff, rating});
    }

    const onNewDataChange = (fieldName, value) => {
        const newDriver = {...driver};
        newDriver[fieldName] = value;

        setDriver(newDriver);
    }

    const saveData = async () => {
        const reqBody = {
            driverId: driverId,
            updateData: driver
        };

        const response = await fetch('http://localhost:5500/api/drivers/updateDriver', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        });

        const {responseCode} = await response.json();

        if (responseCode === 0) {
            console.log('DONE');
        }
    }

    useEffect(() => {
        fetchDriver();
    }, []);

    return <Form fields={fields} formData={driver} saveData={saveData} onNewDataChange={onNewDataChange} />
};

export default EditDriver;