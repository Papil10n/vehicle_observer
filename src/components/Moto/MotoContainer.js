import Moto from "./Moto";
import {connect} from "react-redux";
import {searchMotos, toggleMotoPortion} from "../../redux/moto-reducer";

const MotoContainer = (props) => {

    const onChange = (page) => {
        const motoCont = document.querySelector(".option__button");
        props.toggleMotoPortion(page, props.pageSize, props.motos)
        motoCont.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return <Moto portionMotos={props.portionMotos} onChange={onChange} currentPage={props.currentPage}
                 pageSize={props.pageSize} searchMotos={props.searchMotos} totalMotosCount={props.totalMotosCount} isEmpty={props.isEmpty}
                 isFetching={props.isFetching}/>
}

const mstp = (state) => {
    return {
        motos: state.moto.motos,
        isEmpty: state.moto.isEmpty,
        isFetching: state.moto.isFetching,
        totalMotosCount: state.moto.totalMotosCount,
        pageSize: state.moto.pageSize,
        currentPage: state.moto.currentPage,
        portionMotos: state.moto.portionMotos,
    }
}

export default connect(mstp, {toggleMotoPortion, searchMotos})(MotoContainer);