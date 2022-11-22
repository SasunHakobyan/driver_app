import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DriverList from "./components/DriverList/DriverList";
import NavBar from "./components/NavBar/NavBar";
import ClientList from "./components/ClientList/ClientList";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriverList />}/>
                            <Route path='/clients' element={<ClientList />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;