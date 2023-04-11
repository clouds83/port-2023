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

/* begin Back to Top button  */
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
/* end Back to Top button  */

/* |||||||||| begin fixed header |||||||||| */

(function () {
  var doc = document.documentElement;
  var w = window;

  /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;

  /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

  var header = document.getElementById('header-top');
  var toggled;
  var threshold = 200;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  var toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add('hide');
    } else if (curDirection === 1) {
      header.classList.remove('hide');
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener('scroll', checkScroll);
})();

/* |||||||||| end fixed header |||||||||| */
