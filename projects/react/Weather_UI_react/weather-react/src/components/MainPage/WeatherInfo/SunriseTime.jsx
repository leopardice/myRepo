import React from 'react';

function SunriseTime(props) {
  const { sunriseTime } = props;
  return (
    <div className="sunrise-time">
      Sunrise:
      {' '}
      {sunriseTime}
    </div>
  );
}

export default SunriseTime;
