import React from 'react';
import './NowWeatherModal.css'
import TemperatureIndicator from "../WeatherInfo/TemperatureNumber";
import WeatherImg from "../WeatherInfo/WeatherImg";
import LikeLocation from "../WeatherModal/LikeLocation";
import './NowWeatherModal.css'
import TemperatureNumber from "../WeatherInfo/TemperatureNumber";
const NowWeatherModal = (props) => {

    return (
        <div className="now-weather-modal">
            <TemperatureNumber temperature={props.temperature}/>
            <WeatherImg/>
            <LikeLocation
                locationName={props.locationName}
                onRemoveLocation={props.onRemoveLocation}
                onAddLocation={props.onAddLocation}
                isCityInlist={props.isCityInlist}
            />
        </div>
    );
};

export default NowWeatherModal;
