import "../../../scss/CarImgPopUp.scss";
import {connect} from "react-redux";
import {changePopUpMode} from "../../../redux/cars-reducer";

const CarPopUp = (props) => {

    const [brand, model] = props.name.split(" ");

    return <div className={props.isOpened ? "popUp opened" : "popUp closed"}>
        <div className="popUp__container">

            {!props.isOpened ?
                <button onClick={() => {
                    props.isPopUpOpen(true)
                }} className="popUp__closedBtn">Show photo of latest car</button> :
                <div className="content">
                    <button onClick={() => {
                        props.isPopUpOpen(false)
                    }} className="popUp__closedBtn inPopUp">Close
                    </button>
                    <div className="popUp__carImage">
                        <img
                            src={`https://cdn.imagin.studio/getImage?customer=uapapillon1&make=${brand}&modelFamily=${model}`}
                            alt=""/>
                    </div>
                </div>}
        </div>
    </div>
}

// export default CarPopUp;


const CarPopUpContainer = (props) => {

    const isPopUpOpen = (mode) => {
        document.body.classList.toggle('fixed');
        const carImg = document.querySelector(".presets__btn");
        carImg.scrollIntoView({top:0,behavior:'smooth'})

        props.changePopUpMode(mode)
    }

    return !props.isCars ? null :
        <CarPopUp isOpened={props.isPopUpShowing} name={props.name} isPopUpOpen={isPopUpOpen}/>;
}

const mstp = (state) => {
    return {
        isCars: state.cars.isCars,
        isPopUpShowing: state.cars.isPopUpShowing,
    }
}

export default connect(mstp, {changePopUpMode})(CarPopUpContainer);