import React, {useEffect, useState} from 'react';
import DriverList from "../../components/Drivers/DriverList/DriverList";

const DriversListContainer = () => {
    const [drivers, setDrivers] = useState([]);
    const [deleteModal, setDeleteModal] = useState({show:false, driverId:undefined});

    useEffect(() => {
        fetchDrivers();
    }, []);

    async function fetchDrivers() {
        try {
            const response = await fetch('http://localhost:5500/api/drivers/');
            const driversData = await response.json();

            setDrivers((prevState) => {
                return [...driversData.data.drivers]
            });

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
            modal={deleteModal}
            setModal={setDeleteModal}
            drivers={drivers}
            deleteDriver={deleteDriver}
        />
    );
};

export default DriversListContainer;