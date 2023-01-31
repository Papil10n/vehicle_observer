import "./HelicoptersInfo.scss";
import betterUI from "../../../utils/betterUI";

const HelicoptersInfo = ({spec}) => {

    const convertKnots = (knots) => {
        return betterUI.number(knots * 1.852,0);
    }
    const convertFts = (ft) => {
        return betterUI.number(ft * 0.3048, 2);
    }

    console.log(spec)
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
                <div className="spec__value">{spec.max_speed_sl_knots ? convertKnots(spec.max_speed_sl_knots) + " km/h" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Height:</div>
                <div className="spec__value">{spec.height_ft ? convertFts(spec.height_ft) + " m" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Cruise speed:</div>
                <div className="spec__value">{spec.cruise_speed_sl_knots ? convertKnots(spec.cruise_speed_sl_knots) + " km/h" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Length:</div>
                <div className="spec__value">{spec.length_ft ? convertFts(spec.length_ft) + " m" : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Main rotor diameter:</div>
                <div className="spec__value">{spec.main_rotor_diameter_ft ? convertFts(spec.main_rotor_diameter_ft) + " m" : "N/A"}</div>
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
                <div className="spec__value">{spec.fuel_consumption_gallons_pr_hr ? spec.fuel_consumption_gallons_pr_hr : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Fuel capacity:</div>
                <div className="spec__value">{spec.fuel_capacity_gallons ? spec.fuel_capacity_gallons : "N/A"}</div>
            </div>
        </div>
    </article>
}

export default HelicoptersInfo;