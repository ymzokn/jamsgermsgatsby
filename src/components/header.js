import React from "react"
import { Link } from "gatsby"
import MainLogo from "./mainlogo"
import Fixed from "./fixed.nav"
import Hamburger from "./hamburger"
import headerStyles from "./header.module.scss"
import useWindowDimensions from "../hooks/useWindowDimensions.hook"

const Header = () => {
  const { width } = useWindowDimensions()
  return (
    <nav className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Link to="/">
          <MainLogo></MainLogo>
        </Link>
      </div>
      {width >= 1000 ? <Fixed></Fixed> : <Hamburger></Hamburger>}
    </nav>
  )
}

export default Header;

