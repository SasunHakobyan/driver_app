import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import DriverForm from "../../components/Drivers/DriverForm/DriverForm";

const initialDriver = {
    username: '',
    password: '',
    tariff: '',
    rating: ''
}

const EditDriverContainer = () => {
    const navigate = useNavigate();
    const {driverId} = useParams();
    const [driverFormData, setDriverFormData] = useState(initialDriver);

    useEffect(() => {
        fetchDriver();
    }, []);

    const fetchDriver = useCallback(async () => {
        const response = await fetch(`http://localhost:5500/api/drivers/${driverId}`);
        const responseData = await response.json();

        if (responseData.responseCode === 404) {
            navigate('/notfound');
        } else if (responseData.responseCode === 200) {
            const {username, password, tariff, rating} = responseData.data.driver;
            setDriverFormData({username, password, tariff, rating});
        }

    }, [driverId]);

    const onNewDataChange = (fieldName, value) => {
        setDriverFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        });
    }

    const saveData = useCallback(async() => {
        const reqBody = {
            driverId: driverId,
            updateData: driverFormData
        };

        const response = await fetch('http://localhost:5500/api/drivers/updateDriver', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        });

        const responseData = await response.json();

        if (responseData.responseCode === 200) {
            navigate('/drivers');
        } else if (responseData.responseCode === 404) {
            navigate('/notfound');
        }

    }, [driverId, driverFormData])

    return (
        <div>
            <h2>Edit Driver</h2>
            <DriverForm
                formData={driverFormData}
                saveData={saveData}
                onNewDataChange={onNewDataChange} />
        </div>
    );
};

export default EditDriverContainer;