import React from 'react';
import TemperatureNumber from './TemperatureNumber';

function TemperatureIndicator(props) {
  const { temperature } = props;
  return (
    <div className="temperature-now">
      Temperature:
      {' '}
      <TemperatureNumber temperature={temperature} />
    </div>
  );
}

export default TemperatureIndicator;
