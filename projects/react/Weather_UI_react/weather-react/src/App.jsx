import { useState } from 'react'
import LocationInput from "./components/LocationInput/LocationInput";
import './App.css'
import WeatherModal from "./components/WeatherModal/WeatherModal";

function App() {
  return (
      <div className="container">
        <LocationInput/>
        <WeatherModal/>
          <WeatherModal/>
      </div>
  )
}

export default App
