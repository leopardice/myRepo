import React, { useState, useEffect } from 'react'
import LocationInput from "./components/LocationInput/LocationInput";
import './App.css'
import WeatherModal from "./components/WeatherModal/WeatherModal";
import {getForecast, getWeather} from "./js/fetchRequests"
import AddedLocationsModal from "./components/AddedLocations/AddedLocationsModal";
import {addDataToLocalStorage, getDataFromLocalStorage} from "./js/helpers";
import {useDispatch} from "react-redux";
import {updateForecastInfo, updateWeatherInfo} from "./redux/actions";
import {Link} from "react-router-dom";

const CURRENT_LOCATION_KEY = 'currentLocation';
const ADDED_LOCATIONS_KEY = 'addedLocations';

function App() {
    const [locationName, setLocationName] = useState(localStorage.getItem(CURRENT_LOCATION_KEY));
    const [addedLocations, setAddedLocations] = useState(new Set(getDataFromLocalStorage(ADDED_LOCATIONS_KEY)));
    const [isCityInList, setIsCityInList] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
       getWeather(locationName)
           .then(weatherInfo => {
               dispatch(updateWeatherInfo(weatherInfo));
           })
           .catch((e) => {
               console.log(e)
               alert("There is no such city");
           });
       getForecast(locationName)
           .then(forecastInfo => {
               dispatch(updateForecastInfo(forecastInfo));
           })
           .catch((e) => {
               console.log(e)
           });
        setIsCityInList([...addedLocations].includes(locationName));
    }, [locationName]);

    useEffect(() => {
        setIsCityInList([...addedLocations].includes(locationName));
        addDataToLocalStorage(ADDED_LOCATIONS_KEY, addedLocations);
    }, [addedLocations]);

    const onChangeLocationName = (name) => {
        setLocationName(name);
        localStorage.setItem(CURRENT_LOCATION_KEY, name);
    }

    const onAddLocation = () => {
        setAddedLocations(prevState => {
            return new Set([...prevState, locationName])});
    }

    const onRemoveLocation = () => {
        setAddedLocations(prevState => {
            return new Set([...prevState].filter(item => item !== locationName))
        })
    }

        return (
            <div className="container">
                <nav>
                    <Link to='/help'>Help</Link>
                </nav>
                <LocationInput onChangeLocationName={onChangeLocationName}/>
                <WeatherModal
                    onAddLocation={onAddLocation}
                    onRemoveLocation={onRemoveLocation}
                    isCityInlist={isCityInList}
                />
                <AddedLocationsModal
                    addedLocations={[...addedLocations]}
                    showLocation={onChangeLocationName}
                />
            </div>
        )
    }

export default App
