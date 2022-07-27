import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import heartClear from "../../../img/heartClear.svg";
import heartBlack from "../../../img/heartBlack.svg";
import "./LikeButton.css";
import {
  addFavoriteLocation,
  removeFavoriteLocation,
} from "../../../redux/actions";
import { addDataToLocalStorage } from "../../../js/helpers";

const ADDED_LOCATIONS_KEY = "addedLocations";

function LikeButton() {
  const dispatch = useDispatch();

  const locationName = useSelector((state) => {
    const { locationNameReducer } = state;
    return locationNameReducer;
  });

  const favoriteLocationsArray = useSelector((state) => {
    const { favoriteLocationsReducer } = state;
    return [...favoriteLocationsReducer];
  });

  useEffect(() => {
    addDataToLocalStorage(ADDED_LOCATIONS_KEY, favoriteLocationsArray);
  }, [favoriteLocationsArray]);

  const removeLocation = () => {
    dispatch(removeFavoriteLocation(locationName));
  };

  const addLocation = () => {
    dispatch(addFavoriteLocation(locationName));
  };

  const isCityInlist = favoriteLocationsArray.includes(locationName);

  const likeImgSrc = isCityInlist ? heartBlack : heartClear;
  const likeButtonClickHandler = isCityInlist ? removeLocation : addLocation;

  return (
    <input
      type="image"
      src={likeImgSrc}
      className="like-button"
      onClick={likeButtonClickHandler}
      alt="like-button"
    />
  );
}

export default LikeButton;
