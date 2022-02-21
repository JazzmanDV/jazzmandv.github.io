import closeNavMenu from "./utils/closeNavMenu.js";

export default function addMediaQueryCleaners() {
    // Сбрасываем стили для верхнего меню при увеличении ширины экрана
    const mediaQueryMaxWidth770 = window.matchMedia("(max-width: 770px)");
    mediaQueryMaxWidth770.addEventListener("change", () => {
        if (!mediaQueryMaxWidth770.matches) {
            closeNavMenu();
        }
    });

    // Удаляем развернутый на весь экран слайдер при уменьшении ширины экрана
    const mediaQueryMaxWidth1000 = window.matchMedia("(max-width: 1000px)");
    mediaQueryMaxWidth1000.addEventListener("change", () => {
        if (mediaQueryMaxWidth1000.matches) {
            const swiperWrapper = document.querySelector(".my-outer-swiper-wrapper--full-screen");
            if (swiperWrapper) {
                swiperWrapper.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").click();
            }
        }
    });
}
