// imports

// action mode

// initial state
let initialState = {
    cars: [],
}

// reducer
let carsReducer = (state = initialState, action) => {
    switch (action.mode) {
        case "":
            break;
        default:
            return state;
    }
}

// action creator

// thunk creator

// exports
export default carsReducer;