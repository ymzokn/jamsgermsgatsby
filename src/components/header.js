import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import MainLogo from "./mainlogo"
import Fixed from "./fixed.nav"
import Hamburger from "./hamburger"
import headerStyles from "./header.module.scss"
import useWindowDimensions from "../hooks/useWindowDimensions.hook"

const Header = () => {
  const { width } = useWindowDimensions()
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = function () {
    if (window.pageYOffset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }


  return (
    <nav className={headerStyles.header}>
      <div className={`${headerStyles.logo} ${scrolled ? `${headerStyles.shrunk}` : ""}`}>
        <Link to="/">
          <img className={headerStyles.logoImage} src={require("../../static/jg-logo-clipped.png")}></img>
          {/* <MainLogo></MainLogo> */}
        </Link>
      </div>
      {width >= 1000 ? <Fixed></Fixed> : <Hamburger></Hamburger>}
    </nav>
  )
}

export default Header;

