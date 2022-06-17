import {INCREMENT, UPDATE_WEATHER_INFO} from "./types";

export function incrementCounter() {
    return {
        type: INCREMENT
    }
}

export function updateWeatherInfo (weatherInfo) {
    return {
        type: UPDATE_WEATHER_INFO,
        weatherInfo
    }
}
