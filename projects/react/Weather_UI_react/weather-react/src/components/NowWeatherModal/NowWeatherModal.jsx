import React from 'react';
import './NowWeatherModal.css'
import TemperatureIndicator from "../WeatherInfo/TemperatureNumber";
import WeatherImg from "../WeatherInfo/WeatherImg";
import LikeLocation from "../WeatherModal/LikeLocation";
import './NowWeatherModal.css'
const NowWeatherModal = (props) => {
    return (
        <div className="now-weather-modal">
            <TemperatureIndicator />
            <WeatherImg/>
            <LikeLocation locationName={props.locationName}/>
        </div>
    );
};

export default NowWeatherModal;
