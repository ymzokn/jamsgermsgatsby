import React from 'react';
import HeroText from './herotext';
import HeroImage from './heroimage';

import heroStyles from "./hero.module.scss";

const Hero = () => {
    return (
        <div className={heroStyles.heroWrapper}>
            <HeroText></HeroText>
            <HeroImage></HeroImage>
            <p>Scroll Down</p>
        </div>
    );
}

export default Hero;