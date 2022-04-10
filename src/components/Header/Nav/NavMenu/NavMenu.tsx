import React, { FC } from "react";

import * as styles from "./NavMenu.module.css";

import { NavMenuProps } from "../../../../types";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const NavMenu: FC<NavMenuProps> = ({ navMenuItems }) => {
    const mappedNavMenuItems = navMenuItems.map((navMenuItem, index) => (
        <NavMenuItem key={index} href={navMenuItem.href} text={navMenuItem.text} tabIndex={navMenuItem.tabIndex} />
    ));

    return <ul className={styles.navMenu}>{mappedNavMenuItems}</ul>;
};

export default NavMenu;
