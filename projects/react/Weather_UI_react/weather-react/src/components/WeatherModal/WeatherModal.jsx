import React, {useState} from 'react';
import "./WeatherModal.css"
import ModalButtons from "./ModalButtons";
import ForecastModal from "../ForecastModal/ForecastModal";
import NowWeatherModal from "../NowWeatherModal/NowWeatherModal";
import DetailsModal from "../DetailsModal/DetailsModal";

const WeatherModal = (props) => {
    const [currentModal, setCurrentModal] = useState('Now');

    const onButtonModalClickHandler = (event) => {
        setCurrentModal(event.target.textContent);
    }

    return (
        <div className="weather-modal">
            {currentModal === 'Now' && <NowWeatherModal
                locationName={props.locationName}
                temperature={props.temperature}
                onAddLocation={props.onAddLocation}
                isCityInlist={props.isCityInlist}
                onRemoveLocation={props.onRemoveLocation}
            />}
            {currentModal === 'Details' && <DetailsModal
                locationName={props.locationName}
                temperature={props.temperature}
                feelsLike={props.feelsLike}
                weatherDescription={props.weatherDescription}
                sunriseTime={props.sunriseTime}
                sunsetTime={props.sunsetTime}
            />}
            {currentModal === 'Forecast' && <ForecastModal
                forecastInfo={props.forecastInfo}/>}
            <ModalButtons onNowClick={onButtonModalClickHandler}/>
        </div>
    );
};

export default WeatherModal;
