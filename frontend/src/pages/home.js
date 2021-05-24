import React from 'react';
import LinkBox from '../components/linkBox';
import Profile from '../components/profile';
import InfoBox from '../components/infoBox';
import '../css/profile.css';

const Home = () => {

    let insert = 'Hi, My name is Drew Thompson! Fresh Graduate from Flatirons Coding School looking to make a positive impact in the world!'
    return (
        <div className='col-2-profileCont'>
            <div className='col-2-0-infoCont'>
                <InfoBox text={insert} />
                <LinkBox />
            </div>
            <Profile />
        </div>
    )
}

export default Home