import React from 'react';
import search from "../../img/search.svg"
import './LocationInput.css'

const LocationInput = () => {
    const searchImgSrc = "./search.svg"

    return (
        <form className="search-form">
            <input type="text" placeholder="Aktobe" className="search-field" value=""/>
            <input type="image" src={search} className="search-icon"></input>
        </form>
    );
};

export default LocationInput;
