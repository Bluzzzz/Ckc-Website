// Responsive mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.createElement("div");
  menuIcon.classList.add("menu-icon");
  menuIcon.innerHTML = "☰";
  
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");
  
  nav.insertBefore(menuIcon, navLinks);

  menuIcon.addEventListener("click", function() {
    navLinks.classList.toggle("show");
  });
});
