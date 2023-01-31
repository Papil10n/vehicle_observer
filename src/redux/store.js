import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import carsReducer from "./cars-reducer";
import motoReducer from "./moto-reducer";
import helicopterReducer from "./helicopter-reducer";
import ParamsReducer from "./params-reducer";

let reducers = combineReducers({
    cars: carsReducer,
    moto: motoReducer,
    helicopters: helicopterReducer,
    params: ParamsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;