import React from 'react';
import './NowWeatherModal.css';
import { useSelector } from 'react-redux';
import WeatherImg from '../WeatherInfo/WeatherImg';
import LikeLocation from '../WeatherModal/LikeLocation';
import TemperatureNumber from '../WeatherInfo/TemperatureNumber';

function NowWeatherModal() {
  const weatherInfo = useSelector((state) => {
    const { weatherInfoReducer } = state;
    return weatherInfoReducer;
  });

  return (
    <div className="now-weather-modal">
      <TemperatureNumber temperature={weatherInfo.temperature} />
      <WeatherImg iconId={weatherInfo.icon} />
      <LikeLocation />
    </div>
  );
}

export default NowWeatherModal;
