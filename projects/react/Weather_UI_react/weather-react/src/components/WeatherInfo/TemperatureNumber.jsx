import React from 'react';

function TemperatureNumber(props) {
  const { temperature } = props;
  return (
    <span className="temperature-number">
      {temperature}
      °
    </span>
  );
}

export default TemperatureNumber;
