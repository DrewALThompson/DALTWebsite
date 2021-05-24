import React from 'react';
import LinkBox from '../components/linkBox';
import Profile from '../components/profile';
import '../css/profile.css';

const Home = () => {
    return (
        <div className='profileCont'>

            <LinkBox />
            <Profile />
        </div>
    )
}

export default Home