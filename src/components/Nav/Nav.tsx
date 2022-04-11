import React, { useState, useEffect } from "react";

import * as styles from "./Nav.module.css";

import NavMenu from "../NavMenu/NavMenu";
import NavButton from "../NavButton/NavButton";

import navMenuItems from "./navMenuItems";

const Nav = () => {
    const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

    useEffect(() => {
        const mediaQueryMaxWidth700 = window.matchMedia("(max-width: 700px)");
        const onMediaQueryChange = () => {
            if (!mediaQueryMaxWidth700.matches) {
                setIsNavMenuOpened(false);
            }
        };
        mediaQueryMaxWidth700.addEventListener("change", onMediaQueryChange);

        return () => {
            mediaQueryMaxWidth700.removeEventListener("change", onMediaQueryChange);
        };
    });

    return (
        <nav className={styles.nav}>
            <NavMenu isNavMenuOpened={isNavMenuOpened} navMenuItems={navMenuItems} />
            <NavButton isNavMenuOpened={isNavMenuOpened} setIsNavMenuOpened={setIsNavMenuOpened} />
        </nav>
    );
};

export default Nav;
