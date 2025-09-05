// Mobile menu toggle

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Simple form submit action

document.getElementById("contact-form").addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thanks for contacting me! I’ll get back to you soon.");

});