import "../../scss/presets.scss";

const Presets = (props) => {

    return <div className="presets">
        <div className="presets__container">
            <div className="presets__sections">
                <div className="presets__section main-section">
                    <div className="presets__item">
                        <div className="item__text">Brand:</div>
                        <div className="item__input">
                            <input className="input" type="text"/>
                        </div>
                    </div>
                    <div className="presets__item">
                        <div className="item__text">Model:</div>
                        <div className="item__input">
                            <input className="input" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="presets__section">
                    <div className="presets__item">
                        <div className="item__text">Year:</div>
                        <div className="item__input">
                            <input className="input" type="text"/>
                        </div>
                    </div>
                    <div className="presets__item">
                        <div className="item__text">Fuel:</div>
                        <div className="item__input">
                            <input className="input" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="presets__section add-section">
                    <div className="presets__item">
                        <div className="item__text">Transmission:</div>
                        <div className="item__input">
                            <input className="input input-small" type="text"/>
                        </div>
                    </div>
                    <div className="presets__item">
                        <div className="item__text">Cylinders:</div>
                        <div className="item__input">
                            <input className="input input-medium" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="presets__button">
                <button className="presets__btn">Search</button>
            </div>
        </div>
    </div>
}

export default Presets;