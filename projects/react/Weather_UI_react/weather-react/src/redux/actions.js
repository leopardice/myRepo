import {
  ADD_FAVORITE_LOCATION,
  REMOVE_FAVORITE_LOCATION,
  UPDATE_FORECAST_INFO,
  UPDATE_LOCATION_NAME,
  UPDATE_WEATHER_INFO,
} from './types';

export function updateLocationName(locationName) {
  return {
    type: UPDATE_LOCATION_NAME,
    locationName,
  };
}

export function updateWeatherInfo(weatherInfo) {
  return {
    type: UPDATE_WEATHER_INFO,
    weatherInfo,
  };
}

export function updateForecastInfo(forecastInfo) {
  return {
    type: UPDATE_FORECAST_INFO,
    forecastInfo,
  };
}

export function addFavoriteLocation(locationName) {
  return {
    type: ADD_FAVORITE_LOCATION,
    locationName,
  };
}

export function removeFavoriteLocation(locationName) {
  return {
    type: REMOVE_FAVORITE_LOCATION,
    locationName,
  };
}
