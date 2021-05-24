import React from 'react';
import '../css/profile.css';

const InfoBox = (props) => {
    return (
        <div className="col-2-1-infoBox">
            <p>{props.text}</p>
            {props.linkBox ? props.linkBox : null}
        </div>
    )
}

export default InfoBox