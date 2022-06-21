import { ADD_FAVORITE_LOCATION, REMOVE_FAVORITE_LOCATION } from './types';
import { getDataFromLocalStorage } from '../js/helpers';

const ADDED_LOCATIONS_KEY = 'addedLocations';

const initialState = new Set(getDataFromLocalStorage(ADDED_LOCATIONS_KEY));

export const favoriteLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_LOCATION:
      return new Set([...state, action.locationName]);
    case REMOVE_FAVORITE_LOCATION:
      return new Set([...state].filter((item) => item !== action.locationName));
    default:
      return state;
  }
};
