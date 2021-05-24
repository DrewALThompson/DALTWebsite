import React from 'react';
import headshot from '../images/headshot.jpg'
import '../css/profile.css';

const Profile = () => {
    return (
        <div className="profileCard">
            <img src={headshot} alt='headshot'></img>
            <h1>Drew Thompson</h1>
                <p className="cardTitle">Full Stack Software Engineer</p>
                <a href="https://www.linkedin.com/in/drew-a-thompson-974870202/"><i className="linkedin"></i></a>
                <a href="https://github.com/DrewALThompson"><i className="github"></i></a>
            <p><button>Contact</button></p>
        </div>
    )
}

export default Profile