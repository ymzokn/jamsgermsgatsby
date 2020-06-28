import React from "react"
import Button from "./button"

import heroStyles from "./hero.module.scss"

const HeroText = () => {
  return (
    <div className={heroStyles.heroTextWrapper}>
      {/* <h1 className={heroStyles.heroTitle}>Jam's Germs</h1> */}
      <p className={heroStyles.heroDescription}>
        Weight has nothing to do with it. George, aren't you gonna kiss me? Will
        you take care of that? Yeah, I think it's a major embarrassment having
        an uncle in prison. Who are you? My god, it's my mother. Put your pants
        back on. Scram, McFly. A bolt of lightning, unfortunately, you never
        know when or where it's ever gonna strike. Jennifer, oh are you a sight
        for sore eyes. Let me look at you. Yeah, exactly. That ain't no
        airplane, look. What did I just say? Well, now we gotta sneak this back
        into my laboratory, we've gotta get you home. Oh, just a little weather
        experiment. Not a word, not a word, not a word now. Quiet, uh,
        donations, you want me to make a donation to the coast guard youth
        auxiliary?
      </p>
      <div className={heroStyles.separator}></div>
      <div className={heroStyles.button}>
        <Button variant="primary_sliding" text="Donate!"></Button>
      </div>
    </div>
  )
}

export default HeroText
