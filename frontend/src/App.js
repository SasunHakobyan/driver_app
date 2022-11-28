import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ClientListApi from "./components/ClientList/ClientListApi";
import DriverApi from "./components/DriverList/DriverApi";
import EditClient from "./components/EditClient/EditClient";
import EditDriver from "./components/EditDriver/EditDriver";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriverApi />}/>
                            <Route path='/clients' element={<ClientListApi />} />
                            <Route path='/editClient/:clientId' element={<EditClient />} />
                            <Route path='/editDriver/:driverId' element={<EditDriver />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;