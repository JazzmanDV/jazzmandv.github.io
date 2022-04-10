import React, { forwardRef } from "react";
import classnames from "classnames";

import * as styles from "./NavMenu.module.css";

import { NavMenuProps } from "../../types";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(({ isOpened, navMenuItems }, ref) => {
    const mappedNavMenuItems = navMenuItems.map((navMenuItem, index) => (
        <NavMenuItem
            key={index}
            href={navMenuItem.href}
            text={navMenuItem.text}
            tabIndex={navMenuItem.tabIndex}
        />
    ));

    return (
        <ul ref={ref} className={styles.navMenu}>
            {mappedNavMenuItems}
        </ul>
    );
});

export default NavMenu;
