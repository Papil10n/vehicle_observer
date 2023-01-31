// imports


// action mode
const SET_PREVIOUS_MOTO_DATA = "params/SET_PREVIOUS_MOTO_DATA";
const SET_PREVIOUS_HELICOPTER_DATA = "params/SET_PREVIOUS_HELICOPTER_DATA";

// initial state
let initialState = {
    prevMotoBrand: "",
    prevMotoModel: "",
    prevHelicopterBrand: "",
    prevHelicopterModel: "",
}

// reducer
let ParamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PREVIOUS_MOTO_DATA:
            return {...state, prevMotoBrand: action.brand, prevMotoModel: action.model}
        case SET_PREVIOUS_HELICOPTER_DATA:
            return {...state, prevHelicopterBrand: action.brand, prevHelicopterModel: action.model}
        default:
            return state;
    }
}

// action creator
const setPrevMotoData = (brand, model) => ({type: SET_PREVIOUS_MOTO_DATA, brand, model});
const setPrevHelicopterData = (brand, model) => ({type: SET_PREVIOUS_HELICOPTER_DATA, brand, model});


// thunk creator
export const setData = (brand, model, category) => (dispatch) => {
    if (category === "moto") {
        dispatch(setPrevMotoData(brand, model));
    } else if (category === "helicopters") {
        dispatch(setPrevHelicopterData(brand, model));
    }
}

// exports
export default ParamsReducer;