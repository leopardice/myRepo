import { UPDATE_LOCATION_NAME } from "./types";

export const CURRENT_LOCATION_KEY = "currentLocation";
const initialState = localStorage.getItem(CURRENT_LOCATION_KEY) ?? "Rio";

export const locationNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION_NAME:
      return action.locationName;
    default:
      return state;
  }
};
