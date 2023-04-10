const buttonMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const body = document.querySelector('body');

buttonMenu.addEventListener('click', () => {
  menu.classList.add('show-menu');
  body.classList.add('block-screen');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    body.classList.remove('block-screen');
  });
});

/* begin begin Back to Top button  */
(function () {
  function trackScroll() {
    var goTopBtn = document.querySelector('.back_to_top');
    var scrolled = window.pageYOffset * 2;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  window.addEventListener('scroll', trackScroll);
})();
/* end begin Back to Top button  */
