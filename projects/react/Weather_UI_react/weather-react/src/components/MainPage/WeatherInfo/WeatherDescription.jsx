import React from "react";

function WeatherDescription(props) {
  const { weatherDescription } = props;
  return (
    <div>
      Weather:
      {weatherDescription}
    </div>
  );
}

export default WeatherDescription;
