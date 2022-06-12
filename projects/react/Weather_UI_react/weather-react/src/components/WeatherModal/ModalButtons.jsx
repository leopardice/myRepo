import React from 'react';
import ModalButton from "../UI/ModalButton";
import './ModalButtons.css'
const ModalButtons = (props) => {

    return (
        <div className="modal-buttons">
        <button className={props.currentModal === 'Now'
            ? 'modal-button black-background'
            : 'modal-button'}
                onClick={props.onNowClick}>
            Now
        </button>
            <button className={props.currentModal === 'Details'
            ? 'modal-button black-background'
            : 'modal-button'}
                    onClick={props.onNowClick}>
                Details
            </button>
            <button className={props.currentModal === 'Forecast'
                ? 'modal-button black-background'
                : 'modal-button'}
                    onClick={props.onNowClick}>
                Forecast
            </button>
        </div>
    );
};

export default ModalButtons;
