function toggleMenu() {
  let menu = document.getElementById("navLinks");
  menu.classList.toggle("show");
}

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', function() {
    const description = this.previousElementSibling;
    const isVisible = description.style.display === 'block';

    description.style.display = isVisible ? 'none' : 'block';
    this.textContent = isVisible ? 'Mehr anzeigen' : 'Weniger anzeigen';
  });
});


function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = timeString;
}

d
setInterval(updateClock, 1000);
updateClock();


window.onscroll = function() {
  updateProgressBar();
};

function updateProgressBar() {
  const scrollPosition = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / pageHeight) * 100;

  const progressBar = document.getElementById('progress-bar');
  progressBar.style.height = scrollPercentage + '%';
}


console.log("Willkommen auf meinem Portfolio");

setTimeout(() => {
  console.log("Schön dich hier zu sehen");
}, 2000);


const navItems = ["Startseite", "Über mich", "Kontakt"];
const nav = document.getElementById("navigation");

navItems.forEach(item => {
  const link = document.createElement("a");
  link.href = "#"; 
  link.textContent = item;
  nav.appendChild(link);
});


const email = "lisaweber@webentwicklerin.de";
const emailLink = document.createElement("a");
emailLink.href = "mailto:" + email;
emailLink.textContent = email;
document.getElementById("emailLink").appendChild(emailLink);


document.getElementById('kategorieFilter').addEventListener('change', function() {
  const filterValue = this.value;
  const projects = document.querySelectorAll('.projekt');

  projects.forEach(project => {
    const projectCategory = project.getAttribute('data-category');
    
   
    project.style.display = (filterValue === 'all' || filterValue === projectCategory) ? 'block' : 'none';
  });
});


function smoothScroll() {
  document.getElementById("ziel").scrollIntoView({ 
    behavior: "smooth", 
    block: "start" 
  });
}


fetch('projekt.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projekt-container');
    container.innerHTML = ''; 
    
    data.forEach(projekt => {
      const div = document.createElement('div');
      div.classList.add('projekt');
      div.innerHTML = `
        <h2>${projekt.name}</h2>
        <a href="${projekt.link}" target="_blank">Projekt-Link</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Fehler beim Laden der JSON:', error);
    document.getElementById('projekt-container').innerText = "Das Projekt konnte nicht geladen werden.";
  });


const testimonials = [
  { text: '"Super Portfolio!"', author: "- Giulia H." }
];
let index = 0;

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  document.getElementById("feedback").textContent = testimonials[index].text;
  document.getElementById("author").textContent = testimonials[index].author;
}


document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;

  console.log("Name:", nameValue);
  console.log("E-Mail:", emailValue);

  let data = {
    name: nameValue,
    email: emailValue
  };
  console.log("JSON-Daten:", JSON.stringify(data)); 
});
