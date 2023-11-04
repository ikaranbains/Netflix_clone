const button = document.getElementById("accept");
const disclaimer = document.getElementById("disclaimer");
const overlay = document.getElementById("overlay");

function preventInteraction(event) {
    event.stopPropagation(); // Prevent clicks on the overlay from reaching underlying elements
}

button.addEventListener("click", function () {
    button.classList.toggle("animate");

    if (button.matches(".animate")) {
        button.innerHTML = `<i class="ri-thumb-up-fill"></i>`;
    }
    else {
        button.innerHTML = `<i class="ri-thumb-up-line"></i>`;
    }


    disclaimer.style.animation = "fadeOut ease 900ms";
    overlay.removeEventListener("click", preventInteraction);

    setTimeout(() => {
        disclaimer.style.display = "none";
        overlay.style.display = "none";
    }, 800)
})

window.addEventListener("load", () => {
    disclaimer.style.display = "block";
    disclaimer.style.animation = "fadeIn ease 500ms";
    overlay.style.display = "block";
    overlay.addEventListener("click", preventInteraction);
})