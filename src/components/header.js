import React from 'react';
import { Link } from 'gatsby';
import headerStyles from "./header.module.scss";

const Header = () => {
    return (
        <nav className={headerStyles.header}>
            <ul className={headerStyles.horizontalLink}>
                <li>
                    <Link className={headerStyles.navLink} to="/" activeClassName={headerStyles.active}>Home</Link>
                </li>
                <li>
                    <Link className={headerStyles.navLink} to="/about" activeClassName={headerStyles.active}>About</Link>
                </li>
                <li>
                    <Link className={headerStyles.navLink} to="/contact" activeClassName={headerStyles.active}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;