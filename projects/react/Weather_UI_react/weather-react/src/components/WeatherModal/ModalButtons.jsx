import React from 'react';
import ModalButton from "../UI/ModalButton";
import './ModalButtons.css'
const ModalButtons = (props) => {
    return (
        <div className="modal-buttons">
        <ModalButton className='now-button'>
            Now
        </ModalButton>
            <ModalButton className='details-button'>
                Details
            </ModalButton>
            <ModalButton className='forecast-button'>
                Forecast
            </ModalButton>
        </div>
    );
};

export default ModalButtons;
