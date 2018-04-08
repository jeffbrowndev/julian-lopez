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
