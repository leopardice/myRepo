import React, { useState } from 'react';
import './WeatherModal.css';
import ModalButtons from './ModalButtons';
import ForecastModal from '../ForecastModal/ForecastModal';
import NowWeatherModal from '../NowWeatherModal/NowWeatherModal';
import DetailsModal from '../DetailsModal/DetailsModal';

function WeatherModal() {
  const [currentModal, setCurrentModal] = useState('Now');

  const onButtonModalClickHandler = (event) => {
    setCurrentModal(event.target.textContent);
  };

  return (
    <div className="weather-modal">
      {currentModal === 'Now' && <NowWeatherModal />}
      {currentModal === 'Details' && <DetailsModal />}
      {currentModal === 'Forecast' && <ForecastModal />}
      <ModalButtons
        onNowClick={onButtonModalClickHandler}
        currentModal={currentModal}
      />
    </div>
  );
}

export default WeatherModal;
