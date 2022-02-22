export default function checkLastInARow() {
    const lists = document.querySelectorAll(".list-for-check");

    for (let list of lists) {
        const listItems = list.querySelectorAll(".inner-skills-list__item");
        const rows = new Map();

        for (let listItem of listItems) {
            const distanceFromTopDocumentToBottomElement = listItem.getBoundingClientRect().bottom + window.scrollY;
            if (!rows.has(distanceFromTopDocumentToBottomElement)) {
                rows.set(distanceFromTopDocumentToBottomElement, []);
            }
            rows.get(distanceFromTopDocumentToBottomElement).push(listItem);
        }

        for (let row of rows.values()) {
            for (let element of row) {
                element.classList.remove("inner-skills-list__item--hidden-separator");
            }
            row[row.length - 1].classList.add("inner-skills-list__item--hidden-separator");
        }
    }
}
