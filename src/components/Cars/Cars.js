import Presets from "../Presets/Presets";
import CarInfo from "./CarInfo/CarInfo";
import "../../scss/cars.scss";

const Cars = (props) => {
    const carItems = props.cars.map((car,i)=> <CarInfo key={i} spec={car} /> ) ;

    return <section className="cars">
        <Presets />
        <div className="cars__container">
            {carItems}
        </div>
    </section>;
}
export default Cars;



