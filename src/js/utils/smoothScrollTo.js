export default function smoothScrollTo(id) {
    const target = document.querySelector(`#${id}`);
    if (!target) {
        return;
    }

    const distanceToAnchor = target.getBoundingClientRect().top + window.scrollY;
    const mainOffset = document.querySelector(".main").offsetTop;
    const y = distanceToAnchor - mainOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
}
