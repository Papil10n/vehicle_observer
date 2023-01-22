import CarInfo from "./CarInfo/CarInfo";
import "../../scss/cars.scss";
import PresetsContainer from "../Presets/PresetsContainer";
import Paginator from "../common/Paginator/Paginator";
import CarImgPopUp from "./CarImgPopUp/CarImgPopUp";

const Cars = (props) => {

    const carItems = props.portionCars.map((car, i) => <CarInfo key={i} spec={car} name={props.name}/>);

    return <section className="cars">
        <PresetsContainer/>
        <CarImgPopUp/>
        <div className="cars__container">
            {props.isEmpty ?
                <div className="empty">THERE ARE NO CARS, MAYBE YOU HAVE SET THE INCORRECT PARAMETERS</div> : carItems}
        </div>
        <Paginator totalItemsCount={props.totalCarsCount} pageSize={props.pageSize} onPageChanged={props.onChange}
                                           currentPage={props.currentPage} />
    </section>;
}
export default Cars;



