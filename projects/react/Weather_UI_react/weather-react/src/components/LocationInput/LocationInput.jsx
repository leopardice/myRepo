import React, {useState} from 'react';
import search from "../../img/search.svg"
import './LocationInput.css'

const LocationInput = (props) => {
    const [locationName, setLocationName] = useState('');

    const changeLocationName = (event) => {
        setLocationName(event.target.value);
    }

    const locationInputSubmitHandler = (event) => {
        event.preventDefault();

        const firstLetter = locationName[0].toUpperCase();
        const otherLetters = locationName.slice(1, locationName.length).toLowerCase();
        const updatedLocationName= firstLetter.concat(otherLetters);

        props.onChangeLocationName(updatedLocationName);

        setLocationName('');
    }

    return (
        <form className="search-form" onSubmit={locationInputSubmitHandler}>
            <input type="text" placeholder="Rio" className="search-field" value={locationName} onChange={changeLocationName}/>
            <input type="image" src={search} className="search-icon"></input>
        </form>
    );
};

export default LocationInput;
