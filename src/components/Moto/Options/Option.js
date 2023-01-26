import "./Option.scss";
import {useState} from "react";
import validate from "../../../utils/validators/validatePresets";
import betterUI from "../../../utils/betterUI";

const Option = (props) => {
    let [brand, setBrand] = useState("")
    let [model, setModel] = useState("")

    const changeBrand = (e) => {
        const value = e.target.value;
        validate.isBasicValid(value) ? setBrand(betterUI.text(value)) : console.log()
    }
    const changeModel = (e) => {
        const value = e.target.value;
        validate.isModelValid(value) ? setModel(betterUI.text(value)) : console.log()
    }
    const searchAction = () => {
        props.searchMotos({model, brand})
    }


    return <div className="option">
        <div className="option__container">
            <div className="option__section">
                <div className="option__item">
                    <div className="item__text">Brand:</div>
                    <div className="item__input">
                        <input value={brand} onInput={(e)=>{changeBrand(e)}} placeholder="required" className="input" type="text"/>
                    </div>
                </div>
                <div className="option__item">
                    <div className="item__text">Model:</div>
                    <div className="item__input">
                        <input value={model} onInput={(e)=>{changeModel(e)}} placeholder="required" className="input" type="text"/>
                    </div>
                </div>
            </div>
            <div className="option__button">
                <button onClick={searchAction} className="option__btn searchBtn">Search</button>
            </div>
        </div>
    </div>
}

export default Option;