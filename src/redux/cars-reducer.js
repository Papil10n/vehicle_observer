// imports
import {API} from '../api/api'
import createReqLine from "../utils/createReqLine";

// action mode
const SET_CARS = "cars/SET_CARS";
const CHANGE_SPEC = "cars/CHANGE_SPEC";
const SET_EMPTY = "cars/SET_EMPTY";
const SET_TOTAL_CARS_COUNT = "cars/SET_TOTAL_CARS_COUNT";
const SET_CURRENT_PAGE = "cars/SET_CURRENT_PAGE";
const SET_PORTION_CARS = "cars/SET_PORTION_CARS";
const CHANGE_POP_UP_MODE = "cars/CHANGE_POP_UP_MODE";
const IS_CARS = "cars/IS_CARS";
const SET_IS_CARS_FETCHING = 'cars/SET_IS_CARS_FETCHING';

// initial state
let initialState = {
    cars: [],
    portionCars: [],
    specs: {},
    isEmpty: false,
    pageSize: 6,
    totalCarsCount: 0,
    currentPage: 1,
    isCars: false,
    isPopUpShowing: false,
    isFetching: false,
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
        case SET_TOTAL_CARS_COUNT:
            return {...state, totalCarsCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_PORTION_CARS:
            return {...state, portionCars: action.cars}
        case CHANGE_POP_UP_MODE:
            return {...state, isPopUpShowing: action.mode}
        case IS_CARS:
            return {...state, isCars: action.mode}
        case SET_IS_CARS_FETCHING:
            return  {...state, isFetching: action.mode}
        default:
            return state;
    }
}

// action creator
const setCars = (cars) => ({type: SET_CARS, cars});
const changeSpec = (specs) => ({type: CHANGE_SPEC, specs});
const setEmpty = (mode) => ({type: SET_EMPTY, mode});
const setTotalCarsCount = (count) => ({type: SET_TOTAL_CARS_COUNT, count});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setPortionCars = (cars) => ({type: SET_PORTION_CARS, cars});
export const changePopUpMode = (mode) => ({type: CHANGE_POP_UP_MODE, mode});
const setIsCars = (mode) => ({type: IS_CARS, mode});
const setIsFetching = (mode) => ({type: SET_IS_CARS_FETCHING, mode});

// thunk creator
export const searchCars = (specs) => async (dispatch) => {
    dispatch(setCars([]));
    dispatch(setPortionCars([]));
    dispatch(setEmpty(false));
    dispatch(setIsCars(false));
    dispatch(setIsFetching(true));
    dispatch(changeSpec(specs));

    const reqLine = createReqLine.car(specs);
    if (reqLine) {
        const data = await API.getCars(reqLine);
        if (data.length > 0) {
            dispatch(setCars(data.reverse()));
            dispatch(setPortionCars(data.slice(0, initialState.pageSize)))
            dispatch(setTotalCarsCount(data.length));
            dispatch(setIsCars(true));
            dispatch(setIsFetching(false));
        } else {
            dispatch(setEmpty(true));
        }
    } else {
        dispatch(setEmpty(true));
    }
}

export const toggleCarPortion = (page, pageSize, cars) => (dispatch) => {
    dispatch(setCurrentPage(page));

    const start = page === 1 ? 0 : (page - 1) * (pageSize);
    const end = page === 1 ? 6 : page * pageSize;

    dispatch(setPortionCars(cars.slice(start, end)));
}

// exports
export default carsReducer;