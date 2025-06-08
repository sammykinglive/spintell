



document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#image-slider-hero .slide");
  let current = 0;
  const total = slides.length;
  const intervalTime = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, intervalTime);

  // ✅ Fix for the hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
});