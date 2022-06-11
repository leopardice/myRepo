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

        props.onChangeLocationName(locationName);

        setLocationName('');
    }

    return (
        <form className="search-form" onSubmit={locationInputSubmitHandler}>
            <input type="text" placeholder="Aktobe" className="search-field" value={locationName} onChange={changeLocationName}/>
            <input type="image" src={search} className="search-icon"></input>
        </form>
    );
};

export default LocationInput;
