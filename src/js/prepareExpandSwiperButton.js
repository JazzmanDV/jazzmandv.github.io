import { lockScroll, unlockScroll } from "./utils/scroll.js";

export default function prepareExpandSwiperButton(button) {
    button.addEventListener("click", () => {
        lockScroll();

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

            unlockScroll();

            setTimeout(() => {
                newSwiper.destroy();
                body.removeChild(replacer);
            }, 500);
        }

        replacer.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").addEventListener("click", minimize);

        const backgroundLayer = replacer.closest(".my-outer-swiper-wrapper");
        backgroundLayer.addEventListener("click", (e) => {
            if (e.target === backgroundLayer) {
                minimize();
            }
        });
    });
}
