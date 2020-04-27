import React from 'react';
import Button from './button';

import heroStyles from "./hero.module.scss"

const HeroText = () => {
    return (
        <div className={heroStyles.heroTextWrapper}>
            <h1 className={heroStyles.heroTitle}>Jam's Germs</h1>
            <p className={heroStyles.heroDescription}>I show people the invisible world around them. Einstein, you little devil!</p>
            <div className={heroStyles.separator}></div>
            <Button variant="primary" text="Donate to Educate!"></Button>
        </div>
    );
}

export default HeroText;