// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuBtn.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// Simple reveal animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document
  .querySelectorAll(".section, .experience-card, .project-card, .ecosystem-card")
  .forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
