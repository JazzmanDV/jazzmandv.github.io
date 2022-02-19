export default function checkLastInARow() {
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
