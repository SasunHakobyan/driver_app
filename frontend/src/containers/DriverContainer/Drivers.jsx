import React, {useEffect, useState} from 'react';
import DriverList from "../../components/DriverList/DriverList";

const Drivers = () => {

    const initialState = {
        driverFormData: {},
        allDrivers: []
    }

    const [drivers, setDrivers] = useState(initialState);
    const [modal, setModal] = useState({show:false, driverId:undefined});

    async function fetchDrivers() {
        try {
            const response = await fetch('http://localhost:5500/api/drivers/');
            const driversData = await response.json();

            const newState = {
                ...drivers,
                driverFormData: {},
                allDrivers: driversData.data.drivers
            }

            setDrivers(newState);

        } catch (err) {
            console.log(err);
        }
    }

    const onNewDataChange = (fieldName, value) => {
        const newState = {
            ...drivers,
            driverFormData: {
                ...drivers.driverFormData
            }
        }

        newState.driverFormData[fieldName] = value;
        setDrivers(newState);
    }

    const addDriver = async () => {
        const newDriver = {...drivers.driverFormData};

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

    useEffect(() => {
        fetchDrivers();
    }, []);

    return (
        <DriverList
            modal={modal}
            setModal={setModal}
            drivers={drivers}
            addDriver={addDriver}
            onNewDataChange={onNewDataChange}
            deleteDriver={deleteDriver}
        />
    );
};

export default Drivers;