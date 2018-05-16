const modal = document.querySelector('#animatedModal');
const slides = document.querySelectorAll('.fade-up');

const fadeUp = () => {
  slides.forEach(slide => {
    const slideInAt = (modal.scrollTop + modal.clientHeight) - slide.offsetHeight / 2;
    const isHalfShown = slideInAt > slide.getBoundingClientRect().top + modal.scrollTop;
    const isVisible = slide.classList.contains('lazy-loaded');

    if(isHalfShown && isVisible)
      slide.classList.remove('fade-up')
  })
}

modal.addEventListener('scroll', debounce(fadeUp));
