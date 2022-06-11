import React from 'react';

const LocationName = (props) => {

    const rawLocationName = props.locationName;

    // const locationNameFirstLetter =  rawLocationName[0];
    // const locationNameOtherLetters = rawLocationName.slice(1, rawLocationName.length-1);
    // const locationName = locationNameFirstLetter.concat(locationNameOtherLetters);

    return (
        <div className="location-name">
            {rawLocationName}
        </div>
    );
};

export default LocationName;
