// imports
import createReqLine from "../utils/createReqLine";
import {API} from "../api/api";

// action mode
const SET_HELICOPTERS = "helicopter/SET_HELICOPTERS";
const SET_EMPTY = "helicopter/SET_EMPTY";
const SET_IS_FETCHING = "helicopter/SET_IS_FETCHING";
const SET_SPECS = "helicopter/SET_SPECS";
const SET_PORTION_HELICOPTERS = "helicopter/SET_PORTION_HELICOPTERS";
const SET_TOTAL_HELICOPTERS_COUNT = "helicopter/SET_TOTAL_HELICOPTERS_COUNT";
const SET_CURRENT_PAGE = "helicopter/SET_CURRENT_PAGE";


// initial state
let initialState = {
    helicopters: [
        {
            brand:'lolo',
            nebrend: 'nelolo',
        }
    ],
    portionCopters: [],
    specs: {},
    isFetching: false,
    isEmpty: false,
    totalCoptersCount: 0,
    pageSize: 6,
    currentPage: 1,
}

// reducer
let helicopterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HELICOPTERS:
            return {...state, helicopters: action.helicopters}
        case SET_EMPTY:
            return {...state, isEmpty: action.mode}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.mode}
        case SET_SPECS:
            return {...state, specs: action.specs}
        case SET_PORTION_HELICOPTERS:
            return {...state, portionCopters: action.helicopters}
        case SET_TOTAL_HELICOPTERS_COUNT:
            return {...state, totalCoptersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        default:
            return state;
    }
}

// action creator
const setHelicopters = (helicopters) => ({type: SET_HELICOPTERS, helicopters});
const setEmpty = (mode) => ({type: SET_EMPTY, mode});
const setIsFetching = (mode) => ({type: SET_IS_FETCHING, mode});
const setSpecs = (specs) => ({type: SET_SPECS, specs});
const setPortionCopters = (helicopters) => ({type: SET_PORTION_HELICOPTERS, helicopters});
const setTotalHelicoptersCount = (count) => ({type: SET_TOTAL_HELICOPTERS_COUNT, count});
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});


// thunk creator
export const searchHelicopters = (specs) => async (dispatch) => {
    dispatch(setHelicopters([]));
    dispatch(setPortionCopters([]));
    dispatch(setEmpty(false));
    dispatch(setIsFetching(true));
    dispatch(setSpecs(specs));

    const reqLine = createReqLine.helicopter(specs);
    if (reqLine) {
        const data = await API.getHelicopters(reqLine);
        if (data.length > 0) {
            dispatch(setHelicopters(data));
            dispatch(setPortionCopters(data.slice(0, initialState.pageSize)));
            dispatch(setTotalHelicoptersCount(data.length));
            dispatch(setIsFetching(false));
        } else {
            dispatch(setEmpty(true));
        }
    } else {
        dispatch(setEmpty(true));
    }
}

export const toggleHelicopterPortion = (page, pageSize, motos) => (dispatch) => {
    dispatch(setCurrentPage(page));

    const start = page === 1 ? 0 : (page - 1) * (pageSize);
    const end = page === 1 ? 6 : page * pageSize;

    dispatch(setPortionCopters(motos.slice(start, end)));
}


// exports
export default helicopterReducer;