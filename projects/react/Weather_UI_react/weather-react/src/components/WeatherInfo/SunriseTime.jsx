import React from 'react';

const SunriseTime = (props) => {
    return (
        <div className="sunrise-time">
          Sunrise: {props.sunriseTime}
        </div>
    );
};

export default SunriseTime;
