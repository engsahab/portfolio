// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Initialize EmailJS
emailjs.init("EsSgBwAkeL21VOtB3");

// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_vd3muis', 'template_bejbb2z', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    })
    .catch(err => alert('Failed to send message: ' + JSON.stringify(err)));
});

// Animate skill bars
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if(position < screenPosition) {
      skill.style.width = skill.style.getPropertyValue('--skill-width');
    }
  });
});
