import { Dispatch, SetStateAction } from "react";

type NavMenuProps = {
    isOpened: boolean;
    navMenuItems: Array<NavMenuItemProps>;
};

type NavMenuItemProps = {
    href: string;
    text: string;
    tabIndex?: number;
};

type NavButtonProps = {
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
};

type ExternalLinkProps = {
    className?: string;
    href: string;
};

export type { NavMenuProps, NavMenuItemProps, NavButtonProps, ExternalLinkProps };
