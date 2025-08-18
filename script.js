// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleBtn.textContent = "🌙";
    }
  });
}

// Contact form submit effect
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}

// Navbar style change on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================== Mobile Menu Toggle ==================
const menuToggle = document.getElementById("menuToggle");
const navLinksMenu = document.getElementById("navLinks");
const navLinksItems = document.querySelectorAll("#navLinks a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinksMenu.classList.toggle("show");

    // Change icon ☰ <-> ❌
    if (navLinksMenu.classList.contains("show")) {
      menuToggle.textContent = "✖";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}

// Auto close menu when clicking a link
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksMenu.classList.remove("show");
    menuToggle.textContent = "☰"; // reset icon
  });
});
