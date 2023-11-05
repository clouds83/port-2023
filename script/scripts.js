const menu = document.querySelector('.menu');
const body = document.querySelector('body');

// Toggle the menu visibility
document.querySelector('.button-menu').addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  body.classList.toggle('block-screen');
});

// Close the menu when a menu link is clicked
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    body.classList.remove('block-screen');
  });
});

// Back to Top button visibility
window.addEventListener('scroll', () => {
  const goTopBtn = document.querySelector('.back_to_top');
  const shouldBeVisible =
    window.scrollY > document.documentElement.clientHeight / 2;
  goTopBtn.classList.toggle('back_to_top-show', shouldBeVisible);
});
