// -----------
// STICKY MENU
// -----------

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyMenu()};

// Get the header
var menu = document.querySelector(".menu");
var main = document.querySelector(".main");

// Get the offset position of the navbar
var sticky = menu.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
  if (window.scrollY > sticky) {
    menu.classList.add("sticky");
    main.classList.add("main-shift");
  } else {
    menu.classList.remove("sticky");
    main.classList.remove("main-shift");
  }
} 