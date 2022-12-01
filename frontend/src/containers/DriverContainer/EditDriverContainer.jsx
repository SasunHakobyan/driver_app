import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import DriverForm from "../../components/Drivers/DriverForm/DriverForm";

const EditDriverContainer = () => {
    const {driverId} = useParams();
    const [driverFormData, setDriverFormData] = useState({});

    useEffect(() => {
        fetchDriver();
    }, []);

    const fetchDriver = async () => {
        const response = await fetch(`http://localhost:5500/api/drivers/${driverId}`);
        const driverData = await response.json();

        const driver = driverData.data.driver;
        setDriverFormData({...driver});
    }

    const onNewDataChange = (fieldName, value) => {
        setDriverFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
    }

    const saveData = async () => {
        const reqBody = {
            driverId: driverId,
            updateData: driverFormData
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

    return (
        <div>
            <h2>Edit Driver</h2>
            <DriverForm formData={driverFormData} saveData={saveData} onNewDataChange={onNewDataChange} />
        </div>
    );
};

export default EditDriverContainer;