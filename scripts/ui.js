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

  // Mark labels for required fields with a visual asterisk
  try {
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    requiredFields.forEach(el => {
      if (!el.id) return;
      const lbl = document.querySelector('label[for="' + el.id + '"]');
      if (lbl) lbl.classList.add('required');
    });
  } catch (err) {
    // ignore
  }

  // Support touch devices: toggle submenu on click instead of navigating
  try {
    const navItems = document.querySelectorAll('.nav-list > li');
    navItems.forEach(li => {
      const submenu = li.querySelector('.submenu');
      const link = li.querySelector('a');
      if (!submenu || !link) return;
      link.setAttribute('aria-haspopup', 'true');
      link.setAttribute('aria-expanded', 'false');
      link.addEventListener('click', (e) => {
        // if device supports hover, keep default behavior (desktop)
        const isHoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (!isHoverable) {
          // prevent navigation on touch devices and toggle submenu
          e.preventDefault();
          const opened = li.classList.toggle('submenu-open');
          link.setAttribute('aria-expanded', opened ? 'true' : 'false');
        }
      });
    });
  } catch (err) {
    // ignore
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
    const lastFocused = document.activeElement;
    let backdrop = document.querySelector('.modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      const modal = document.createElement('div');
      modal.className = 'modal';
      backdrop.appendChild(modal);
      document.body.appendChild(backdrop);
    }
    const modal = backdrop.querySelector('.modal');
    // Add a default close button and content
    modal.innerHTML = '<button class="modal-close" aria-label="Fechar modal">×</button>' + contentHtml;
    const closeBtn = modal.querySelector('.modal-close');

    // focus trap helpers
    const focusableSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let focusableEls = [];
    const updateFocusable = () => {
      focusableEls = Array.from(modal.querySelectorAll(focusableSelector));
    };

    const keydownHandler = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key === 'Tab') {
        updateFocusable();
        if (focusableEls.length === 0) {
          e.preventDefault();
          closeBtn.focus();
          return;
        }
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first || document.activeElement === modal) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    function close() {
      backdrop.classList.remove('show');
      document.removeEventListener('keydown', keydownHandler);
      // restore previous focus
      try { if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus(); } catch (err) {}
    }

    // attach events
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    if (closeBtn) closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', keydownHandler);

    backdrop.classList.add('show');
    // delay to ensure DOM painted then focus
    setTimeout(() => {
      updateFocusable();
      const first = focusableEls[0] || closeBtn;
      if (first && typeof first.focus === 'function') first.focus();
    }, 10);
  };
    // === Alternar modo de alto contraste ===
    const btn = document.getElementById('contraste-toggle');

    if (btn) {
    btn.addEventListener('click', () => {
        const on = document.body.classList.toggle('alto-contraste');
        btn.setAttribute('aria-pressed', String(on));
    });
    }
});
