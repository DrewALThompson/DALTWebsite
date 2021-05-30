import React from 'react';
import LinkBox from '../components/linkBox';
import Profile from '../components/profile';
import InfoBox from '../components/infoBox';
import '../css/profile.css';

const Home = () => {

    let insert = 'Hi, My name is Drew Thompson! Fresh Graduate from Flatirons Coding School with an ever increasing passion for Accessibility Coding and the Mobile First Approach. With an attitude to never give up, to learn fast and learn as much as I can I promise to do my best to be a valuable asset to any team. I am just a brand new coder looking to make a positive impact on the world!';
    let linkBox = <LinkBox />
    return (
        <div className='col-2-profileCont'>
            <InfoBox divName={"col-2-1-infoBox"} paraName={'col-2-1-1'} para1={insert} linkBox={linkBox} />
            <Profile />
        </div>
    )
}

export default Home