import React from 'react';

function FeelsLikeTemperature(props) {
  const { feelsLike } = props;
  return (
    <div>
      Feels like:
      {' '}
      {feelsLike}
      °
    </div>
  );
}

export default FeelsLikeTemperature;
