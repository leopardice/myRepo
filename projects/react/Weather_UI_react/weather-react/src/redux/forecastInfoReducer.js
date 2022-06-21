import { UPDATE_FORECAST_INFO } from './types';

const initialState = [];

export const forecastInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORECAST_INFO:
      return action.forecastInfo;
    default:
      return state;
  }
};
