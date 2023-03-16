const Hamburger = document.querySelector('.hamburger');
const menuContainer = document.querySelector('.menu-container');
Hamburger.addEventListener('click', () => {
  menuContainer.classList.toggle('menuOpen');
});