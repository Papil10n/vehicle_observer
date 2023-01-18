// imports
import {carsAPI} from '../api/api'

// action mode
const SET_CARS = "cars/SET_CARS";
const CHANGE_SPEC = "cars/CHANGE_SPEC";
const SET_EMPTY = "cars/SET_EMPTY";

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
        default:
            return state;
    }
}

// action creator
const setCars = (cars) => ({type: SET_CARS, cars});
const changeSpec = (specs) => ({type: CHANGE_SPEC, specs});
const setEmpty = (mode) => ({type: SET_EMPTY, mode});

// thunk creator
export const searchCars = (specs) => async (dispatch) => {
    dispatch(changeSpec(specs));

    let line = "";
    if (specs.brand.length > 1) {
        line += `make=${specs.brand}&`
    }
    if (specs.model.length > 1) {
        line += `model=${specs.model}&`
    }
    if (specs.year.length === 4) {
        line += `year=${specs.year}&`
    }
    if (specs.fuel !== "") {
        line += `fuel_type=${specs.fuel}&`
    }
    if (specs.transmission !== "") {
        line += `drive=${specs.transmission}&`
    }
    if (specs.cylinders !== "") {
        line += `cylinders=${specs.cylinders}&`
    }

    if (line !== "") {
        const data = await carsAPI.getCars(line.slice(0, line.length-1));
        if (data.length > 0) {
            dispatch(setCars(data));
        } else {
            dispatch(setEmpty(true));
        }
    }

    //ls

}

// exports
export default carsReducer;