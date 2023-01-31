import {connect} from "react-redux";
import Helicopters from "./Helicopters";
import {searchHelicopters, toggleHelicopterPortion} from "../../redux/helicopter-reducer";

const HelicoptersContainer = (props) => {

    const onChange = (page) => {
        const coptersCont = document.querySelector(".option__button");
        props.toggleHelicopterPortion(page, props.pageSize, props.helicopters)
        coptersCont.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return <Helicopters portionCopters={props.portionCopters} onChange={onChange} currentPage={props.currentPage}
                 pageSize={props.pageSize} totalCoptersCount={props.totalCoptersCount} searchHelicopters={props.searchHelicopters} isEmpty={props.isEmpty}
                 isFetching={props.isFetching}/>
}

const mstp = (state) => {
    return {
        helicopters: state.helicopters.helicopters,
        isEmpty: state.helicopters.isEmpty,
        isFetching: state.helicopters.isFetching,
        totalCoptersCount: state.helicopters.totalCoptersCount,
        pageSize: state.helicopters.pageSize,
        currentPage: state.helicopters.currentPage,
        portionCopters: state.helicopters.portionCopters,
    }
}

export default connect(mstp, {toggleHelicopterPortion, searchHelicopters})(HelicoptersContainer);