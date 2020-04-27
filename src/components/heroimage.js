import React from 'react';
import Slide from './slide';
import heroStyles from "./hero.module.scss"

const HeroImage = () => {
    return (<div className={heroStyles.heroImageWrapper}>
        <Slide></Slide>
    </div>);
}

export default HeroImage;