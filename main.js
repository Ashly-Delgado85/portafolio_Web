/* ══════════════════════════════════════════════════════════
   main.js — Portafolio Ashly Morales · DBA en Formación
   ══════════════════════════════════════════════════════════ */

/* ── HAMBURGER MENU ── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

/* ── SKILL BARS — ANIMACIÓN AL HACER SCROLL ── */
const bars   = document.querySelectorAll('.skill-bar-fill');
const widths = Array.from(bars).map(b => b.style.width);

// Ocultar todas las barras al inicio
bars.forEach(b => (b.style.width = '0'));

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((b, i) => { b.style.width = widths[i]; });
        skillsObserver.disconnect();
      }
    });
  },
  { threshold: 0.2 }
);

const skillsSection = document.getElementById('habilidades');
if (skillsSection) skillsObserver.observe(skillsSection);

/* ── ACTIVE NAV LINK ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--cyan)'
      : '';
  });
});

/* ── CONTACT FORM (simulado) ── */
const sendBtn = document.querySelector('.btn-send');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const nombre  = document.querySelector('.contact-form input[type="text"]').value.trim();
    const correo  = document.querySelector('.contact-form input[type="email"]').value.trim();
    const mensaje = document.querySelector('.contact-form textarea').value.trim();

    if (!nombre || !correo || !mensaje) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }
    alert('✅ Mensaje enviado correctamente (simulado).\n¡Gracias por escribirme!');
    document.querySelectorAll('.contact-form input, .contact-form textarea')
            .forEach(el => (el.value = ''));
  });
}

/* ── CV DOWNLOAD (simulado) ── */
document.querySelectorAll('.btn-cv').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('📄 Descargando CV... (simulado)\nReemplaza este evento con el enlace real a tu PDF.');
  });
});
