//header image
const header = document.querySelector('#header-banner');
//global fade-in-on-scroll settings
AOS.init({
  delay: 100,
  offset: 100,
  duration: 700,
});
//parallax header effect
window.addEventListener('scroll', (e) => {
  const scrolled = -e.pageY * 0.25;
  header.setAttribute("style", "transform: translate3d(0px, " + scrolled + "px, 0px)");
})

const banner = document.querySelector('#header-banner');
const psudoBanner = document.querySelector('#header-psudo-banner');

//initialize header based on user device
window.innerWidth <= 960 && psudoBanner.setAttribute('src', 'images/jl-header-mobile.jpg');

//change header ratio on window resize
window.addEventListener('resize', () => {
  if(window.innerWidth <= 960) {
    banner.setAttribute('src', 'images/jl-header-mobile.jpg')
    psudoBanner.setAttribute('src', 'images/jl-psudo-header-mobile.png')
  }
  else {
    banner.setAttribute('src', 'images/jl-header.jpg')
    psudoBanner.setAttribute('src', 'images/jl-psudo-header.png')
  }
})
