// -----------
// STICKY MENU
// -----------

window.onscroll = function() {stickyMenu()};

var menu = document.querySelector(".menu");
var main = document.querySelector(".main");

var sticky = menu.offsetTop;

function stickyMenu() {
  if (window.scrollY > sticky) {
    menu.classList.add("sticky");
    main.classList.add("main-shift");
  } else {
    menu.classList.remove("sticky");
    main.classList.remove("main-shift");
  }
} 
