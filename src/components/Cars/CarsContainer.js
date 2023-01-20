import {connect} from "react-redux";
import Cars from "./Cars";

const CarsContainer = (props) => {
    return <Cars cars={props.cars} name={`${props.brand} ${props.model}`} photo={props.photo} isEmpty={props.isEmpty}/>
}

const mstp = (state) => {
    return {
        cars: state.cars.cars,
        brand: state.cars.specs.brand,
        model: state.cars.specs.model,
        isEmpty: state.cars.isEmpty,
        photo: state.cars.specs.photo,
    }
}

export default connect(mstp, {})(CarsContainer);