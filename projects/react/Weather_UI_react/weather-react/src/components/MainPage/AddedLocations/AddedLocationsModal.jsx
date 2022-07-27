import React from "react";
import "./AddedLocationsModal.css";
import { useDispatch, useSelector } from "react-redux";
import { updateLocationName } from "../../../redux/actions";

function AddedLocationsModal() {
  const dispatch = useDispatch();

  const favoriteLocationsArray = useSelector((state) => {
    const { favoriteLocationsReducer } = state;
    return [...favoriteLocationsReducer];
  });

  const locationClickHandler = (event) => {
    dispatch(updateLocationName(event.target.textContent));
  };

  return (
    <div className="added-locations-modal">
      <div className="added-locations-title">Added Locations:</div>
      <ul className="added-locations-list">
        {favoriteLocationsArray.map((location) => (
          <li key={Math.random().toString()} onClick={locationClickHandler}>
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddedLocationsModal;
