const createReqLine = {
    car: (specs) => {
        let line = "";
        if (specs.brand.length > 1 && specs.model.length > 1) {
            line += `make=${specs.brand}&model=${specs.model}&`;
        } else {
            return false;
        }
        line += specs.year.length  === 4 ? `year=${specs.year}&` : "";
        line += specs.fuel !== "" ? `fuel_type=${specs.fuel}&` : "";
        line += specs.transmission !== "" ? `drive=${specs.transmission}&` : "";
        line += specs.cylinders !== "" ? `cylinders=${specs.cylinders}&` : "";

        return line.slice(0, line.length-1);
    },
    moto: (specs) => {
        let line = "";
        line += specs.brand.length > 1 ? `make=${specs.brand}&` : "";
        line += specs.model.length > 1 ? `model=${specs.model}&` : "";

        return line ? line.slice(0, line.length-1) : false;
    },
    helicopter: (specs) => {
        let line = "";
        line += specs.brand.length > 1 ? `manufacturer=${specs.brand}&` : "";
        line += specs.model.length > 1 ? `model=${specs.model}&` : "";
        line += `limit=10&`
        return line ? line.slice(0, line.length-1) : false;
    }
}

export default createReqLine;