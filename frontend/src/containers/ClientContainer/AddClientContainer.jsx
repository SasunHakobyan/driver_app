import React, {useState} from 'react';
import ClientForm from "../../components/Clients/ClientForm/ClientForm";
import {useNavigate} from "react-router-dom";

const AddClientContainer = (props) => {
    const navigate = useNavigate();
    const [clientFormData, setClientFormData] = useState({})

    const onNewDataChange = (fieldName, value) => {
        setClientFormData((prevState) => {
            return {
                ...prevState,
                [fieldName]: value
            }
        })
    }

    const addClient = async () => {
        try {
            const response = await fetch('http://localhost:5500/api/clients/addClient', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(clientFormData)
            });

            const responseData = await response.json();

            if (responseData.responseCode === 0) {
                navigate('/clients');
            }

        } catch (err) {
            console.log(err);
        }
    }

    return <ClientForm
        formData={clientFormData}
        saveData={addClient}
        onNewDataChange={onNewDataChange}/>
};

export default AddClientContainer;