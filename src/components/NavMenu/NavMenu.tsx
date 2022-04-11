import React, { FC, useRef, useLayoutEffect, useMemo } from "react";

import type { NavMenuProps } from "../../types";

import * as styles from "./NavMenu.module.css";

import NavMenuItem from "../NavMenuItem/NavMenuItem";

const NavMenu: FC<NavMenuProps> = ({ isOpened, navMenuItems }) => {
    const navMenuRef = useRef<HTMLUListElement>(null);

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

    const mappedNavMenuItems = useMemo(
        () =>
            navMenuItems.map((navMenuItem, index) => (
                <NavMenuItem
                    key={index}
                    href={navMenuItem.href}
                    text={navMenuItem.text}
                    tabIndex={navMenuItem.tabIndex}
                />
            )),
        [navMenuItems]
    );

    return (
        <ul ref={navMenuRef} className={styles.navMenu}>
            {mappedNavMenuItems}
        </ul>
    );
};

export default NavMenu;
