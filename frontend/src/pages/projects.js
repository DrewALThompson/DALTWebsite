import React from 'react';
import InfoBox from '../components/infoBox'
import '../css/projects.css';

const Projects = () => {
    let paraTitle = 'Mainichi';
    let para = 'An SPA Website utilizing JavaScript(React/Redux) and Ruby on Rails meant for LPT practice';
    let link = 'https://youtu.be/LDYgT9asmh8';
    let linkOne2 = 'https://github.com/DrewALThompson/Mainichi';
    let linkName = 'Youtube';
    let linkNameOne2 = 'Github';

    let paraTitleTwo = 'Benkyou';
    let paraTwo = 'An exclusively Ruby on Rails SPA website geared towards Traslation';
    let linkTwo = 'https://youtu.be/IfQpM8WKsX8';
    let linkTwo2 = 'https://github.com/DrewALThompson/Benkyou';
    let linkNameTwo = 'Youtube';
    let linkNameTwo2 = 'Github';

    let paraTitleThree = 'ALP';
    let paraThree = 'A JS website about the benefits and meaning of Accessibility Coding';
    let linkThree = 'https://github.com/DrewALThompson/ALP';
    let linkNameThree = 'Github';
    //didn't map these because i was lazy, maybe later. Might be too much to map too considering I only want three links showing at a time.
    //Names also aren't that imaginative because I am tired will refactor later probably
    return (
        <div>
            <InfoBox className={'col-3-1'} paraTitle={paraTitle} para={para} link={link} link2={linkOne2} linkName={linkName} linkName2={linkNameOne2}/>
            <InfoBox className={'col-3-1'} paraTitle={paraTitleTwo} para={paraTwo} link={linkTwo} link2={linkTwo2} linkName={linkNameTwo} linkName2={linkNameTwo2}/>
            <InfoBox className={'col-3-1'} paraTitle={paraTitleThree} para={paraThree} link={linkThree} linkName={linkNameThree}/>
        </div>
    )
}

export default Projects