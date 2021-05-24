import React from 'react';
import headshot from '../images/headshot.jpg'
import '../css/profile.css';

const Profile = () => {
    return (
        <div className="profileCard">
            <img src={headshot} alt='headshot'></img>
            <h1>Drew Thompson</h1>
        </div>
    )
}

export default Profile