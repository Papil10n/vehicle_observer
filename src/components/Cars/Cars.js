import CarInfo from "./CarInfo/CarInfo";
import "../../scss/cars.scss";
import PresetsContainer from "../Presets/PresetsContainer";

const Cars = (props) => {
    const carItems = props.cars.map((car,i)=> <CarInfo key={i} spec={car} name={props.name} /> ) ;

    return <section className="cars">
        <PresetsContainer />
        <div className="cars__container">
            {props.isEmpty ? <div className="empty">THERE ARE NO CARS, MAYBE YOU HAVE SET THE INCORRECT PARAMETERS</div> : carItems}
        </div>
    </section>;
}
export default Cars;



