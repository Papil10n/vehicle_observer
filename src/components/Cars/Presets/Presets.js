import "./presets.scss";
import {useState} from "react";
import validate from "../../../utils/validators/validatePresets";
import betterUI from "../../../utils/betterUI";

const Presets = (props) => {
    let [brand, setBrand] = useState("")
    let [model, setModel] = useState("")
    let [year, setYear] = useState("")
    let [fuel, setFuel] = useState("")
    let [transmission, setTransmission] = useState("")
    let [cylinders, setCylinders] = useState("")

    const settingValue = (spec, e) => {
        let value = e.target.value;
        switch (spec) {
            case "brand":
                validate.isBasicValid(value) ? setBrand(betterUI.text(value)) : console.log()
                break;
            case "model":
                validate.isModelValid(value) ? setModel(betterUI.text(value)) : console.log()
                break;
            case "year":
                validate.isNumberValid(value, 4, 2023) ? setYear(value) : console.log()
                break;
            case "fuel":
                setFuel(value);
                break;
            case "transmission":
                setTransmission(value);
                break;
            case "cylinders":
                setCylinders(value);
                break;
        }
    }

    const searchAction = () => {
        props.searchCars({brand,model,year,fuel,transmission,cylinders})
    }

    return <div className="presets">
        <div className="presets__container">
            <div className="presets__sections">
                <div className="presets__main">
                    <div className="presets__section">
                        <div className="presets__item">
                            <div className="item__text">Brand:</div>
                            <div className="item__input">
                                <input value={brand} onInput={(e) => {settingValue("brand",e)}} className="input" placeholder="required" type="text"/>
                            </div>
                        </div>
                        <div className="presets__item">
                            <div className="item__text">Model:</div>
                            <div className="item__input">
                                <input value={model} onInput={(e) => {settingValue("model",e)}} className="input" placeholder="required" type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="presets__add">
                    <div className="presets__section">
                        <div className="presets__item">
                            <div className="item__text">Year:</div>
                            <div className="item__input">
                                <input value={year} onInput={(e) => {settingValue("year",e)}} className="input" type="text"/>
                            </div>
                        </div>
                        <div className="presets__item">
                            <div className="item__text">Fuel:</div>
                            <div className="item__input">
                                <select value={fuel} onInput={(e) => {settingValue("fuel",e)}} className="input">
                                    <option value=""></option>
                                    <option value="gas">Gas</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="electricity">Electricity</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="presets__section add-section">
                        <div className="presets__item">
                            <div className="item__text">Transmission:</div>
                            <div className="item__input">
                                <select value={transmission} onInput={(e) => {settingValue("transmission",e)}} className="input input-small">
                                    <option value=""></option>
                                    <option value="awd">AWD</option>
                                    <option value="4wd">4WD</option>
                                    <option value="fwd">FWD</option>
                                    <option value="rwd">RWD</option>
                                </select>
                            </div>
                        </div>
                        <div className="presets__item">
                            <div className="item__text">Cylinders:</div>
                            <div className="item__input">
                                <select value={cylinders} onInput={(e) => {settingValue("cylinders",e)}} className="input input-medium">
                                    <option value=""></option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="presets__button">
                <button onClick={searchAction} className="presets__btn searchBtn">Search</button>
            </div>
        </div>
    </div>
}

export default Presets;