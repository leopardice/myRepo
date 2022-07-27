import React, { useState } from "react";
import { useDispatch } from "react-redux";

import search from "../../../img/search.svg";
import "./LocationInput.css";
import { updateLocationName } from "../../../redux/actions";

const CURRENT_LOCATION_KEY = "currentLocation";

function LocationInput() {
  const [locationName, setLocationName] = useState("");

  const dispatch = useDispatch();

  const changeLocationName = (event) => {
    setLocationName(event.target.value);
  };

  const locationInputSubmitHandler = (event) => {
    event.preventDefault();

    const firstLetter = locationName[0].toUpperCase();
    const otherLetters = locationName
      .slice(1, locationName.length)
      .toLowerCase();
    const updatedLocationName = firstLetter.concat(otherLetters);

    dispatch(updateLocationName(updatedLocationName));
    localStorage.setItem(CURRENT_LOCATION_KEY, updatedLocationName);

    setLocationName("");
  };

  return (
    <form className="search-form" onSubmit={locationInputSubmitHandler}>
      <input
        type="text"
        placeholder="Rio"
        className="search-field"
        value={locationName}
        onChange={changeLocationName}
      />
      <input type="image" src={search} className="search-icon" alt="search" />
    </form>
  );
}

export default LocationInput;
