import React from "react";
import LocationName from "../WeatherInfo/LocationName";
import LikeButton from "./LikeButton";
import "./LikeLocation.css";

function LikeLocation() {
  return (
    <div className="like-location">
      <LocationName />
      <LikeButton />
    </div>
  );
}

export default LikeLocation;
