import './scss/App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Helicopters from "./components/Helicopters/Helicopters";
import Aircraft from "./components/Aircraft/Aircraft";
import CarsContainer from "./components/Cars/CarsContainer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import MotoContainer from "./components/Moto/MotoContainer";

function App() {
    return (
        <div className="wrapper">
            <div className="mainContainer">
                <Header/>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/cars" element={<CarsContainer />}/>
                        <Route path="/moto" element={<MotoContainer />}/>
                        <Route path="/helicopters" element={<Helicopters />}/>
                        <Route path="/aircraft" element={<Aircraft />}/>
                        <Route path="/*" element={<ErrorPage />}/>
                    </Routes>
                </main>
            </div>
        </div>

    );
}

export default App;
