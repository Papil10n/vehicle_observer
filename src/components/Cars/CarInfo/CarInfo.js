import betterUI from "../../../utils/betterUI";
import "../../../scss/carInfo.scss";

const CarInfo = ({spec}) => {

    const convertFuelConsumption = (value) => {
        return betterUI.number(235.215/value, null);
    }

    return <article className="car-article">
        <div className="car__class">
            <span className="spec__name">Class:</span>
            <span className="spec__value">{betterUI.text(spec.class)}</span>
        </div>
            <div className="car__specs">
                <div className="main__spec">
                    <div className="spec">
                        <span className="spec__name">Displacement:</span>
                        <span className="spec__value">{spec.displacement}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Transmission:</span>
                        <span className="spec__value">{spec.transmission === "a" ? "Automatic" : "Manual"}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Cylinders:</span>
                        <span className="spec__value">{spec.cylinders}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Drive:</span>
                        <span className="spec__value">{spec.drive.toUpperCase()}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Year:</span>
                        <span className="spec__value">{spec.year}</span>
                    </div>
                </div>
                <div className="fuel__spec">
                    <div className="spec">
                        <span className="spec__name">Fuel:</span>
                        <span className="spec__value">{betterUI.text(spec.fuel_type)}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Fuel consumption:</span>
                    </div>
                    <div className="spec spec-abs">
                        <span className="spec__name">City:</span>
                        <span className="spec__value">{convertFuelConsumption(spec.city_mpg)}</span>
                    </div>
                    <div className="spec spec-abs">
                        <span className="spec__name">Combination:</span>
                        <span className="spec__value">{convertFuelConsumption(spec.combination_mpg)}</span>
                    </div>
                    <div className="spec spec-abs">
                        <span className="spec__name">Highway:</span>
                        <span className="spec__value">{convertFuelConsumption(spec.highway_mpg)} </span>
                    </div>
                </div>
            </div>
    </article>
}

export default CarInfo;