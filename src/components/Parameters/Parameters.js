import {useState} from "react";
import "./Parameters.scss";
import betterUI from "../../utils/betterUI";
import validate from "../../utils/validators/validatePresets";

const Parameters = (props) => {
    let [brand, setBrand] = useState("");
    let [model, setModel] = useState("");

    const changeBrand = (e) => {
        const value = e.target.value;
        validate.isBasicValid(value) ? setBrand(betterUI.text(value)) : console.log()
    }
    const changeModel = (e) => {
        const value = e.target.value;
        validate.isModelValid(value) ? setModel(betterUI.text(value)) : console.log()
    }
    const searchAction = () => {
        props.searchVehicle({model, brand})
    }


    return <div className="option">
        <div className="option__container">
            <div className="option__section">
                <div className="option__item">
                    <div className="item__text">Manufacturer:</div>
                    <div className="item__input">
                        <input value={brand} onInput={(e)=>{changeBrand(e)}} className="input" type="text"/>
                    </div>
                </div>
                <div className="between__item">
                    OR
                </div>
                <div className="option__item">
                    <div className="item__text">Model:</div>
                    <div className="item__input">
                        <input value={model} onInput={(e)=>{changeModel(e)}} className="input" type="text"/>
                    </div>
                </div>
            </div>
            <div className="option__button">
                <button onClick={searchAction} className="option__btn searchBtn">Search</button>
            </div>
        </div>
    </div>
}

export default Parameters;