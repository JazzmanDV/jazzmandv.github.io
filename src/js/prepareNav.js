import smoothScrollTo from "./utils/smoothScrollTo.js";
import closeNavMenu from "./utils/closeNavMenu.js";
import openNavMenu from "./utils/openNavMenu.js";

export default function prepareNav() {
    document.querySelector(".nav__button").addEventListener("click", () => {
        const navMenu = document.querySelector(".nav__menu");

        if (navMenu.classList.contains("nav__menu--opened")) {
            closeNavMenu();
        } else {
            openNavMenu();
        }
    });

    document.querySelectorAll(".nav__item-link").forEach((navLink) => {
        navLink.addEventListener("click", (e) => {
            e.preventDefault();

            const id = navLink.href.split("#")[1];
            if (!id) {
                return;
            }

            closeNavMenu();
            smoothScrollTo(id);
        });
    });
}
