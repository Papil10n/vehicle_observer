import "./MotoInfo.scss";

const MotoInfo = ({spec}) => {

    return <article className="moto-article">
        <div className="moto__class">
            <div className="spec__name">Type:</div>
            <div className="spec__value">{spec.type}</div>
        </div>
        <div className="moto__specs">
            <div className="spec">
                <div className="spec__name">Brand:</div>
                <div className="spec__value">{spec.make}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Model:</div>
                <div className="spec__value">{spec.model}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Year:</div>
                <div className="spec__value">{spec.year}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Engine:</div>
                <div className="spec__value">{spec.engine}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Power:</div>
                <div className="spec__value">{spec.power ? spec.power : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Torque:</div>
                <div className="spec__value">{spec.torque ? spec.torque : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Fuel system:</div>
                <div className="spec__value">{spec.fuel_system}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Gearbox:</div>
                <div className="spec__value">{spec.gearbox}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Front suspension:</div>
                <div className="spec__value">{spec.front_suspension}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Rear suspension:</div>
                <div className="spec__value">{spec.rear_suspension}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Total weight:</div>
                <div className="spec__value">{spec.total_weight ? spec.total_weight : "N/A"}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Fuel capacity:</div>
                <div className="spec__value">{spec.fuel_capacity}</div>
            </div>
            <div className="spec">
                <div className="spec__name">Wheelbase:</div>
                <div className="spec__value">{spec.wheelbase}</div>
            </div>
        </div>
    </article>
}

export default MotoInfo;