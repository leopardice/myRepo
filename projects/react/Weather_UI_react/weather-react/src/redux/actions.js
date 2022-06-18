import {UPDATE_FORECAST_INFO, UPDATE_WEATHER_INFO} from "./types";

export function updateWeatherInfo (weatherInfo) {
    return {
        type: UPDATE_WEATHER_INFO,
        weatherInfo
    }
}

export function updateForecastInfo (forecastInfo) {
    return {
        type: UPDATE_FORECAST_INFO,
        forecastInfo
    }
}
