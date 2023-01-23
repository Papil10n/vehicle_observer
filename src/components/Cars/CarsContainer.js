import {connect} from "react-redux";
import Cars from "./Cars";
import {setCurrentPage, setPortionCars, toggleCarPortion} from "../../redux/cars-reducer";

const CarsContainer = (props) => {

    const onChange = (page) => {
        const carsCont = document.querySelector(".presets__button");
        props.toggleCarPortion(page, props.pageSize, props.cars)
        carsCont.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return <Cars portionCars={props.portionCars} onChange={onChange} currentPage={props.currentPage}
                 totalCarsCount={props.totalCarsCount} pageSize={props.pageSize} name={`${props.brand} ${props.model}`}
                 isEmpty={props.isEmpty} isFetching={props.isFetching}/>
}

const mstp = (state) => {
    return {
        cars: state.cars.cars,
        brand: state.cars.specs.brand,
        model: state.cars.specs.model,
        isEmpty: state.cars.isEmpty,
        pageSize: state.cars.pageSize,
        totalCarsCount: state.cars.totalCarsCount,
        currentPage: state.cars.currentPage,
        portionCars: state.cars.portionCars,
        isFetching: state.cars.isFetching,
    }
}

export default connect(mstp, {toggleCarPortion})(CarsContainer);