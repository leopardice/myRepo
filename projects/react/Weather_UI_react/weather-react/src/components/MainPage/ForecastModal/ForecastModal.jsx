import React from "react";
import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";
import "./ForecastModal.css";
import LocationName from "../WeatherInfo/LocationName";

function ForecastModal() {
  const forecastInfo = useSelector((state) => {
    const { forecastInfoReducer } = state;
    return forecastInfoReducer;
  });

  const forecastItems = forecastInfo.map((item) => (
    <ForecastItem
      key={item.id}
      date={item.date}
      time={item.time}
      temperature={item.temperature}
      weatherDescription={item.weatherDescription}
      feelsLike={item.feelsLike}
      iconId={item.iconId}
    />
  ));

  return (
    <div className="forecast-modal">
      <LocationName />
      {forecastItems}
    </div>
  );
}

export default ForecastModal;
