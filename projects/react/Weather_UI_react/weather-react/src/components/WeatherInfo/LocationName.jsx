import React from 'react';

const LocationName = (props) => {

    const rawLocationName = props.locationName;
    // const locationNameFirstLetter = rawLocationName ? rawLocationName[0].toUpperCase() : "";
    // const locationNameOtherLetters = rawLocationName ? rawLocationName.slice(1, (rawLocationName.length)) : '';
    // const locationName = locationNameFirstLetter.concat(locationNameOtherLetters.toLowerCase());

    return (
        <div className="location-name">
            {rawLocationName}
        </div>
    );
};

export default LocationName;
