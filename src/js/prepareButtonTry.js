export default function prepareButtonTry() {
    document.querySelectorAll(".button-try").forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("button-try--active");
        });
    });
}
