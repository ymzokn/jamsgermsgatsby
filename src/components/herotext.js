import React from 'react';
import heroStyles from "./hero.module.scss"

const HeroText = () => {
    return (
        <div className={heroStyles.heroTextWrapper}>
            <h1 className={heroStyles.heroTitle}>Jam's Germs</h1>
            <p className={heroStyles.heroDescription}>I show people the inivisible world around them.</p>
        </div>
    );
}

export default HeroText;