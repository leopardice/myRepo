import React from "react";
import { useSelector } from "react-redux";
import LocationName from "../WeatherInfo/LocationName";
import TemperatureIndicator from "../WeatherInfo/TemperatureIndicator";
import FeelsLikeTemperature from "../WeatherInfo/FeelsLikeTemperature";
import WeatherDescription from "../WeatherInfo/WeatherDescription";
import SunriseTime from "../WeatherInfo/SunriseTime";
import SunsetTime from "../WeatherInfo/SunsetTime";
import "./DetailsModal.css";

function DetailsModal() {
  const weatherInfo = useSelector((state) => {
    const { weatherInfoReducer } = state;
    return weatherInfoReducer;
  });

  return (
    <div className="details-modal">
      <LocationName />
      <TemperatureIndicator temperature={weatherInfo.temperature} />
      <FeelsLikeTemperature feelsLike={weatherInfo.feelsLike} />
      <WeatherDescription weatherDescription={weatherInfo.weatherDescription} />
      <SunriseTime sunriseTime={weatherInfo.sunriseTime} />
      <SunsetTime sunsetTime={weatherInfo.sunsetTime} />
    </div>
  );
}

export default DetailsModal;
