const mobileMenu = () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const crossBtn = document.getElementById("crossBtn");
  const mobileNav = document.getElementById("mobileNav");

  const toggleMenu = () => {
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("flex");
    crossBtn.classList.toggle("hidden");
    hamburgerBtn.classList.toggle("hidden");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  crossBtn.addEventListener("click", toggleMenu);
  mobileNav.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", mobileMenu);
