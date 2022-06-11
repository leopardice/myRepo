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
            <Date date={props.date}/>
            <Time time={props.time}/>
            <TemperatureIndicator temperature={props.temperature}/>
            <WeatherDescription weatherDescription={props.weatherDescription}/>
            <FeelsLikeTemperature feelsLike={props.feelsLike}/>
            <WeatherImg/>
        </div>
    );
};

export default ForecastItem;
