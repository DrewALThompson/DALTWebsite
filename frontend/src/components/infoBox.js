import React from 'react';
import '../css/profile.css';

const InfoBox = () => {
    return (
        <div className="linkBox">
            <p className="cardTitle">Full Stack Software Engineer</p>
                <a href="https://www.linkedin.com/in/drew-a-thompson-974870202/"><i className="linkedin"></i></a>
                <a href="https://github.com/DrewALThompson"><i className="github"></i></a>
                <p><button>Contact</button></p> 
        </div>
    )
}

export default InfoBox