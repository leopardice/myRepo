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
            iconId={item.iconId}
        />
    })

    return (
        <div className='forecast-modal'>
            <LocationName locationName={props.locationName} />
            {forecastItems}
        </div>
    );
};

export default ForecastModal;
