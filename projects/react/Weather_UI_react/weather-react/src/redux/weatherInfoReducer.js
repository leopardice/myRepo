import { UPDATE_WEATHER_INFO } from './types';

const initialState = {};

export const weatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WEATHER_INFO:
      return action.weatherInfo;
    default:
      return state;
  }
};
