import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import MainLogo from "./mainlogo"
import Fixed from "./fixed.nav"
import Hamburger from "./hamburger"
import useWindowDimensions from "../hooks/useWindowDimensions.hook"
import headerStyles from "./header.module.scss"

const Header = () => {
  const { width } = useWindowDimensions()
  return (
    <nav className={headerStyles.header}>
      <div style={{ marginTop: "8rem" }}>
        <Link to="/">
          <MainLogo></MainLogo>
        </Link>
      </div>
      {width >= 1000 ? <Fixed></Fixed> : <Hamburger></Hamburger>}
    </nav>
  )
}

export default Header
