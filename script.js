function toggleMenu() {
let menu = document.getElementById("navLinks");
menu.classList.toggle("show");
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


document.querySelectorAll('.toggle-btn').forEach(button => {
button.addEventListener('click', function() {
const description = this.previousElementSibling;
const isVisible = description.style.display === 'block';

if (isVisible) {
description.style.display = 'none';
this.textContent = 'Mehr anzeigen';
} else {
description.style.display = 'block';
this.textContent = 'Weniger anzeigen';
      }
    });
  });