import React from 'react';
import '../css/profile.css';

const InfoBox = (props) => {
    return (
        <div className={props.divName}>
            <p>{props.para1Title}{props.para1}</p>
            {props.linkBox}
            <a href={props.link1}>{props.linkName1}</a>
            <p>{props.para2Title}{props.text2}</p>
            <a href={props.link2}>{props.linkName2}</a>
            <p>{props.para3Title}{props.text3}</p>
            <a href={props.link3}>{props.linkName3}</a>
        </div>
    )
}

export default InfoBox