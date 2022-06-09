import React from 'react';
import './NowWeatherModal.css'
import TemperatureIndicator from "../TemperatureIndicator";
import WeatherImg from "../WeatherImg";
import LikeLocation from "../WeatherModal/LikeLocation";
import './NowWeatherModal.css'
const NowWeatherModal = () => {
    return (
        <div className="now-weather-modal">
            <TemperatureIndicator />
            <WeatherImg/>
            <LikeLocation/>
        </div>
    );
};

export default NowWeatherModal;
