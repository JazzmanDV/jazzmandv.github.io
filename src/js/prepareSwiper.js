export default function prepareSwiper() {
    document.querySelectorAll(".my-outer-swiper-wrapper").forEach((swiperWrapper) => {
        new Swiper(swiperWrapper.querySelector(".my-swiper"), {
            grabCursor: true,
            spaceBetween: 1,
            navigation: {
                prevEl: swiperWrapper.querySelector(".my-swiper-button-prev"),
                nextEl: swiperWrapper.querySelector(".my-swiper-button-next"),
                disabledClass: "my-swiper-button--disabled",
            },
            pagination: {
                el: swiperWrapper.querySelector(".swiper__bullet-list"),
                clickable: true,
                bulletClass: "bullet-list__item swiper__bullet-list-item",
                bulletActiveClass: "bullet-list__item--active",
            },
        });
    });

    document.querySelectorAll(".my-inner-swiper-wrapper__expand-swiper-button").forEach((button) => {
        button.addEventListener("click", () => {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;

            const disableScroll = () => {
                window.scrollTo({
                    left: scrollX,
                    top: scrollY,
                    behavior: "instant",
                });
            };

            window.addEventListener("scroll", disableScroll, { passive: false });

            const body = document.querySelector("body");
            const outerSwiperWrapper = button.closest(".my-outer-swiper-wrapper");

            const replacer = body.appendChild(outerSwiperWrapper.cloneNode(true));

            const oldSwiper = outerSwiperWrapper.querySelector(".my-swiper").swiper;

            const newSwiper = new Swiper(replacer.querySelector(".my-swiper"), {
                initialSlide: oldSwiper.activeIndex,
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

            replacer.classList.add("my-outer-swiper-wrapper--full-screen");

            function minimize() {
                oldSwiper.slideTo(newSwiper.activeIndex, 0);
                replacer.classList.add("my-outer-swiper-wrapper--full-screen-out");

                window.removeEventListener("scroll", disableScroll);

                setTimeout(() => {
                    newSwiper.destroy();
                    body.removeChild(replacer);
                }, 500);
            }

            replacer.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").addEventListener("click", () => {
                minimize();
            });

            const backgroundLayer = replacer.closest(".my-outer-swiper-wrapper");
            backgroundLayer.addEventListener("click", (e) => {
                if (e.target === backgroundLayer) {
                    minimize();
                }
            });
        });
    });
}
