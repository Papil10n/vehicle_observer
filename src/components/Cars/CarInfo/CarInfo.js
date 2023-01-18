import "./carInfo.scss";

const CarInfo = ({spec}) => {


    return <article className="car-article">
            <div className="car__title">
                <div className="car__image"></div>
                <div className="car__name">Toyota Rav4</div>
            </div>
            <div className="car__specs">
                <div className="main__spec">
                    <div className="spec">
                        <span className="spec__name">Class:</span>
                        <span className="spec__value">{spec.class}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Displacement:</span>
                        <span className="spec__value">{spec.displacement}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Transmission:</span>
                        <span className="spec__value">{spec.drive}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Year:</span>
                        <span className="spec__value">{spec.year}</span>
                    </div>
                </div>
                <div className="fuel__spec">
                    <div className="spec">
                        <span className="spec__name">Fuel:</span>
                        <span className="spec__value">{spec.fuel_type}</span>
                    </div>
                    <div className="spec">
                        <span className="spec__name">Fuel consumption:</span>
                    </div>
                    <div className="spec spec-abs">
                        <span className="spec__name">City:</span>
                        <span className="spec__value">{spec.city_mpg}</span>
                    </div>
                    <div className="spec spec-abs">
                        <span className="spec__name">Combination:</span>
                        <span className="spec__value">{spec.combination_mpg}</span>
                    </div>
                    <div className="spec spec-abs">
                        <span className="spec__name">Highway:</span>
                        <span className="spec__value">{spec.highway_mpg}</span>
                    </div>
                </div>
            </div>
    </article>
}

export default CarInfo;