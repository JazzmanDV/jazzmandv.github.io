import smoothScrollTo from "./utils/smoothScrollTo.js";

export default function prepareInternalLinks() {
    document.querySelectorAll(".link-internal").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const id = link.href.split("#")[1];
            if (!id) {
                return;
            }

            smoothScrollTo(id);
        });
    });
}
