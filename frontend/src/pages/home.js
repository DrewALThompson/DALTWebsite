import React from 'react';
import LinkBox from '../components/linkBox';
import Profile from '../components/profile';
import InfoBox from '../components/infoBox';
import '../css/profile.css';

const Home = () => {

    let insert = 'Hi, My name is Drew Thompson! Fresh Graduate from Flatirons Coding School looking to make a positive impact in the world!';
    let linkBox = <LinkBox />
    return (
        <div className='col-2-profileCont'>
            <InfoBox text={insert} linkBox={linkBox} />
            <Profile />
        </div>
    )
}

export default Home