import React from 'react';
import "./WeatherModal.css"
import TemperatureIndicator from "../TemperatureIndicator";
import WeatherImg from "../WeatherImg";
import LocationName from "../LocationName";
import LikeButton from "./LikeButton";
import LikeLocation from "./LikeLocation";
import ModalButtons from "./ModalButtons";
import NowWeatherModal from "../NowWeatherModal/NowWeatherModal";

const WeatherModal = () => {
    return (
        <div className="weather-modal">
            <NowWeatherModal/>
            <ModalButtons/>
        </div>
    );
};

export default WeatherModal;
