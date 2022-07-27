import React from "react";
import "./ForecastItem.css";
import Date from "../WeatherInfo/Date";
import Time from "../WeatherInfo/Time";
import TemperatureIndicator from "../WeatherInfo/TemperatureIndicator";
import WeatherDescription from "../WeatherInfo/WeatherDescription";
import FeelsLikeTemperature from "../WeatherInfo/FeelsLikeTemperature";
import WeatherImg from "../WeatherInfo/WeatherImg";

function ForecastItem(props) {
  const { feelsLike, iconId, weatherDescription, temperature, time, date } =
    props;
  return (
    <div className="forecast-item">
      <Date date={date} />
      <Time time={time} />
      <TemperatureIndicator temperature={temperature} />
      <WeatherDescription weatherDescription={weatherDescription} />
      <FeelsLikeTemperature feelsLike={feelsLike} />
      <WeatherImg iconId={iconId} />
    </div>
  );
}

export default ForecastItem;
