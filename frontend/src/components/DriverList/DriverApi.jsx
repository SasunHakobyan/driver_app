import React, {useEffect, useState} from 'react';
import DriverList from "./DriverList";

const DriverApi = () => {

    const initialState = {
        newDriver: {
            username: '',
            password: '',
            tariff: '',
            rating: ''
        },
        allDrivers: []
    }

    const [drivers, setDrivers] = useState(initialState);

    async function fetchDrivers() {
        try {
            const response = await fetch('http://localhost:5500/api/drivers/');
            const driversData = await response.json();

            const newState = {
                ...drivers,
                newDriver: {
                    username: '',
                    password: '',
                    tariff: '',
                    rating: ''
                },
                allDrivers: driversData.data.drivers
            }

            setDrivers(newState);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDrivers();
    }, []);

    const onNewDataChange = (fieldName, value) => {
        const newState = {
            ...drivers,
            newDriver: {
                ...drivers.newDriver
            }
        }

        newState.newDriver[fieldName] = value;
        setDrivers(newState);
    }

    const addDriver = async () => {
        const newDriver = {...drivers.newDriver};

        try {
            const response = await fetch('http://localhost:5500/api/drivers/addDriver', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newDriver)
            });

            await fetchDrivers();
        } catch (err) {
            console.log(err);
        }
    }

    const deleteDriver = async (driverId) => {
        try {
            const response = await fetch('http://localhost:5500/api/drivers/deleteDriver', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({driverId})
            });

            await fetchDrivers();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <DriverList
            drivers={drivers}
            addDriver={addDriver}
            onNewDataChange={onNewDataChange}
            deleteDriver={deleteDriver}
        />
    );
};

export default DriverApi;