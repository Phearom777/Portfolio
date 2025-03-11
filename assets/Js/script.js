document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const sections = document.querySelectorAll(".section");
  const img = document.querySelectorAll(".image");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Enable dark mode on page load
  sections.forEach((section) => {
    section.classList.add("dark-mode");
  });

  // Set the icon to Sun (since it's in dark mode)
  themeIcon.classList.remove("bi-moon-fill");
  themeIcon.classList.add("bi-sun-fill");

  // Function to toggle dark mode
  function toggleDarkMode() {
    sections.forEach((section) => {
      section.classList.toggle("dark-mode");
    });

    // Toggle icon between moon and sun
    if (themeIcon.classList.contains("bi-sun-fill")) {
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-fill");
    } else {
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-sun-fill");
    }
  }

  // Add click event listener
  themeToggle.addEventListener("click", toggleDarkMode);
  // navbar
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
