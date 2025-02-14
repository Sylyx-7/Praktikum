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

  function updateClock() {
    const clockElemnet = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); 

    hours = hours <10 ? '0' + hours : hours;
    minutes = minutes <10 ? + minutes : minutes;
    seconds = seconds <10 ? + seconds : seconds;


  const timeString = `${hours}:${minutes}.${seconds}`;
  clockElemnet.textContent = timeString;
  }

  setInterval(updateClock, 1000);

  updateClock();