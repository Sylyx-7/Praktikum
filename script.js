function toggleMenu() {
let menu = document.getElementById("navLinks");
menu.classList.toggle("show");
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
}); 