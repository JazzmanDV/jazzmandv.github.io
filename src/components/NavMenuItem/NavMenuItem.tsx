import React, { FC } from "react";

import type { NavMenuItemProps } from "../../types";

import * as styles from "./NavMenuItem.module.css";

const NavMenuItem: FC<NavMenuItemProps> = ({ href, text, tabIndex }) => {
    return (
        <li className={styles.item}>
            <a tabIndex={tabIndex} href={href} className={styles.itemLink}>
                {text}
            </a>
        </li>
    );
};

export default NavMenuItem;
