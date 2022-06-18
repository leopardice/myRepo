import React from 'react';
import './NowWeatherModal.css'
import WeatherImg from "../WeatherInfo/WeatherImg";
import LikeLocation from "../WeatherModal/LikeLocation";
import './NowWeatherModal.css'
import TemperatureNumber from "../WeatherInfo/TemperatureNumber";
import {useSelector} from "react-redux";
const NowWeatherModal = (props) => {

    const weatherInfo = useSelector( state => {
            const {weatherInfoReducer} = state;
            return weatherInfoReducer;
        }
    )

    return (
        <div className="now-weather-modal">
            <TemperatureNumber temperature={weatherInfo.temperature}/>
            <WeatherImg iconId={weatherInfo.icon}/>
            <LikeLocation
                onRemoveLocation={props.onRemoveLocation}
                onAddLocation={props.onAddLocation}
                isCityInlist={props.isCityInlist}
            />
        </div>
    );
};

export default NowWeatherModal;
