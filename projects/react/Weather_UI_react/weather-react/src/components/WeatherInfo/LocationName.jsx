import React from 'react';
import {useSelector} from "react-redux";

const LocationName = () => {

    const locationName = useSelector( state => {
        const { weatherInfoReducer } = state;
        return weatherInfoReducer.name;
    })

    return (
        <div className="location-name">
            {locationName}
        </div>
    );
};

export default LocationName;
