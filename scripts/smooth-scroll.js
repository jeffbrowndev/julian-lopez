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
  (bio <= dist + 152 && dist <= work - 152) ?
    $('.bio-link').css('color', '#3498D1') :
    $('.bio-link').css('color', 'white');
  (work <= dist + 152 && dist <= contact - 152 && !atBottom) ?
    $('.work-link').css('color', '#3498D1') :
    $('.work-link').css('color', 'white');
  (top <= dist && dist <= bio - 152) ?
    $('.home-link').css('color', '#3498D1') :
    $('.home-link').css('color', 'white');
  (dist >= contact - 152 || atBottom) ?
    $('.contact-link').css('color', '#3498D1') :
    $('.contact-link').css('color', 'white');
}
