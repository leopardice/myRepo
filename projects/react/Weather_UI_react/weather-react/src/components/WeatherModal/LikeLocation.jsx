import React from 'react';
import LocationName from "../WeatherInfo/LocationName";
import LikeButton from "./LikeButton";
import "./LikeLocation.css"

const LikeLocation = (props) => {

    return (
        <div className="like-location">
            <LocationName locationName={props.locationName}/>
            <LikeButton
                onAddLocation={props.onAddLocation}
                onRemoveLocation={props.onRemoveLocation}
                isCityInlist={props.isCityInlist}
            />
        </div>
    );
};

export default LikeLocation;
