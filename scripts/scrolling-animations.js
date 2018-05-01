//header image
const header = document.querySelector('#header-banner');
const banner = document.querySelector('#header-banner');
const psudoBanner = document.querySelector('#header-psudo-banner');
const bsmBanner = document.querySelector('#bsm-header-image');

//initialize header based on user device
window.innerWidth <= 960 && psudoBanner.setAttribute('src', 'images/jl-header-mobile.jpg');
//initialize BSM header based on user device
bsmBanner.setAttribute('src', 'images/modal-images/bsm/bsm-header-mobile.png');

const scroll = (e) => {
  const scrolled = -e.pageY * 0.25;
  header.setAttribute("style", "transform: translate3d(0px, " + scrolled + "px, 0px)");
}

const resize = () => {
  if(window.innerWidth <= 960) {
    //main page banner
    banner.setAttribute('src', 'images/jl-header-mobile.jpg')
    //bsm banner
    bsmBanner.setAttribute('src', 'images/modal-images/bsm/bsm-header-mobile.png')
    psudoBanner.setAttribute('src', 'images/jl-psudo-header-mobile.png')

  }
  else {
    banner.setAttribute('src', 'images/jl-header.jpg')
    bsmBanner.setAttribute('src', 'images/modal-images/bsm/BSM Header Bar (2560x800).jpg')
    psudoBanner.setAttribute('src', 'images/jl-psudo-header.png')
  }
}

function debounce(func, wait = 5, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  //change header ratio on window resize
  window.addEventListener('resize', debounce(resize));

  //parallax header effect
  window.addEventListener('scroll', debounce(scroll));
