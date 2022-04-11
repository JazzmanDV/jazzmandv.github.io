import { Dispatch, SetStateAction } from "react";

type NavMenuProps = {
    isNavMenuOpened: boolean;
    navMenuItems: Array<NavMenuItemProps>;
};

type NavMenuItemProps = {
    href: string;
    text: string;
    tabIndex?: number;
};

type NavButtonProps = {
    isNavMenuOpened: boolean;
    setIsNavMenuOpened: Dispatch<SetStateAction<boolean>>;
};

type ExternalLinkProps = {
    className?: string;
    href: string;
};

export type { NavMenuProps, NavMenuItemProps, NavButtonProps, ExternalLinkProps };
