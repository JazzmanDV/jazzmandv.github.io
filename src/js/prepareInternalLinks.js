import { smoothScrollToId } from "./utils/scroll.js";

export default function prepareInternalLinks() {
    document.querySelectorAll(".link-internal").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const id = link.href.split("#")[1];
            if (!id) {
                return;
            }

            smoothScrollToId(id);
        });
    });
}
