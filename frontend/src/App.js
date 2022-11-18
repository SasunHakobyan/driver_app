import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DriverList from "./components/DriverList/DriverList";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/drivers' element={<DriverList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
