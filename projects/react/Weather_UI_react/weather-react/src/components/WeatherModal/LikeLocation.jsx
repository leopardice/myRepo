import React from 'react';
import LocationName from "../LocationName";
import LikeButton from "./LikeButton";
import "./LikeLocation.css"

const LikeLocation = () => {
    return (
        <div className="like-location">
            <LocationName/>
            <LikeButton/>
        </div>
    );
};

export default LikeLocation;
