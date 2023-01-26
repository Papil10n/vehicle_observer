const MotoItem = ({spec}) => {

    return <article>
        <div>{spec.type}</div>
        <div>{spec.make}</div>
        <div>{spec.model}</div>
        <div>{spec.year}</div>
        <div>{spec.engine}</div>
        <div>{spec.power}</div>
        <div>{spec.torque}</div>
        <div>{spec.fuel_system}</div>
        <div>{spec.gearbox}</div>
        <div>{spec.front_suspension}</div>
        <div>{spec.rear_suspension}</div>
        <div>{spec.total_weight}</div>
        <div>{spec.fuel_capacity}</div>
        <div>{spec.wheelbase}</div>
    </article>
}

export default MotoItem;