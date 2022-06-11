import React from 'react';
import TemperatureNumber from "./TemperatureNumber";

const TemperatureIndicator = (props) => {
    return (
        <div className="temperature-now">
            Temperature: <TemperatureNumber/>
        </div>
    );
};

export default TemperatureIndicator;
