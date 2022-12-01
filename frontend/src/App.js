import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ClientsListContainer from "./containers/ClientContainer/ClientsListContainer";
import DriversListContainer from "./containers/DriverContainer/DriversListContainer";
import EditClientContainer from "./containers/ClientContainer/EditClientContainer";
import EditDriverContainer from "./containers/DriverContainer/EditDriverContainer";
import AddDriverContainer from "./containers/DriverContainer/AddDriverContainer";
import AddClientContainer from "./containers/ClientContainer/AddClientContainer";

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
s
                            <Route path='/clients' element={<ClientsListContainer />} />
                            <Route path='/addClient' element={<AddClientContainer />} />
                            <Route path='/editClient/:clientId' element={<EditClientContainer />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;