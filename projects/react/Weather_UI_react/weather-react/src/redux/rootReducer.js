import {combineReducers} from "redux";
import {weatherInfoReducer} from "./weatherInfoReducer";
import {forecastInfoReducer} from "./forecastInfoReducer";

export const rootReducer = combineReducers({
    weatherInfoReducer,
    forecastInfoReducer
})
