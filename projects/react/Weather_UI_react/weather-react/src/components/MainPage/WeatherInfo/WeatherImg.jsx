import React from 'react';

function WeatherImg(props) {
  const { iconId } = props;
  const imgSrc = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <img className="weather-img" src={imgSrc} alt="weather-description" />
  );
}

export default WeatherImg;
