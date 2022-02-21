export default function closeNavMenu() {
    const navMenu = document.querySelector(".nav__menu");
    navMenu.style.height = "";
    navMenu.classList.remove("nav__menu--opened");
}
