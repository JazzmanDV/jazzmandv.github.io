import React, { FC } from "react";
import classnames from "classnames";

import type { ExternalLinkProps } from "../../types";

import * as styles from "./ExternalLink.module.css";

const ExternalLink: FC<ExternalLinkProps> = ({ className, href, children }) => {
    return (
        <a className={classnames(styles.link, className)} href={href} target="_blank">
            {children}
        </a>
    );
};

export default ExternalLink;
