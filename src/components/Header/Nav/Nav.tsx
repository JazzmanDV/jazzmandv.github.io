import React from "react";

import * as styles from "./Nav.module.css";

import NavMenu from "./NavMenu/NavMenu";
import NavButton from "./NavButton/NavButton";

import navMenuItems from "./navMenuItems";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavMenu navMenuItems={navMenuItems} />
            <NavButton />
        </nav>
    );
};

export default Nav;
