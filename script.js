function checkLastInARow() {
    const lists = document.querySelectorAll(".inner-skills-list");

    for (let list of lists) {
        const listItem = list.querySelectorAll(".inner-skills-list__item");
        const rows = new Map();

        for (let element of listItem) {
            if (!rows.has(element.offsetTop)) {
                rows.set(element.offsetTop, []);
            }
            rows.get(element.offsetTop).push(element);
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

    document.querySelector(".my-middle-swiper-wrapper__expand-swiper-button").addEventListener("click", () => {
        const outerSwiperWrapper = document.querySelector(".my-outer-swiper-wrapper");
        outerSwiperWrapper.classList.toggle("my-outer-swiper-wrapper--full-screen");
    });
}

if (document.readyState === "complete") {
    onDocumentReady();
} else {
    window.addEventListener("load", () => {
        onDocumentReady();
    });
}
