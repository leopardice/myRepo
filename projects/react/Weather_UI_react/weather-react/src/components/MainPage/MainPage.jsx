import React from "react";
import LocationInput from "./LocationInput/LocationInput";
import WeatherModal from "./WeatherModal/WeatherModal";
import AddedLocationsModal from "./AddedLocations/AddedLocationsModal";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <LocationInput />
      <WeatherModal />
      <AddedLocationsModal />
    </div>
  );
}

export default MainPage;
