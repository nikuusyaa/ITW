document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  heroSection.classList.add("loaded");
});
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector(".btn-59");
  const contactForm = document.getElementById("contact-form");

  contactButton.addEventListener("click", function () {
    // Check if the form is currently displayed
    if (
      contactForm.style.display === "none" ||
      contactForm.style.display === ""
    ) {
      contactForm.style.display = "block"; // Show the form
      setTimeout(function () {
        contactForm.classList.add("show"); // Add class for animation
      }, 10);
    } else {
      contactForm.classList.remove("show"); // Remove class for animation
      setTimeout(function () {
        contactForm.style.display = "none"; // Hide after animation
      }, 500);
    }
  });
});
function toggleMenu() {
  document.querySelector(".nav-list").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.querySelector(".typewriter");
  const searchIcon = document.querySelector(".fa-magnifying-glass");

  typewriterText.addEventListener("animationend", function () {
    searchIcon.classList.add("highlight");
  });
});
