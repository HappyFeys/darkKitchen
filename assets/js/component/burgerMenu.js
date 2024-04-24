const toggleBurgerMenu = () => {
  const burgerMenu = document.getElementById("nav--btnHamburger");

  const mobileMenu = document.getElementById("mobileMenu");

  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("nav__mobileMenu");
  });

  const closeMenu = document.getElementById("closeMenu");
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("nav__mobileMenu");
  });
};

export default toggleBurgerMenu;
