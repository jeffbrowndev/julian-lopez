const projects = Array.from(document.querySelectorAll('.overlay'));
const backgrounds = Array.from(document.querySelectorAll('.box-background'));

projects.map(function(project) {
  project.addEventListener('mouseenter', function(){
    this.classList.add('active');
    this.previousElementSibling.classList.add('active');
  })
  project.addEventListener('mouseleave', function(){
    this.classList.remove('active');
    this.previousElementSibling.classList.remove('active');
  })
})
