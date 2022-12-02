import React, {useEffect, useState} from 'react';
import DriverList from "../../components/Drivers/DriverList/DriverList";

const DriversListContainer = () => {
    const [drivers, setDrivers] = useState([]);
    const [deleteModal, setDeleteModal] = useState({show:false, driverId:undefined});

    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [driversCount, setDriversCount] = useState(0);

    useEffect(() => {
        fetchDrivers();
    }, [currentPage, pageLimit]);

    async function fetchDrivers() {
        try {
            const response = await fetch(`http://localhost:5500/api/drivers?limit=${pageLimit}&pageNumber=${currentPage}`);
            const driversData = await response.json();

            setDriversCount((prevState) => {
                return driversData.driversCount;
            });

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

    const onLimitChange = (selectLimit) => {
        setPageLimit(selectLimit);
        setCurrentPage(1);
    }

    return (
        <DriverList
            changeLimit={onLimitChange}
            paginationData={{currentPage, setCurrentPage, driversCount, pageLimit}}
            modal={deleteModal}
            setModal={setDeleteModal}
            drivers={drivers}
            deleteDriver={deleteDriver}
        />
    );
};

export default DriversListContainer;