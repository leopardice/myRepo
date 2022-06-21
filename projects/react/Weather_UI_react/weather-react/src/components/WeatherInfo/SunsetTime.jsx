import React from 'react';

function SunsetTime(props) {
  const { sunsetTime } = props;
  return (
    <div>
      Sunset:
      {' '}
      {sunsetTime}
    </div>
  );
}

export default SunsetTime;
