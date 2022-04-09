import prepareExpandSwiperButton from "./prepareExpandSwiperButton.js";

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
        prepareExpandSwiperButton(button);
    });
}
