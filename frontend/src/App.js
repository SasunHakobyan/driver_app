import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DriverList from "./components/DriverList/DriverList";
import driver from "./components/Driver/Driver";

function App() {

    const initialDriversState = {
        drivers: [],
        dataIsLoaded: false
    }

    const [driversState, setDrivers] = useState(initialDriversState);

    fetch("http://localhost:5500/getDrivers")
        .then(res => res.json())
        .then(res => {
            const drivers = Array.from(res);
            const newDriversState = Object.assign({}, driversState);

            newDriversState.drivers = drivers;
            newDriversState.dataIsLoaded = true;

            // setDrivers(newDriversState);
            console.log(driversState)

        })
        .catch(err => {
            console.log(err);
        });

    console.log(driversState);

    if (!driversState.dataIsLoaded) {
        return <div>Please wait</div>
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/drivers' element={<DriverList drivers={driversState.drivers} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
