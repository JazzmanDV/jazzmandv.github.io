export function smoothScrollToId(id) {
    const target = document.querySelector(`#${id}`);

    if (!target) {
        return;
    }

    const distanceToAnchor = target.getBoundingClientRect().top + window.scrollY;
    const mainOffset = document.querySelector(".main").offsetTop;
    const y = distanceToAnchor - mainOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
}

export function lockScroll() {
    const x = window.scrollX;
    const y = window.scrollY;

    window.onscroll = () => {
        window.scrollTo(x, y);
    };
}

export function unlockScroll() {
    window.onscroll = null;
}
