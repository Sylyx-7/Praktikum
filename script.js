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
        
setTimeout(function() {
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
const link = document.createElement("a");
link.href = "mailto:" + email;
link.textContent = email;
document.getElementById("emailLink").appendChild(link);


document.getElementById('kategorieFilter').addEventListener('change', function() {
  const filterValue = this.value;
  const projects = document.querySelectorAll('.projekt');
       
   projects.forEach(function(project) {
   const projectCategory = project.getAttribute('data-category');
           
   if (filterValue === 'all' || filterValue === projectCategory) {
   project.style.display = 'block'; 
   } else {
   project.style.display = 'none';
   }
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
            <a href="${projekt.link}" "target= _blank"></a>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Fehler beim Laden der JSON:', error);
        document.getElementById('projekt-container').innerText = "Das Projekt konnte nicht geladen werden.";
    });



    const testimonials = [
      { text: '"Super Portfolio!"', author: "- Giulia H."}
    ];
    let index = 0;
    function nextTestimonial () {
      index = (index + 1) % testimonials.length;
      document.getElementById("feedback").textContent = testimonials[index].text
      document.getElementById("author").textContent = testimonials[author].text
    }


    document.getElementById("form").onsubmit = function(event){
      event.preventDeafault();
  
      let data = {
        name : document.getElementById("name").value,
        password : document.getElementById("password").value
      };
      console.log(JSON.stringfy(data));
    };



    window.onscroll = function() { updateProgress()};

    function updateProgress(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollPercent = (scrollTop / scrollHeight) * 10;
      document.getElementById("progressBar").style.height = scrollPercent + "1%";
    }