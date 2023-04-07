const buttonMenu = document.querySelector(".button-menu");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector("body");

buttonMenu.addEventListener("click", () => {
  menu.classList.add("show-menu");
  body.classList.add("block-screen");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    body.classList.remove("block-screen");
  });
});
