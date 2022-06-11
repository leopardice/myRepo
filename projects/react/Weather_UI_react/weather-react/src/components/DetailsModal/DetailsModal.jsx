import React from 'react';
import LocationName from "../WeatherInfo/LocationName";
import TemperatureNow from "../WeatherInfo/TemperatureIndicator";
import FeelsLikeTemperature from "../WeatherInfo/FeelsLikeTemperature";
import WeatherDescription from "../WeatherInfo/WeatherDescription";
import SunriseTime from "../WeatherInfo/SunriseTime";
import SunsetTime from "../WeatherInfo/SunsetTime";
import "./DetailsModal.css"

const DetailsModal = (props) => {
    return (
        <div className="details-modal">
            <LocationName/>
            <TemperatureNow/>
            <FeelsLikeTemperature/>
            <WeatherDescription/>
            <SunriseTime/>
            <SunsetTime/>
        </div>
    );
};

export default DetailsModal;
