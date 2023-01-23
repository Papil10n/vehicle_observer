import CarInfo from "./CarInfo/CarInfo";
import "../../scss/cars.scss";
import PresetsContainer from "../Presets/PresetsContainer";
import Paginator from "../common/Paginator/Paginator";
import CarPopUp from "./CarPopUp/CarPopUp";
import Preloader from "../common/Preloader/Preloader";

const Cars = (props) => {
    const carItems = props.portionCars.map((car, i) => <CarInfo key={i} spec={car} name={props.name}/>);

    return <section className="cars">
        <PresetsContainer/>
        <CarPopUp name={props.name}/>
        {props.isEmpty ? <div className="empty">THERE ARE NO CARS, MAYBE YOU HAVE SET THE INCORRECT PARAMETERS</div> :
                props.isFetching ? <Preloader/> : <div>
                    <div className="cars__container">
                        {carItems}
                    </div>
                    <Paginator totalItemsCount={props.totalCarsCount} pageSize={props.pageSize}
                               onPageChanged={props.onChange}
                               currentPage={props.currentPage}/>
                </div>
            }}
    </section>;
}
export default Cars;



