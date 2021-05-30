import React from 'react';
import '../css/profile.css';

const InfoBox = (props) => {
    return (
        <div className={props.divName}>
            <p className={props.paraName}>{props.paraTitle}{props.para}</p>
            {props.linkBox}
            <a href={props.link}>{props.linkName}</a>
            <p>{props.para2}{props.para2}</p>
        </div>
    )
}

export default InfoBox