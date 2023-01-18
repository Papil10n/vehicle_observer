import './scss/App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Moto from "./components/Moto/Moto";
import Helicopters from "./components/Helicopters/Helicopters";
import Aircraft from "./components/Aircraft/Aircraft";
import CarsContainer from "./components/Cars/CarsContainer";

function App() {
    return (
        <div className="wrapper">
            <div className="mainContainer">
                <Header/>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/cars" element={<CarsContainer />}/>
                        <Route path="/moto" element={<Moto />}/>
                        <Route path="/helicopters" element={<Helicopters />}/>
                        <Route path="/aircraft" element={<Aircraft />}/>
                    </Routes>
                </main>
            </div>
        </div>

    );
}

export default App;
