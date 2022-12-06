import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import DriverForm from "../../components/Drivers/DriverForm/DriverForm";

const initialDriver = {
    username: '',
    password: '',
    tariff: '',
    rating: ''
}

const AddDriverContainer = (props) => {
    const navigate = useNavigate();
    const {driverId} = useParams();
    const [driverFormData, setDriverFormData] = useState(initialDriver);

    useEffect(() => {
        if (props.type === 'edit') {
            fetchDriver();
        }
    }, []);

    const onNewDataChange = (fieldName, value) => {
        console.log('changing data');
        setDriverFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            };
        });
    }

    const addDriver = useCallback(async() => {
        try {
            const response = await fetch('http://localhost:5500/api/drivers/addDriver', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(driverFormData)
            });

            const responseData = await response.json();

            if (responseData.responseCode === 200) {
                navigate('/drivers');
            }

        } catch (err) {
            console.log(err);
        }
    }, [driverFormData]);

    const updateDriver = useCallback(async() => {
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

    }, [driverId, driverFormData]);

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

    return (
        <DriverForm
            formData={driverFormData}
            saveData={props.type === 'add' ? addDriver : updateDriver}
            onNewDataChange={onNewDataChange} />
    );
};

export default AddDriverContainer;