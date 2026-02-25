// Button Alert
function showMessage() {
    alert("Thanks for visiting my portfolio 😊");
}

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
    let sections = document.querySelectorAll(".reveal");

    for (let i = 0; i < sections.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = sections[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            sections[i].classList.add("active");
        }
    }
}
// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Icon change
    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }
});
function toggleCert(id) {
    const cert = document.getElementById(id);
    cert.classList.toggle("show");
}
function toggleCert(id) {
    document.getElementById(id).classList.toggle("show");
}function toggleProject(id) {
    document.getElementById(id).classList.toggle("show");
}