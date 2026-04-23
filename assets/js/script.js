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

  // === TEAM SLIDER ====================================================
  const teamTrack = document.querySelector(".team-track");
  const teamNext = document.querySelector(".team-btn--next");
  const teamPrev = document.querySelector(".team-btn--prev");

  if (teamTrack) {

    const getCardWidth = () => {
      const card = teamTrack.querySelector(".team-card");
      return card ? card.offsetWidth + 15 : 0; // gap = 15px
    };

    const scrollAmount = () => {
      const isDesktop = window.innerWidth >= 1024;
      return getCardWidth() * (isDesktop ? 5 : 1);
    };

    teamNext?.addEventListener("click", () => {
      teamTrack.scrollBy({
        left: scrollAmount(),
        behavior: "smooth",
      });
    });

    teamPrev?.addEventListener("click", () => {
      teamTrack.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth",
      });
    });

    // Opcional: ocultar botones en mobile
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (teamNext) teamNext.style.display = "none";
        if (teamPrev) teamPrev.style.display = "none";
      } else {
        if (teamNext) teamNext.style.display = "block";
        if (teamPrev) teamPrev.style.display = "block";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }

  // === REVIEWS DROPDOWN ============================================
  const reviewsBtn = document.querySelector(".btn__menu");
  const reviewsMenu = document.getElementById("reviewsMenu");

  if (reviewsBtn && reviewsMenu) {

    reviewsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      reviewsMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!reviewsMenu.contains(e.target) && !reviewsBtn.contains(e.target)) {
        reviewsMenu.classList.remove("active");
      }
    });

  }
  
  // === STORE (PRODUCT CARDS INTERACTION) ==============================
  const productCards = document.querySelectorAll(".product__card");

  if (productCards.length > 0) {

    productCards.forEach(card => {
      card.addEventListener("click", (e) => {

        // evitar que el botón dispare el toggle
        if (e.target.tagName === "BUTTON") return;

        // cerrar otras cards
        productCards.forEach(c => {
          if (c !== card) c.classList.remove("active");
        });

        // toggle actual
        card.classList.toggle("active");
      });
    });

  }
});