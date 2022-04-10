import React, { FC } from "react";

import { NavMenuItemProps } from "../../../../../types";

import * as styles from "./NavMenuItem.module.css";

const NavMenuItem: FC<NavMenuItemProps> = ({ href, text, tabIndex }) => {
    return (
        <li className={styles.item}>
            <a className={styles.link} href={`#${href}`} tabIndex={tabIndex}>
                {text}
            </a>
        </li>
    );
};

export default NavMenuItem;
