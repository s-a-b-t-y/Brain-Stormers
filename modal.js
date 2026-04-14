// ===== ENROLL MODAL SCRIPT =====
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('enrollModal');
  const modalCloseBtn = document.getElementById('emClose');
  const enrollBtns = document.querySelectorAll('.nav-enroll'); // Target 'Enroll Now' buttons

  if (modalOverlay && modalCloseBtn) {
    // Open modal
    enrollBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });

    // Close modal via button
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal by clicking outside
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Close modal via Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
});
