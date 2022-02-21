import "/src/swiper/swiper.js";

import onDocumentReady from "./onDocumentReady.js";

if (document.readyState === "complete") {
    onDocumentReady();
} else {
    window.addEventListener("load", () => {
        onDocumentReady();
    });
}
