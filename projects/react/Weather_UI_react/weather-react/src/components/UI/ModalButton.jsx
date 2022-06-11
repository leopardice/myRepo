import React from 'react';
import './ModalButton.css'

const ModalButton = (props) => {
    const classes = 'modal-button' + ' ' + props.className;
    return (
        <button className='modal-button'>
            {props.children}
        </button>
    );
};

export default ModalButton;
