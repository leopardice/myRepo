import { useState, useEffect } from 'react'
import LocationInput from "./components/LocationInput/LocationInput";
import './App.css'
import WeatherModal from "./components/WeatherModal/WeatherModal";

function App() {
    const [locationName, setLocationName] = useState('Aktobe');


    const onChangeLocationName = (locationName) => {
        setLocationName(locationName);
    };

    return (
      <div className="container">
        <LocationInput onChangeLocationName={onChangeLocationName}/>
        <WeatherModal locationName={locationName}/>
      </div>
  )
}

export default App
