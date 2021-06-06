import React from 'react';
import InfoBox from '../components/infoBox'
import '../css/about.css';
const About = () => {

    let paraOneTitle = 'Skillset';
    let paraOne ='JavaScript | Node.js | React | Redux | Ruby | Rails | ActiveRecord | Sqlite3 | HTML5 | CSS | Git | WCAG';
    let paraTwoTitle = 'Education';
    let paraTwo = 'University of Colorado at Boulder';
    let paraTwoOne = 'Flatiron School'
    let paraThreeTitle = 'Work Experience';
    let paraThree = `Manager at Wallaby's Liquor Warehouse`;
    return (
        <div className='col-3-1-about'>
            <InfoBox divName={'col-3-1'} paraTitle={paraOneTitle} para={paraOne}/>
            <InfoBox divName={'col-3-2'} paraTitle={paraTwoTitle} para={paraTwo} para2={paraTwoOne}/>
            <InfoBox divName={'col-3-3'} paraTitle={paraThreeTitle} para={paraThree}/>
        </div>
    )
}

export default About