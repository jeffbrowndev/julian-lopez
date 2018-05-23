const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('display');
})

console.log('testing');
