import React from "react"
import HeroText from "./herotext"
import HeroImage from "./heroimage"
import LatestBlogPost from "./latestBlogPost"
import heroStyles from "./hero.module.scss"

const Hero = () => {
  return (
    <div className={heroStyles.heroWrapper}>
      <HeroText></HeroText>
      <HeroImage></HeroImage>
      <div className={heroStyles.latestWrapper}>
        <LatestBlogPost></LatestBlogPost>
        <div className={heroStyles.latestTitle}></div>
      </div>
    </div>
  )
}

export default Hero
