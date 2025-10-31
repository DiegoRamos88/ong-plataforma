// UI utilities: menu toggle, toast, modal
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Simple toast helper
  window.showToast = function(message, ms = 3000) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = message;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), ms);
  };

  // Modal helper
  window.openModal = function(contentHtml) {
    let backdrop = document.querySelector('.modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      const modal = document.createElement('div');
      modal.className = 'modal';
      backdrop.appendChild(modal);
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('show');
      });
    }
    const modal = backdrop.querySelector('.modal');
    modal.innerHTML = contentHtml;
    backdrop.classList.add('show');
  };
});
