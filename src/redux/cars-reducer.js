// imports
import {carsAPI} from '../api/api'
import createReqLine from "../utils/createReqLine";

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

    dispatch(setCars([]))
    dispatch(setEmpty(false));
    dispatch(changeSpec(specs));

    const reqLine = createReqLine(specs);
    if (reqLine) {
        const data = await carsAPI.getCars(reqLine);
        if (data.length > 0) {
            dispatch(setCars(data));
        } else {
            dispatch(setEmpty(true));
        }
    } else {
        dispatch(setEmpty(true));
    }
}

// exports
export default carsReducer;