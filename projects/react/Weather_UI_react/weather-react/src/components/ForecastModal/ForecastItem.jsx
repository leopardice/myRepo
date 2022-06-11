import React from 'react';
import './ForecastItem.css'
import Date from "../WeatherInfo/Date";
import Time from "../WeatherInfo/Time";
import TemperatureIndicator from "../WeatherInfo/TemperatureIndicator";
import WeatherDescription from "../WeatherInfo/WeatherDescription";
import FeelsLikeTemperature from "../WeatherInfo/FeelsLikeTemperature";
import WeatherImg from "../WeatherInfo/WeatherImg";

const ForecastItem = (props) => {
    return (
        <div className='forecast-item'>
            <Date/>
            <Time/>
            <TemperatureIndicator/>
            <WeatherDescription/>
            <FeelsLikeTemperature/>
            <WeatherImg/>
        </div>
    );
};

export default ForecastItem;
