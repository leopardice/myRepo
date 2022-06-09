import React from 'react';
import heart from '../../img/heart.svg'
import './LikeButton.css'

const LikeButton = () => {
    return (
        <input type="image" src={heart} className="like-button"/>
    );
};

export default LikeButton;
