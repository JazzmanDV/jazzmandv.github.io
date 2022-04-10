import React, { useLayoutEffect, useRef, useState } from "react";

import * as styles from "./Nav.module.css";

import NavMenu from "./NavMenu/NavMenu";
import NavButton from "./NavButton/NavButton";

import navMenuItems from "./navMenuItems";

const Nav = () => {
    const navMenuRef = useRef<HTMLUListElement>(null);
    const [isOpened, setIsOpened] = useState(false);

    const openNavMenu = () => {
        const navMenu = navMenuRef.current;

        if (!navMenu) {
            return;
        }

        navMenu.style.height = "auto";
        const fullHeight = getComputedStyle(navMenu).height;

        requestAnimationFrame(() => {
            navMenu.style.height = "0px";
            requestAnimationFrame(() => {
                navMenu.style.height = fullHeight;
            });
        });
    };

    const closeNavMenu = () => {
        const navMenu = navMenuRef.current;

        if (!navMenu) {
            return;
        }

        navMenu.style.height = "";
    };

    const toggleNavMenu = () => {
        isOpened ? openNavMenu() : closeNavMenu();
    };

    useLayoutEffect(toggleNavMenu, [isOpened]);

    return (
        <nav className={styles.nav}>
            <NavMenu ref={navMenuRef} isOpened={isOpened} navMenuItems={navMenuItems} />
            <NavButton isOpened={isOpened} setIsOpened={setIsOpened} />
        </nav>
    );
};

export default Nav;
