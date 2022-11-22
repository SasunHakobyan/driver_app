import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DriverList from "./components/DriverList/DriverList";
import NavBar from "./components/NavBar/NavBar";
import {useState} from "react";
import ClientList from "./components/ClientList/ClientList";

function App() {

    const [driversState, setDrivers] = useState([]);
    const [clientsState, setClients] = useState([]);

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar setClient={setClients} setDriver={setDrivers} />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriverList drivers={driversState} />}/>
                            <Route path='/clients' element={<ClientList clients={clientsState} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;