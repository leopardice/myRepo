import React from 'react';
import './ModalButton.css'

const ModalButton = (props) => {
    const classes = 'modal-button' + ' ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default ModalButton;
