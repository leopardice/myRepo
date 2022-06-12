import { useState, useEffect } from 'react'
import LocationInput from "./components/LocationInput/LocationInput";
import './App.css'
import WeatherModal from "./components/WeatherModal/WeatherModal";
import {getForecast, getWeather} from "./js/fetchRequests"
import AddedLocationsModal from "./components/AddedLocations/AddedLocationsModal";

function App() {
    const [locationName, setLocationName] = useState('Rio');
    const [weatherInfo, setWeatherInfo] = useState({});
    const [forecastInfo, setForecastInfo] = useState([]);
    const [addedLocations, setAddedLocations] = useState(new Set([]));
    const [isCityInList, setIsCityInList] = useState(false);

    useEffect(() => {
        getWeather(locationName)
            .then(weatherInfo => setWeatherInfo(weatherInfo));
        getForecast(locationName)
            .then(forecastInfo => setForecastInfo(forecastInfo));
    }, []);


    useEffect(() => {
       getWeather(locationName)
           .then(weatherInfo => setWeatherInfo(weatherInfo));
       getForecast(locationName)
           .then(forecastInfo => setForecastInfo(forecastInfo));
       setIsCityInList([...addedLocations].includes(locationName));
    }, [locationName]);

    useEffect(() => {
        setIsCityInList([...addedLocations].includes(locationName));
    }, [addedLocations]);


    const onChangeLocationName = (locationName) => {
        setLocationName(locationName);
        };

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
                <LocationInput onChangeLocationName={onChangeLocationName}/>
                <WeatherModal
                    locationName={weatherInfo.name}
                    temperature={weatherInfo.temperature}
                    feelsLike={weatherInfo.feelsLike}
                    weatherDescription={weatherInfo.weatherDescription}
                    sunriseTime={weatherInfo.sunriseTime}
                    sunsetTime={weatherInfo.sunsetTime}
                    iconId={weatherInfo.icon}
                    forecastInfo={forecastInfo}
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
