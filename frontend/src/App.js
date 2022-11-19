import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DriverList from "./components/DriverList/DriverList";
import NavBar from "./components/NavBar/NavBar";
import {useState} from "react";

function App() {

    const initialDriversState = [];
    const [driversState, setDrivers] = useState(initialDriversState);

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar driverState={driversState} setDriver={setDrivers} />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriverList drivers={driversState} />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
