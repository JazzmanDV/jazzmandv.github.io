import React from "react";

const NavButton = () => {
    return (
        <button className="button button-square nav__button" tabIndex={1}>
            <span className="nav__button-line"></span>
            <span className="nav__button-line"></span>
            <span className="nav__button-line"></span>
        </button>
    );
};

export default NavButton;
