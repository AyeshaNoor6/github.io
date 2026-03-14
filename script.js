// ---------------- Smooth Scroll for Navbar ----------------
const navLinks = document.querySelectorAll('#navigation a[href^="#"]'); // Only links to sections

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection){
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ---------------- Active Navbar Link on Scroll ----------------
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
    let scrollPos = window.scrollY + window.innerHeight / 3;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`#navigation a[href="#${id}"]`);
        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(l => l.classList.remove('active'));
            if(navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ---------------- Active Navbar on Hover of Sections ----------------
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        const id = section.getAttribute('id');
        navLinks.forEach(l => l.classList.remove('active'));
        const navLink = document.querySelector(`#navigation a[href="#${id}"]`);
        if(navLink) navLink.classList.add('active');
    });
});

// ---------------- Optional: Dynamic Balloon Creation ----------------
const balloonContainer = document.querySelector('.balloons-container');
const colors = ['#ff4d88','#ffcc00','#66ccff','#ff66cc','#66ff99'];

// Only if you want more balloons dynamically
for(let i=0; i<5; i++){
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Create string
    const stringDiv = document.createElement('div');
    stringDiv.classList.add('string');
    balloon.appendChild(stringDiv);

    balloon.style.left = Math.random() * 90 + '%';
    balloon.style.background = colors[Math.floor(Math.random()*colors.length)];
    balloon.style.animationDuration = 8 + Math.random()*5 + 's';
    balloon.style.animationDelay = Math.random()*5 + 's';

    if(balloonContainer) balloonContainer.appendChild(balloon);
}