import React from 'react';
import ForecastItem from "./ForecastItem";
import './ForecastModal.css'
import LocationName from "../WeatherInfo/LocationName";

const ForecastModal = () => {
    return (
        <div className='forecast-modal'>
            <LocationName/>
            <ForecastItem/>
            <ForecastItem/>
            <ForecastItem/>
        </div>
    );
};

export default ForecastModal;
