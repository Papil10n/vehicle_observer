import {connect} from "react-redux";
import Option from "./Option";
import {searchMotos} from "../../../redux/moto-reducer";

const OptionContainer = (props) => {


    return <Option searchMotos={props.searchMotos}/>
}

const mstp = (state) => {
    return {}
}

export default connect(mstp,{searchMotos})(OptionContainer);