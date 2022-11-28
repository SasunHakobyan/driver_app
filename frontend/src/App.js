import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ClientListApi from "./components/ClientList/ClientListApi";
import DriverListApi from "./components/DriverList/DriverListApi";
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
                            <Route path='/drivers' element={<DriverListApi />}/>
                            <Route path='/editDriver/:driverId' element={<EditDriver />} />
                            <Route path='/clients' element={<ClientListApi />} />
                            <Route path='/editClient/:clientId' element={<EditClient />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;