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

if (document.readyState === "complete") {
    checkLastInARow();
    window.addEventListener("resize", checkLastInARow);
} else {
    window.addEventListener("load", () => {
        checkLastInARow();
        window.addEventListener("resize", checkLastInARow);
    });
}
