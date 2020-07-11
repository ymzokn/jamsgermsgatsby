import React from "react"
import Button from "./button"
import heroStyles from "./hero.module.scss"
import ContactList from "./contactList"

const HeroText = () => {
  return (
    <div className={heroStyles.heroTextWrapper}>
      {/* <h1 className={heroStyles.heroTitle}>Jam's Germs</h1> */}
      <p className={heroStyles.heroDescription}>
        Hey it's James! And these are Jam's Germs! James is a funny guy who got
        lost in life and found his passion in pond scum 🔬
      </p>
      <div className={heroStyles.separator}></div>
      {/* <div className={heroStyles.button}>
        <Button variant="primary" text="Donate!"></Button>
      </div> */}
      <ContactList/>
    </div>
  )
}

export default HeroText
