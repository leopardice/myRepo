import React from 'react';
import './ModalButtons.css';

function ModalButtons(props) {
  const { onNowClick, currentModal } = props;
  return (
    <div className="modal-buttons">
      <button
        type="button"
        className={currentModal === 'Now'
          ? 'modal-button black-background'
          : 'modal-button'}
        onClick={onNowClick}
      >
        Now
      </button>
      <button
        type="button"
        className={currentModal === 'Details'
          ? 'modal-button black-background'
          : 'modal-button'}
        onClick={onNowClick}
      >
        Details
      </button>
      <button
        type="button"
        className={currentModal === 'Forecast'
          ? 'modal-button black-background'
          : 'modal-button'}
        onClick={onNowClick}
      >
        Forecast
      </button>
    </div>
  );
}

export default ModalButtons;
