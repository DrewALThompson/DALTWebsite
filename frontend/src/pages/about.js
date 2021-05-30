import React from 'react';
import InfoBox from '../components/infoBox'
import './css/About.css';
const About = () => {

    let para1Title = 'Skillset';
    let para1 ='JavaScript | Node.js | React | Redux | Ruby | Rails | ActiveRecord | Sqlite3 | HTML5 | CSS | Git | WCAG';
    let para2Title = 'Education';
    let para2 = '';
    let para3Title = 'Work Experience';
    let para3 = '';
    return (
        <>
            <InfoBox para1Title={para1Title} para1={para1} linkBox={null}/>
            <InfoBox para2Title={para2Title} para2={para2} linkBox={null}/>
            <InfoBox para3Title={para3Title} para3={para3} linkBox={null}/>
        </>
    )
}

export default About