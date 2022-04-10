type NavMenuProps = {
    navMenuItems: Array<NavMenuItemProps>;
};

type NavMenuItemProps = {
    href: string;
    text: string;
    tabIndex?: number;
};

type ExternalLinkProps = {
    className?: string;
    href: string;
};

export { NavMenuProps, NavMenuItemProps, ExternalLinkProps };
