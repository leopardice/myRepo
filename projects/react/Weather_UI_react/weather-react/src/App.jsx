import { useState, useEffect } from 'react'
import LocationInput from "./components/LocationInput/LocationInput";
import './App.css'
import WeatherModal from "./components/WeatherModal/WeatherModal";
import {getForecast, getWeather} from "./js/fetchRequests"

function App() {
    const [locationName, setLocationName] = useState('Aktobe');
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
       getWeather(locationName)
           .then(weatherInfo => setWeatherInfo(weatherInfo));
       getForecast(locationName);
    }, [locationName]);

    const onChangeLocationName = (locationName) => {
            setLocationName(locationName);
        };

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
                    icon={weatherInfo.icon}
                />
            </div>
        )
    }

export default App
