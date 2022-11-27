import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DriverList from "./components/DriverList/DriverList";
import ClientApi from "./components/ClientList/ClientApi";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <NavBar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/drivers' element={<DriverList />}/>
                            <Route path='/clients' element={<ClientApi />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;