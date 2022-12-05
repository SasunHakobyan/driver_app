import React, {useCallback, useState} from 'react';
import {useNavigate} from "react-router-dom";
import DriverForm from "../../components/Drivers/DriverForm/DriverForm";

const AddDriverContainer = (props) => {
    const navigate = useNavigate();
    const [driverFormData, setDriverFormData] = useState({});

    const onNewDataChange = (fieldName, value) => {
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

    return (
        <DriverForm
            formData={driverFormData}
            saveData={addDriver}
            onNewDataChange={onNewDataChange} />
    );
};

export default AddDriverContainer;