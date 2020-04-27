import React from "react"
import { Link } from "gatsby"
import Button from "./button"
import MainLogo from "./mainlogo"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <nav className={headerStyles.header}>
      <div style={{ marginTop: "8rem" }}>
        <Link to="/">
          <MainLogo></MainLogo>
        </Link>
      </div>
      <ul className={headerStyles.horizontalNav}>
        <li>
          <Link
            className={headerStyles.navLink}
            to="/"
            activeClassName={headerStyles.active}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navLink}
            to="/blog"
            activeClassName={headerStyles.active}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navLink}
            to="/Identification"
            activeClassName={headerStyles.active}
          >
            Identification
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navLink}
            to="/My Work"
            activeClassName={headerStyles.active}
          >
            My Work
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navLink}
            to="/Shop"
            activeClassName={headerStyles.active}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link to="/Donate">
            <Button text="Donate" variant="primary"></Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
