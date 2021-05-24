import React from 'react';
import '../css/profile.css';
import Linkedin from '../images/linkedin.png';
import Github from '../images/githubSml.png';

const LinkBox = () => {
    return (
        <div className="col-2-2-linkBox">
            <p className="cardTitle">Contact Me</p>
                <a href="https://www.linkedin.com/in/drew-a-thompson-974870202/"><img src={Linkedin} alt='linkedinsml'></img></a>
                <a href="https://github.com/DrewALThompson"><img src={Github} alt='githubsml'></img></a>
        </div>
    )
}

export default LinkBox