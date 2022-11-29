import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Clients from "./containers/ClientContainer/Clients";
import Drivers from "./containers/DriverContainer/Drivers";
import EditClient from "./components/EditClient/EditClient";
import EditDriver from "./components/EditDriver/EditDriver";
import {useState} from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<Drivers />}/>
                            <Route path='/editDriver/:driverId' element={<EditDriver />} />
                            <Route path='/clients' element={<Clients />} />
                            <Route path='/editClient/:clientId' element={<EditClient />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;