const buttonMenu = document.querySelector(".button-menu");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");

buttonMenu.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
});
