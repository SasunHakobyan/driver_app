import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import DriverForm from "../../components/Drivers/DriverForm/DriverForm";

const AddDriverContainer = () => {
    const navigate = useNavigate();
    const [driverFormData, updateDriverFormData] = useState({});

    const onNewDataChange = (fieldName, value) => {
        updateDriverFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            };
        });
    }

    const addDriver = async () => {
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
    }

    return (
        <DriverForm
            formData={driverFormData}
            saveData={addDriver}
            onNewDataChange={onNewDataChange} />
    );
};

export default AddDriverContainer;