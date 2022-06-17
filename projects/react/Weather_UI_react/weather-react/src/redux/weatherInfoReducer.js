import {convertTemperature, convertTime} from "../js/helpers";
import {UPDATE_WEATHER_INFO} from "./types";

const initialState = {
    name: '',
    temperature: 0,
    feelsLike: 0,
    weatherDescription: '',
    sunriseTime: '',
    sunsetTime: '',
    icon: ''
}

export const weatherInfoReducer = (state = initialState, action) => {
    console.log('weatherInfo Reducer > ', action)

    switch (action.type) {
        case UPDATE_WEATHER_INFO:
            return action.weatherInfo
        default:
            return state;
    }
}
