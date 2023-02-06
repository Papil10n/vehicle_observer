import "./HelicoptersInfo.scss";
import betterUI from "../../../utils/betterUI";

const HelicoptersInfo = ({spec}) => {

    const convertValue = (value, stat, length) => {
        return betterUI.number(value * stat, length);
    }

    return <article className="helicopter-article">
        <div className="helicopter__class">
            <div className="spec__name">Manufacturer:</div>
            <div className="spec__value">{spec.manufacturer}</div>
        </div>
        <div className="helicopter__specs">
            <div className="spec">
                <div className="spec__name">Model:</div>
                <div className="spec__value">{spec.model ? spec.model : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Full speed:</div>
                <div
                    className="spec__value">{spec.max_speed_sl_knots ? convertValue(spec.max_speed_sl_knots, 1.852, 0) + " km/h" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Height:</div>
                <div
                    className="spec__value">{spec.height_ft ? convertValue(spec.height_ft, 0.3048, 2) + " m" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Cruise speed:</div>
                <div
                    className="spec__value">{spec.cruise_speed_sl_knots ? convertValue(spec.cruise_speed_sl_knots, 1.852, 0) + " km/h" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Length:</div>
                <div
                    className="spec__value">{spec.length_ft ? convertValue(spec.length_ft, 0.3048, 2) + " m" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Main rotor diameter:</div>
                <div
                    className="spec__value">{spec.main_rotor_diameter_ft ? convertValue(spec.main_rotor_diameter_ft, 0.3048, 2) + " m" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Number of blades:</div>
                <div className="spec__value">{spec.num_blades ? spec.num_blades : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Blade material:</div>
                <div className="spec__value">{spec.blade_material ? betterUI.text(spec.blade_material) : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Fuel consumption:</div>
                <div
                    className="spec__value">{spec.fuel_consumption_gallons_pr_hr ? convertValue(spec.fuel_consumption_gallons_pr_hr, 3.78541, 0) + " lph" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Fuel capacity:</div>
                <div
                    className="spec__value">{spec.fuel_capacity_gallons ? convertValue(spec.fuel_capacity_gallons, 3.78541, 0) + " l" : "N/A"}</div>
            </div>
        </div>
    </article>
}

export default HelicoptersInfo;