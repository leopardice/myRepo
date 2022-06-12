import React from 'react';

const WeatherImg = (props) => {

    const imgSrc = `http://openweathermap.org/img/wn/${props.iconId}@2x.png`;

    return (
            <img className="weather-img" src={imgSrc}/>
    );
};

export default WeatherImg;
