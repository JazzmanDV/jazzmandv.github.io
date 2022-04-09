import prepareSwiperWrapper from "./prepareSwiperWrapper.js";
import prepareExpandSwiperButton from "./prepareExpandSwiperButton.js";

export default function prepareSwiper() {
    document.querySelectorAll(".my-outer-swiper-wrapper").forEach((swiperWrapper) => {
        prepareSwiperWrapper(swiperWrapper);
    });

    document.querySelectorAll(".my-inner-swiper-wrapper__expand-swiper-button").forEach((button) => {
        prepareExpandSwiperButton(button);
    });
}
