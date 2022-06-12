import React from 'react';
import './AddedLocationsModal.css'

const AddedLocationsModal = (props) => {

    const locationClickHandler = (event) => {
        props.showLocation(event.target.textContent);
    }

    return (
        <div className='added-locations-modal'>
            <div className="added-locations-title">
                Added Locations:
            </div>
            <ul className="added-locations-list">
                {props.addedLocations.map(location => {
                   return <li
                       key={Math.random().toString()}
                       onClick={locationClickHandler}>{location}</li>
                })}
            </ul>
        </div>
    );
};

export default AddedLocationsModal;
