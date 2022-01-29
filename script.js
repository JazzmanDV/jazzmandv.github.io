function checkLastInARow() {
    const lists = document.querySelectorAll(".inner-skills-list");

    for (let list of lists) {
        const listItems = list.querySelectorAll(".inner-skills-list__item");
        const rows = new Map();

        for (let listItem of listItems) {
            // Сравниваем по нижней части компонента (по скилл-бару), т.к. они выровнены в линию
            const skillLevel = listItem.querySelector(".bullet-list");
            if (!rows.has(skillLevel.offsetTop)) {
                rows.set(skillLevel.offsetTop, []);
            }
            rows.get(skillLevel.offsetTop).push(listItem);
        }

        for (let row of rows.values()) {
            for (let element of row) {
                element.classList.remove("inner-skills-list__item--hidden-separator");
            }
            row[row.length - 1].classList.add("inner-skills-list__item--hidden-separator");
        }
    }
}

function onDocumentReady() {
    checkLastInARow();
    window.addEventListener("resize", checkLastInARow);

    // Сбрасываем стили для верхнего меню при ресайзе
    const mediaQuery = window.matchMedia("(max-width: 770px)");
    mediaQuery.addEventListener("change", () => {
        if (!mediaQuery.matches) {
            const navMenu = document.querySelector(".nav__menu");
            navMenu.style.height = "";
            navMenu.classList.remove("nav__menu--opened");
        }
    });

    const swiper = new Swiper(".my-swiper", {
        grabCursor: true,
        spaceBetween: 1,
        navigation: {
            prevEl: ".my-swiper-button-prev",
            nextEl: ".my-swiper-button-next",
            disabledClass: "my-swiper-button--disabled",
        },
        pagination: {
            el: ".swiper__bullet-list",
            clickable: true,
            bulletClass: "bullet-list__item swiper__bullet-list-item",
            bulletActiveClass: "bullet-list__item--active",
        },
    });

    document.querySelectorAll(".my-inner-swiper-wrapper__expand-swiper-button").forEach((button) => {
        button.addEventListener("click", () => {
            const body = document.querySelector("body");
            const outerSwiperWrapper = button.closest(".my-outer-swiper-wrapper");

            const replacer = body.appendChild(outerSwiperWrapper.cloneNode(true));

            const swiper = new Swiper(replacer.querySelector(".my-swiper"), {
                initialSlide: outerSwiperWrapper.querySelector(".my-swiper").swiper.activeIndex,
                grabCursor: true,
                spaceBetween: 1,
                navigation: {
                    prevEl: replacer.querySelector(".my-swiper-button-prev"),
                    nextEl: replacer.querySelector(".my-swiper-button-next"),
                    disabledClass: "my-swiper-button--disabled",
                },
                pagination: {
                    el: replacer.querySelector(".swiper__bullet-list"),
                    clickable: true,
                    bulletClass: "bullet-list__item swiper__bullet-list-item",
                    bulletActiveClass: "bullet-list__item--active",
                },
            });

            body.classList.add("body--full-screen");
            replacer.classList.add("my-outer-swiper-wrapper--full-screen");

            replacer.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").addEventListener("click", () => {
                body.classList.remove("body--full-screen");

                // Необходимо для работы обратной анимации модалки
                replacer.classList.remove("my-outer-swiper-wrapper--full-screen");
                requestAnimationFrame(() => {
                    replacer.classList.add("my-outer-swiper-wrapper--full-screen");
                    replacer.style.animationDirection = "reverse";
                    replacer.querySelector(".my-middle-swiper-wrapper").style.animationDirection = "reverse";
                });

                setTimeout(() => {
                    swiper.destroy();
                    body.removeChild(replacer);
                }, 500);
            });
        });
    });

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

    document.querySelectorAll(".button-try").forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("button-try--active");
        });
    });

    document.querySelectorAll(".nav__item-link").forEach((navLink) => {
        navLink.addEventListener("click", (e) => {
            e.preventDefault();
            const id = navLink.href.split("#")[1];
            if (id) {
                const navMenu = document.querySelector(".nav__menu");
                navMenu.classList.remove("nav__menu--opened");
                navMenu.style.height = "";

                const distanceToAnchor = document.querySelector(`#${id}`).getBoundingClientRect().top + window.scrollY;
                const mainOffset = document.querySelector(".main").offsetTop;
                const y = distanceToAnchor - mainOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });
}

if (document.readyState === "complete") {
    onDocumentReady();
} else {
    window.addEventListener("load", () => {
        onDocumentReady();
    });
}
