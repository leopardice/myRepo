import React from 'react';
import heartClear from '../../img/heartClear.svg'
import heartBlack from '../../img/heartBlack.svg'
import './LikeButton.css'

const LikeButton = (props) => {

    const likeImgSrc = props.isCityInlist ? heartBlack : heartClear;
    const likeButtonClickHandler = props.isCityInlist ? props.onRemoveLocation : props.onAddLocation;
    return (
        <input type="image" src={likeImgSrc} className="like-button" onClick={likeButtonClickHandler}/>
    );
};

export default LikeButton;
