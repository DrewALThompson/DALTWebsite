import React from 'react';
import headshot from '../images/headshot.jpg'
import '../css/profile.css';

const Profile = () => {
    return (
        <div className="col-2-3-profileCard">
            <img src={headshot} alt='headshot'></img>
            <h3>Drew Thompson<br />Fullstack Software Engineer</h3>
        </div>
    )
}

export default Profile