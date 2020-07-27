import React from "react"
import { Link } from "gatsby"
import Button from "./button"
import headerStyles from "./header.module.scss"

const Fixed = props => {
  return (
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
      {/* <li>
        <Link
          className={headerStyles.navLink}
          to="/Identification"
          activeClassName={headerStyles.active}
        >
          Identification
        </Link>
      </li> */}
      {/* <li>
        <Link
          className={headerStyles.navLink}
          to="/My Work"
          activeClassName={headerStyles.active}
        >
          My Work
        </Link>
      </li> */}
      {/* <li>
        <Link
          className={headerStyles.navLink}
          to="/Shop"
          activeClassName={headerStyles.active}
        >
          Shop
        </Link>
      </li> */}
      <li>
        <a href="https://www.gofundme.com/f/qcv6qm-help-me-get-that-dic" target="_blank">
          <Button text="Donate" variant="primary"></Button>
        </a>
      </li>
    </ul>
  )
}

export default Fixed
