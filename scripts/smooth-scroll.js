//using jquery for smooth scroll as it has much better browser support
$(document).ready(() => {
  //smooth scroll functionality
  $('nav a').on('click', function(e) {
    //grab clicked link destination
    let dest = $(this).attr('href');
    //prevent page reload
    e.preventDefault();
    //scroll to destination, leave 76px of room for sticky nav
    $("html, body").animate({
      scrollTop: $(dest).offset().top - 75 + 'px'
    }, 800, 'easeInOutExpo');
    //close menu if a page link is clicked
    $('.nav-links').removeClass('display');
    $('.menu-button').removeClass('active');
  })
})
