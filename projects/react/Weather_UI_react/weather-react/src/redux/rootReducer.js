import { combineReducers } from 'redux';
import { weatherInfoReducer } from './weatherInfoReducer';
import { forecastInfoReducer } from './forecastInfoReducer';
import { locationNameReducer } from './locationNameReducer';
import { favoriteLocationsReducer } from './favoriteLocationsReducer';

export const rootReducer = combineReducers({
  weatherInfoReducer,
  forecastInfoReducer,
  locationNameReducer,
  favoriteLocationsReducer,
});
