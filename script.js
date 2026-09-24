// ===============================
// WILLA BEAUTY & SPA CLINIC
// JavaScript
// ===============================


// NAVBAR SCROLL EFFECT

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {

    menuBtn.textContent = "✕";

  } else {

    menuBtn.textContent = "☰";

  }

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navMenu a").forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

    menuBtn.textContent = "☰";

  });

});


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document.querySelectorAll(".reveal").forEach((element) => {

  observer.observe(element);

});
