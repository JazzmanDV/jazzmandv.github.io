import "/src/swiper/swiper.js";
import "/src/swiper/swiper.css";

import onDocumentReady from "./onDocumentReady.js";

if (document.readyState === "complete") {
    onDocumentReady();
} else {
    window.addEventListener("load", () => {
        onDocumentReady();
    });
}
