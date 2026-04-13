document.addEventListener("DOMContentLoaded", function () {
  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById("navbar");
  
  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();

  /* ─── HAMBURGER MENU ─── */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
    
    // Toggle body scroll
    if (navMenu.classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu on link click
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  /* ─── INFINITE LOOP CLONING ─── */
  const grid = document.querySelector('.ach-grid');
  if (grid) {
    const cards = Array.from(grid.children);
    // Clone all cards and append to grid to create a seamless loop
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      grid.appendChild(clone);
    });
  }

  /* ─── GALLERY MODAL LOGIC ─── */
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const galleryModal = document.getElementById('galleryModal');
  const closeModal = document.getElementById('closeModal');
  const modalOverlay = document.querySelector('.modal-overlay');

  function openModal() {
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    galleryModal.classList.remove('active');
    // Only restore scroll if hamburger menu is NOT open
    if (!navMenu.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  if (viewMoreBtn) viewMoreBtn.addEventListener('click', openModal);
  if (closeModal) closeModal.addEventListener('click', closeGallery);
  if (modalOverlay) modalOverlay.addEventListener('click', closeGallery);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryModal.classList.contains('active')) {
      closeGallery();
    }
  });

  /* ─── CUSTOM AOS (Animate On Scroll) ─── */
  function revealOnScroll() {
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 80;
      if (isVisible) {
        const delay = el.getAttribute("data-delay") || 0;
        setTimeout(() => {
          el.classList.add("aos-visible");
        }, parseInt(delay));
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();

  /* ─── RESIZE HANDLER ─── */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  }, { passive: true });

  console.log("%c🧠 Brain Stormers | Achievement Page Active", "color: #E8820C; font-weight: bold; font-size: 14px;");
});
