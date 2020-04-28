import React from 'react';
import Slide from './slide';
import heroStyles from "./hero.module.scss"

const HeroImage = () => {
    return (<div className={heroStyles.heroImageWrapper}>
        <div className={heroStyles.slideWrapper}><Slide></Slide></div>
    </div>);
}

export default HeroImage;