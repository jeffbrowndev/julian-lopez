const contentBoxes = document.querySelectorAll('.content');
const modals = Array.from(document.querySelectorAll('.modal'));
const images = document.querySelectorAll('lazy-loaded');

$.lazyLoadXT.autoInit=false;

contentBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    //scroll modal to top before re-opening
    $("#animatedModal").scrollTop(0);
    //find current displayed modal
    const currentModal = modals.find((modal) => {
      return modal.style.display === 'block';
    })
    //set current modal to invisible
    if(currentModal !== undefined) {
      $(`#${currentModal.getAttribute('id')} img`).removeClass('lazy-loaded');
      currentModal.style.display = 'none';
    }
    //display new modal
    const id = `#${box.getAttribute('id')}-modal`;
    const project = document.querySelector(id);

    project.style.display = 'block';
    $(`${id} img`).lazyLoadXT({show: true});
  })
})
