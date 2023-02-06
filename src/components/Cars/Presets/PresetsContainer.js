import Presets from "./Presets";
import {connect} from "react-redux";
import {searchCars} from "../../../redux/cars-reducer";

const PresetsContainer = (props) => {

    return <Presets searchCars={props.searchCars}/>
}

const mstp = (state) => {
    return {}
}

export default connect(mstp, {searchCars})(PresetsContainer);