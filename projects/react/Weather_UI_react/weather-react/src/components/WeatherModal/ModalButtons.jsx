import React from 'react';
import ModalButton from "../UI/ModalButton";
import './ModalButtons.css'
const ModalButtons = (props) => {

    return (
        <div className="modal-buttons">
        <button className='modal-button now-button' onClick={props.onNowClick}>
            Now
        </button>
            <button className='details-button modal-button' onClick={props.onNowClick}>
                Details
            </button>
            <button className='forecast-button modal-button' onClick={props.onNowClick}>
                Forecast
            </button>
        </div>
    );
};

export default ModalButtons;
