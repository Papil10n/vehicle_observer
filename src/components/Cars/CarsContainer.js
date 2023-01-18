import {connect} from "react-redux";
import Cars from "./Cars";

const CarsContainer = (props) => {

    return <Cars cars={props.cars} />
}

const mstp = (state) => {
    return {
        cars: state.cars.cars,
    }
}

export default connect(mstp, {})(CarsContainer);