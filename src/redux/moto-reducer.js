// imports
import createReqLine from "../utils/createReqLine";
import {API} from "../api/api";

// action mode
const SET_MOTOS = "moto/SET_MOTOS";
const SET_EMPTY = "moto/SET_EMPTY";
const SET_IS_FETCHING = "moto/SET_IS_FETCHING";
const SET_SPECS = "moto/SET_SPECS";
const SET_PORTION_MOTOS = "moto/SET_PORTION_MOTOS";
const SET_TOTAL_MOTOS_COUNT = "moto/SET_TOTAL_MOTOS_COUNT";
const SET_CURRENT_PAGE = "moto/SET_CURRENT_PAGE";


// initial state
let initialState = {
    motos: [],
    portionMotos: [],
    specs: {},
    isFetching: false,
    isEmpty: false,
    totalMotosCount: 0,
    pageSize: 6,
    currentPage: 1,

}

// reducer
let motoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOTOS:
            return {...state, motos: action.motos}
        case SET_EMPTY:
            return {...state, isEmpty: action.mode}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.mode}
        case SET_SPECS:
            return {...state, specs: action.specs}
        case SET_PORTION_MOTOS:
            return {...state, portionMotos: action.motos}
        case SET_TOTAL_MOTOS_COUNT:
            return {...state, totalMotosCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        default:
            return state;
    }
}

// action creator
const setMotos = (motos) => ({type: SET_MOTOS, motos});
const setEmpty = (mode) => ({type: SET_EMPTY, mode});
const setIsFetching = (mode) => ({type: SET_IS_FETCHING, mode});
const setSpecs = (specs) => ({type: SET_SPECS, specs});
const setPortionMotos = (motos) => ({type: SET_PORTION_MOTOS, motos});
const setTotalMotosCount = (count) => ({type: SET_TOTAL_MOTOS_COUNT, count});
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});


// thunk creator
export const searchMotos = (specs) => async (dispatch) => {
    dispatch(setMotos([]));
    dispatch(setPortionMotos([]));
    dispatch(setEmpty(false));
    dispatch(setIsFetching(true));
    dispatch(setSpecs(specs));

    const reqLine = createReqLine.moto(specs);
    if (reqLine) {
        const data = await API.getMotos(reqLine);
        if (data.length > 0) {
            dispatch(setMotos(data));
            dispatch(setPortionMotos(data.slice(0, initialState.pageSize)));
            dispatch(setTotalMotosCount(data.length));
            dispatch(setIsFetching(false));
        } else {
            dispatch(setEmpty(true));
        }
    } else {
        dispatch(setEmpty(true));
    }
}

export const toggleMotoPortion = (page, pageSize, motos) => (dispatch) => {
    dispatch(setCurrentPage(page));

    const start = page === 1 ? 0 : (page - 1) * (pageSize);
    const end = page === 1 ? 6 : page * pageSize;

    dispatch(setPortionMotos(motos.slice(start, end)));
}


// exports
export default motoReducer;