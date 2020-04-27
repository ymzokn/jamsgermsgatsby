import React, { useState, useEffect } from "react"
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"
import Button from "./button"

const Hamburger = props => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div>
      <div
        className={headerStyles.hamburgerIconWrapper}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <div
          className={
            isNavOpen
              ? headerStyles.hamburgerIconClosed
              : headerStyles.hamburgerIconOpen
          }
        ></div>
      </div>
      {isNavOpen && (
        <div className={headerStyles.hamburger}>
          <ul className={headerStyles.verticalNav}>
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
        </div>
      )}
    </div>
  )
}

export default Hamburger
