import React from 'react';
import HeroText from './herotext';
import HeroImage from './heroimage';

import heroStyles from "./hero.module.scss";

const Hero = () => {
    return (
        <div className={heroStyles.heroWrapper}>
            <HeroText></HeroText>
            <HeroImage></HeroImage>
            <div className={heroStyles.scrollPrompt}><img src={require("../../static/arrow-black-down.svg")} /><p>Scroll For More</p></div>
        </div>
    );
}

export default Hero;