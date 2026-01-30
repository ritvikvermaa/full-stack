const textarea = document.getElementById("textInput");
const currentCount = document.getElementById("currentCount");
const counterBox = document.querySelector(".counter");

const maxLength = textarea.maxLength;

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    currentCount.textContent = length;

    // Visual feedback
    if (length > maxLength * 0.8) {
        counterBox.classList.add("warning");
        counterBox.classList.remove("danger");
    }

    if (length === maxLength) {
        counterBox.classList.add("danger");
        counterBox.classList.remove("warning");
    }

    if (length < maxLength * 0.8) {
        counterBox.classList.remove("warning", "danger");
    }
});
