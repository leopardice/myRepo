import React from 'react';

const WeatherDescription = (props) => {
    return (
        <div>
           Weather: {props.weatherDescription}
        </div>
    );
};

export default WeatherDescription;
