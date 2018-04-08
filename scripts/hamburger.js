//grab hamburger and navigation icons
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('.nav-links');

//toggle hamburger menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  $('.bio-link').toggleClass('animated fadeInUp');
})
