import React from 'react';
import '../css/profile.css';

const InfoBox = (props) => {
    return (
        <div className="col-2-1-infoBox">
            <p className='col-2-1-1'>{props.text}</p>
            {props.linkBox}
        </div>
    )
}

export default InfoBox