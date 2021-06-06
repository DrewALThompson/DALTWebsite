import React from 'react';
import '../css/profile.css';

const InfoBox = (props) => {
    //everything that uses infoBox will use generic names such that infoBox won't render certain parts if not needed
    //e.g no need for linkbox except for on the Home page no need for links except on projects page
    //extra para2 incase i need it
    return (
        <div className={props.divName}>
            <p className={props.paraName}>{props.paraTitle}<br />{props.para}</p>
            {props.linkBox}
            <a href={props.link}>{props.linkName}</a> <a href={props.link2}>{props.linkName2}</a>
            <p>{props.para2}</p>
        </div>
    )
}

export default InfoBox