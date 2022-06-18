import React from 'react';
import LocationName from "../WeatherInfo/LocationName";
import TemperatureNow from "../WeatherInfo/TemperatureIndicator";
import FeelsLikeTemperature from "../WeatherInfo/FeelsLikeTemperature";
import WeatherDescription from "../WeatherInfo/WeatherDescription";
import SunriseTime from "../WeatherInfo/SunriseTime";
import SunsetTime from "../WeatherInfo/SunsetTime";
import "./DetailsModal.css"
import {useSelector} from "react-redux";
import TemperatureIndicator from "../WeatherInfo/TemperatureIndicator";

const DetailsModal = () => {

    const weatherInfo = useSelector( state => {
            const {weatherInfoReducer} = state;
            return weatherInfoReducer;
        }
    )

    return (
        <div className="details-modal">
            <LocationName />
            <TemperatureIndicator temperature={weatherInfo.temperature}/>
            <FeelsLikeTemperature feelsLike={weatherInfo.feelsLike}/>
            <WeatherDescription weatherDescription={weatherInfo.weatherDescription}/>
            <SunriseTime sunriseTime={weatherInfo.sunriseTime}/>
            <SunsetTime sunsetTime={weatherInfo.sunsetTime}/>
        </div>
    );
};

export default DetailsModal;
