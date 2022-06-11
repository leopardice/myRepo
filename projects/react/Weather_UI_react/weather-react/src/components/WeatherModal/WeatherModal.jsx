import React, {useState} from 'react';
import "./WeatherModal.css"
import ModalButtons from "./ModalButtons";
import ForecastModal from "../ForecastModal/ForecastModal";
import NowWeatherModal from "../NowWeatherModal/NowWeatherModal";
import DetailsModal from "../DetailsModal/DetailsModal";

const WeatherModal = (props) => {
    const [currentModal, setCurrentModal] = useState('Forecast');


    const onButtonModalClickHandler = (event) => {
        setCurrentModal(event.target.textContent);
    }

    return (
        <div className="weather-modal">
            {currentModal === 'Now' && <NowWeatherModal locationName={props.locationName}/>}
            {currentModal === 'Details' && <DetailsModal/>}
            {currentModal === 'Forecast' && <ForecastModal/>}
            <ModalButtons onNowClick={onButtonModalClickHandler}/>
        </div>
    );
};

export default WeatherModal;
