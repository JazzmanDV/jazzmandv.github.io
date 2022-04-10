import React, { FC } from "react";

import * as styles from "./Footer.module.css";

import ExternalLink from "../ExternalLink/ExternalLink";
import GithubIcon from "./github.inline.svg";
import EmailIcon from "./email.inline.svg";

const Footer: FC = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footerContent}>
                <div>
                    <span>За иконки спасибо </span>
                    <ExternalLink href={"https://icons8.com/"}>icons8</ExternalLink>
                </div>

                <ExternalLink href={"https://github.com/JazzmanDV"} className={styles.linkFlex}>
                    <span>Мой профиль на GitHub:</span>
                    <GithubIcon className={styles.icon} />
                </ExternalLink>

                <ExternalLink href={"mailto:danapple2013@gmail.com"} className={styles.linkFlex}>
                    <span>Мой email: danapple2013@gmail.com</span>
                    <EmailIcon className={styles.icon} />
                </ExternalLink>
            </div>
        </footer>
    );
};

export default Footer;
