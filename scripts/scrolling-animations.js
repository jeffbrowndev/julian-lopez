//header image
const header = document.querySelector('#header-banner');
const banner = document.querySelector('#header-banner');
const psudoBanner = document.querySelector('#header-psudo-banner');
const modal = document.querySelector('#animatedModal');
const slides = document.querySelectorAll('.fade-up');
const fadeItems = document.querySelectorAll('.fade-item');

AOS.init({
   offset: 100,
   duration: 500,
   delay: 100,
 });

//initialize header based on user device
window.innerWidth <= 960 && psudoBanner.setAttribute('src', 'images/jl-header-mobile.jpg');
//initialize BSM header based on user device
// window.innerWidth <= 960 && bsmBanner.setAttribute('src', 'images/modal-images/bsm/bsm-header-mobile.png');

const scroll = (e) => {
  //parallax header effect
  const scrolled = -$(window).scrollTop() * 0.25;
  header.setAttribute("style", "transform: translate3d(0px, " + scrolled + "px, 0px)");
}

const resize = () => {
  if(window.innerWidth <= 960) {
    banner.setAttribute('src', 'images/jl-header-mobile.jpg')
    psudoBanner.setAttribute('src', 'images/jl-psudo-header-mobile.png')
  }
  else {
    banner.setAttribute('src', 'images/jl-header.jpg')
    psudoBanner.setAttribute('src', 'images/jl-psudo-header.png')
  }
}

const fadeUp = () => {
  slides.forEach(slide => {
    const slideInAt = (modal.scrollTop + modal.clientHeight) - slide.offsetHeight * .25;
    const isHalfShown = slideInAt > slide.getBoundingClientRect().top + modal.scrollTop;
    const isVisible = slide.classList.contains('lazy-loaded');

    if(isHalfShown && isVisible) {
      slide.classList.remove('fade-up');
      slide.classList.remove('bottom-image');
    }
    else {
      slide.classList.add('fade-up');
      if (slide.classList.contains('fade-in-only'))
        slide.classList.add('bottom-image');
    }
  })
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

  modal.addEventListener('scroll', debounce(fadeUp));

  //change header ratio on window resize
  window.addEventListener('resize', debounce(resize));

  //parallax header effect
  window.addEventListener('scroll', debounce(scroll));

  //using jquery for smooth scroll as it has much better browser support
  $(document).ready(() => {
    //smooth scroll functionality
    $('nav a').on('click', function(e) {
      //set smooth scroll offset based on user device
      const offset = window.innerWidth <= 500 ? 59 : 75;
      //grab clicked link destination
      let dest = $(this).attr('href');
      //prevent page reload
      e.preventDefault();
      //scroll to destination, leave 76px of room for sticky nav
      $("html, body").animate({
        scrollTop: $(dest).offset().top - offset + 'px'
      }, 500);
      //close menu if a page link is clicked
      $('.nav-links').removeClass('display');
      $('.menu-button').removeClass('active');
    })

    let mobile = window.innerWidth <= 500;
    //change nav button highlights on page resize
    window.addEventListener('resize', () => {
      mobile = window.innerWidth <= 500;
      mobile ? $('.link').css('color', 'white') : highlight();
    })
    //initialize home link highlight on page load
    if(!mobile)
      $('.home-link').css('color', '#3498D1')
    //highlight nav buttons based on scroll position
    $(window).on('scroll', function() {
      //only use link highlighting in desktop mode
      !mobile && highlight();
    })
  })

  const highlight = () => {
    const dist = $(window).scrollTop();
    const top = $('#top').offset().top;
    const bio = $('#bio').offset().top;
    const work = $('#work').offset().top;
    const contact = $('#contact').offset().top;
    const atBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
    //highlight links based on scroll position
    (top <= dist && dist <= work - 152) ?
      $('.home-link').css('color', '#3498D1') :
      $('.home-link').css('color', 'white');
    (work <= dist + 152 && dist <= bio - 152) ?
      $('.work-link').css('color', '#3498D1') :
      $('.work-link').css('color', 'white');
    (bio <= dist + 152 && dist <= contact - 152 && !atBottom) ?
      $('.bio-link').css('color', '#3498D1') :
      $('.bio-link').css('color', 'white');
    (dist >= contact - 152 || atBottom) ?
      $('.contact-link').css('color', '#3498D1') :
      $('.contact-link').css('color', 'white');
  }
