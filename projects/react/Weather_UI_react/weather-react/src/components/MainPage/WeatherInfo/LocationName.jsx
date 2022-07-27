import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CURRENT_LOCATION_KEY } from "../../../redux/locationNameReducer";
import { getForecast, getWeather } from "../../../js/fetchRequests";
import { updateForecastInfo, updateWeatherInfo } from "../../../redux/actions";

function LocationName() {
  const dispatch = useDispatch();

  const locationName = useSelector((state) => {
    const { locationNameReducer } = state;
    return locationNameReducer;
  });

  useEffect(() => {
    getWeather(locationName)
      .then((weatherInfo) => {
        dispatch(updateWeatherInfo(weatherInfo));
      })
      .catch(() => {
        alert("There is no such city. Try typing the name again");
      });

    getForecast(locationName)
      .then((forecastInfo) => {
        dispatch(updateForecastInfo(forecastInfo));
      })
      .catch((e) => {
        console.log(e);
      });

    localStorage.setItem(CURRENT_LOCATION_KEY, locationName);
  }, [locationName]);

  return <div className="location-name">{locationName}</div>;
}

export default LocationName;
