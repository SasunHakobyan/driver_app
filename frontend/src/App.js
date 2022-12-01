import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Clients from "./containers/ClientContainer/Clients";
import DriversListContainer from "./containers/DriverContainer/DriversListContainer";
import EditClient from "./components/Clients/EditClient/EditClient";
import EditDriverContainer from "./containers/DriverContainer/EditDriverContainer";
import AddDriverContainer from "./containers/DriverContainer/AddDriverContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriversListContainer />} />
                            <Route path='/addDriver' element={<AddDriverContainer/>} />
                            <Route path='/editDriver/:driverId' element={<EditDriverContainer />} />

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