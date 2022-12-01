import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import DriverForm from "../../components/Drivers/DriverForm/DriverForm";

const EditDriverContainer = () => {
    const navigate = useNavigate();
    const {driverId} = useParams();
    const [driverFormData, setDriverFormData] = useState({});

    useEffect(() => {
        fetchDriver();
    }, []);

    const fetchDriver = async () => {
        const response = await fetch(`http://localhost:5500/api/drivers/${driverId}`);
        const responseData = await response.json();
        const {username, password, tariff, rating} = responseData.data.driver;

        setDriverFormData({username, password, tariff, rating});
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

        const responseData = await response.json();

        if (responseData.responseCode === 0) {
            navigate('/drivers');
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