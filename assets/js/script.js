document.addEventListener("DOMContentLoaded", () => {
  // === NAVBAR =========================================================
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav__list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      }
    });

    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  // === CAROUSEL =======================================================
  const track = document.querySelector(".carousel__track");
  const slides = document.querySelectorAll(".carousel__track img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (track && slides.length > 0) {
    let index = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

    prevBtn?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }
});