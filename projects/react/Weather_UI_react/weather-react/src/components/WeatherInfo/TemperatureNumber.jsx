import React from 'react';

const TemperatureNumber = (props) => {
    return (
        <span className="temperature-number">
            {props.temperature}°
        </span>
    );
};

export default TemperatureNumber;
