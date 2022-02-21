export default function prepareNav() {
    document.querySelector(".nav__button").addEventListener("click", () => {
        const navMenu = document.querySelector(".nav__menu");
        navMenu.classList.toggle("nav__menu--opened");

        if (navMenu.classList.contains("nav__menu--opened")) {
            navMenu.style.height = "auto";
            const fullHeight = getComputedStyle(navMenu).height;
            navMenu.style.height = "0px";

            requestAnimationFrame(() => {
                navMenu.style.height = fullHeight;
            });
        } else {
            navMenu.style.height = "0px";
        }
    });

    document.querySelectorAll(".nav__item-link").forEach((navLink) => {
        navLink.addEventListener("click", (e) => {
            e.preventDefault();
            const id = navLink.href.split("#")[1];
            if (id) {
                const navMenu = document.querySelector(".nav__menu");
                navMenu.style.height = "";
                navMenu.classList.remove("nav__menu--opened");

                const distanceToAnchor = document.querySelector(`#${id}`).getBoundingClientRect().top + window.scrollY;
                const mainOffset = document.querySelector(".main").offsetTop;
                const y = distanceToAnchor - mainOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });
}
