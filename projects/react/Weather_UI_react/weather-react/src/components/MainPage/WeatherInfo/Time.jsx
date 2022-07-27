import React from 'react';

function Time(props) {
  const { time } = props;
  return (
    <div className="time">
      {time}
    </div>
  );
}

export default Time;
