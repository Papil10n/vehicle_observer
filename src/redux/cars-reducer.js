// imports
import {carsAPI} from '../api/api'

// action mode
const SET_CARS = "cars/SET_CARS";
const CHANGE_SPEC = "cars/CHANGE_SPEC";
const SET_EMPTY = "cars/SET_EMPTY";
const SET_IMAGE= "cars/SET_IMAGE";

// initial state
let initialState = {
    cars: [],
    specs:{},
    isEmpty: false,
}

// reducer
let carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {...state, cars: action.cars}
        case CHANGE_SPEC:
            return {...state, specs: action.specs}
        case SET_EMPTY:
            return {...state, isEmpty: action.mode}
        case SET_IMAGE:
            return {...state, specs: {...state.specs, photo: action.imgData}}
        default:
            return state;
    }
}

// action creator
const setCars = (cars) => ({type: SET_CARS, cars});
const changeSpec = (specs) => ({type: CHANGE_SPEC, specs});
const setEmpty = (mode) => ({type: SET_EMPTY, mode});
const setImage = (imgData) => ({type: SET_IMAGE, imgData});

// thunk creator
export const searchCars = (specs) => async (dispatch) => {
    dispatch(setEmpty(false));
    dispatch(changeSpec(specs));

    let dataLine = "";
    let imageData = "";
    if (specs.brand.length > 1 && specs.model.length > 1) {
        dataLine += `make=${specs.brand}&model=${specs.model}&`;
        imageData += `make=${specs.brand}&modelFamily=${specs.model}`;
    } else {
        dispatch(setEmpty(true));
    }

    if (specs.year.length === 4) {
        dataLine += `year=${specs.year}&`
    }
    if (specs.fuel !== "") {
        dataLine += `fuel_type=${specs.fuel}&`
    }
    if (specs.transmission !== "") {
        dataLine += `drive=${specs.transmission}&`
    }
    if (specs.cylinders !== "") {
        dataLine += `cylinders=${specs.cylinders}&`
    }

    if (dataLine !== "" && imageData !== "") {
        const data = await carsAPI.getCars(dataLine.slice(0, dataLine.length-1));

        if (data.length > 0) {
            dispatch(setCars(data));
            dispatch(setImage(`https://cdn.imagin.studio/getImage?customer=uapapillon1&${imageData}`));
        } else {
            dispatch(setEmpty(true));
        }
    }

    //ls

}

// exports
export default carsReducer;