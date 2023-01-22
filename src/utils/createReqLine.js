const createReqLine = (specs) => {
    let line = "";

    if (specs.brand.length > 1 && specs.model.length > 1) {
        line += `make=${specs.brand}&model=${specs.model}&`;
    } else {
        return false;
    }

    line += specs.year.length === 4 ? `year=${specs.year}&` : "";
    line += specs.fuel !== "" ? `fuel_type=${specs.fuel}&` : "";
    line += specs.transmission !== "" ? `drive=${specs.transmission}&` : "";
    line += specs.cylinders !== "" ? `cylinders=${specs.cylinders}&` : "";

    return line.slice(0, line.length-1);
}

export default createReqLine;