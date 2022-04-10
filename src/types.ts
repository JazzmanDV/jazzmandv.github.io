type NavMenuProps = {
    navMenuItems: Array<NavMenuItemProps>;
};

type NavMenuItemProps = {
    href: String;
    text: String;
    tabIndex?: number;
};

export { NavMenuProps, NavMenuItemProps };
