import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ClientsListContainer from "./containers/ClientContainer/ClientsListContainer";
import DriversListContainer from "./containers/DriverContainer/DriversListContainer";
import AddDriverContainer from "./containers/DriverContainer/AddDriverContainer";
import AddClientContainer from "./containers/ClientContainer/AddClientContainer";
import NotFound from "./components/Error/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriversListContainer />} />
                            <Route path='/addDriver' element={<AddDriverContainer type='add'/>} />
                            <Route path='/editDriver/:driverId' element={<AddDriverContainer type='edit' />} />

                            <Route path='/clients' element={<ClientsListContainer />} />
                            <Route path='/addClient' element={<AddClientContainer type='add' />} />
                            <Route path='/editClient/:clientId' element={<AddClientContainer type='edit' />} />

                            <Route path='/notfound' element={<NotFound/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;