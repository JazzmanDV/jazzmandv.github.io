import checkLastInARow from "./checkLastInARow.js";
import addMediaQueryCleaners from "./addMediaQueryCleaners.js";
import prepareSwiper from "./prepareSwiper.js";
import prepareNav from "./prepareNav.js";
import prepareInternalLinks from "./prepareInternalLinks.js";
import prepareButtonTry from "./prepareButtonTry.js";

export default function onDocumentReady() {
    checkLastInARow();
    window.addEventListener("resize", checkLastInARow);

    addMediaQueryCleaners();

    prepareSwiper();
    prepareNav();
    prepareInternalLinks();
    prepareButtonTry();
}
