import React from 'react';
import ForecastItem from "./ForecastItem";
import './ForecastModal.css'
import LocationName from "../WeatherInfo/LocationName";

const ForecastModal = (props) => {
    const forecastItems = props.forecastInfo.map(item => {
        return <ForecastItem
            key={item.id}
            date={item.date}
            time={item.time}
            temperature={item.temperature}
            weatherDescription={item.weatherDescription}
            feelsLike={item.feelsLike}
        />
    })

    return (
        <div className='forecast-modal'>
            <LocationName />
            {forecastItems}
        </div>
    );
};

export default ForecastModal;
