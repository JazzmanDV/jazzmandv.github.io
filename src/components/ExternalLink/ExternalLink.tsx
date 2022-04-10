import React, { FC } from "react";
import classnames from "classnames";

import * as styles from "./ExternalLink.module.css";

import { ExternalLinkProps } from "../../types";

const ExternalLink: FC<ExternalLinkProps> = ({ className, href, children }) => {
    return (
        <a className={classnames(styles.link, className)} href={href} target="_blank">
            {children}
        </a>
    );
};

export default ExternalLink;
