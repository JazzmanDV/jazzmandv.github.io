function checkLastInARow() {
    const lists = document.querySelectorAll(".inner-skills-list");

    for (let list of lists) {
        const listItems = list.querySelectorAll(".inner-skills-list__item");
        const rows = new Map();

        for (let listItem of listItems) {
            // Сравниваем по нижней части компонента (по скилл-бару), т.к. они выровнены в линию
            const skillLevel = listItem.querySelector(".skill-level");
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
    const swiper = new Swiper(".my-swiper", {
        grabCursor: true,
        spaceBetween: 1,
        navigation: {
            prevEl: ".my-swiper-button-prev",
            nextEl: ".my-swiper-button-next",
            disabledClass: "my-swiper-button--disabled",
        },
        pagination: {
            el: ".my-swiper-pagination",
            clickable: true,
            bulletClass: "my-swiper-pagination-bullet",
            bulletActiveClass: "my-swiper-pagination-bullet--active",
        },
    });

    checkLastInARow();
    window.addEventListener("resize", checkLastInARow);

    document.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").addEventListener("click", () => {
        const body = document.querySelector("body");
        const outerSwiperWrapper = document.querySelector(".my-outer-swiper-wrapper");

        const replacer = body.appendChild(outerSwiperWrapper.cloneNode(true));

        const swiper = new Swiper(replacer.querySelector(".my-swiper"), {
            initialSlide: outerSwiperWrapper.querySelector(".my-swiper").swiper.activeIndex,
            grabCursor: true,
            // autoplay: {},
            // mousewheel: {},
            spaceBetween: 1,
            navigation: {
                prevEl: replacer.querySelector(".my-swiper-button-prev"),
                nextEl: replacer.querySelector(".my-swiper-button-next"),
                disabledClass: "my-swiper-button--disabled",
            },
            pagination: {
                el: replacer.querySelector(".my-swiper-pagination"),
                clickable: true,
                bulletClass: "my-swiper-pagination-bullet",
                bulletActiveClass: "my-swiper-pagination-bullet--active",
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
                body.removeChild(replacer);
            }, 500);
        });
    });

    document.querySelector(".nav__button").addEventListener("click", () => {
        document.querySelector(".nav__menu").classList.toggle("nav__menu--opened");
    });

    document.querySelector(".button-try").addEventListener("click", () => {
        document.querySelector(".button-try").classList.toggle("button-try--active");
    });
}

if (document.readyState === "complete") {
    onDocumentReady();
} else {
    window.addEventListener("load", () => {
        onDocumentReady();
    });
}
