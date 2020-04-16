import React from 'react';
import heroImg from "../../static/hero-img.jpg";
import heroStyles from "./hero.module.scss";

const Hero = () => {
    return (<header className={heroStyles.container}>
        <div className={heroStyles.heroText}>
            <h1>The invisible world around us.</h1>
            <div className={heroStyles.divider}></div>
            <h3>I am James.<br />I show people the oceans in a small puddle, the jungles on an unremarkable leaf and the deserts on a tiny grain of sand.</h3>
        </div>
        {/* <img className={heroStyles.heroImg} src={heroImg}></img> */}
    </header>);
}

export default Hero;