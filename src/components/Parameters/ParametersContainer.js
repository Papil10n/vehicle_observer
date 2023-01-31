import Parameters from "./Parameters";
import {connect} from "react-redux";
import {setData} from "../../redux/params-reducer";

const ParametersContainer = (props) => {

    const prevData = {}
    if (props.uri === 'moto') {
        prevData['brand'] = props.prevMotoBrand;
        prevData['model'] = props.prevMotoModel;
        prevData['category'] = 'moto';
    } else if (props.uri === 'helicopters') {
        prevData['brand'] = props.prevHelicopterBrand;
        prevData['model'] = props.prevHelicopterModel;
        prevData['category'] = 'helicopters';
    }

    return <Parameters searchVehicle={props.searchVehicle} prevData={prevData} setPrevData={props.setData}/>
}

const mstp = (state) => {
    return {
        prevMotoBrand: state.params.prevMotoBrand,
        prevMotoModel: state.params.prevMotoModel,
        prevHelicopterBrand: state.params.prevHelicopterBrand,
        prevHelicopterModel: state.params.prevHelicopterModel,
    }
}

export default connect(mstp, {setData})(ParametersContainer);