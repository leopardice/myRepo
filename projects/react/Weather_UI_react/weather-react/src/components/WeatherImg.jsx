import React from 'react';
import cloud from '../img/cloud.svg'

const WeatherImg = () => {
    return (
        <div className="weather-img">
            <img src={cloud}/>
        </div>
    );
};

export default WeatherImg;
