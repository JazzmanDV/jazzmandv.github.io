export default function openNavMenu() {
    const navMenu = document.querySelector(".nav__menu");

    navMenu.style.height = "auto";
    const fullHeight = getComputedStyle(navMenu).height;
    navMenu.style.height = "0px";

    requestAnimationFrame(() => {
        navMenu.style.height = fullHeight;
    });

    navMenu.classList.add("nav__menu--opened");
}
