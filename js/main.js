/* ─────────────────────────────────────────────────────────────
   Dreaming Ball — landing page interactions
   Native scrolling (smooth via CSS) + GSAP reveals + 3D tilt.
   ───────────────────────────────────────────────────────────── */

// 1. Image placeholders ----------------------------------------------------
// Any <img class="ph"> that fails to load (asset not added yet) becomes a
// labelled placeholder telling you what to drop in + the path. Small icons
// (data-mini) get a compact version so they don't blow up the layout.
function placeholder(img) {
  const box = document.createElement('div');
  box.className = 'placeholder ' + (img.className || '');
  box.classList.remove('ph');
  const ratio = img.dataset.ratio || '1/1';
  box.style.aspectRatio = ratio.replace('/', ' / ');

  if (img.hasAttribute('data-mini')) {
    box.classList.add('placeholder--mini');
    box.textContent = '📷';
  } else {
    box.innerHTML = `<span>📷 ${img.dataset.ph || 'Image'}</span><small>${img.getAttribute('src') || ''}</small>`;
  }
  img.replaceWith(box);
}
window.placeholder = placeholder;

// Catch images that errored before this script loaded.
document.querySelectorAll('img.ph').forEach((img) => {
  if (img.complete && img.naturalWidth === 0) placeholder(img);
});

// 2. Smooth anchor scrolling (native) -------------------------------------
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// 3. 3D tilt on phone mockups ---------------------------------------------
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 10, speed: 400, glare: true, 'max-glare': 0.15, scale: 1.02,
  });
}

// 4. Scroll-reveal + parallax (GSAP, native scroll) -----------------------
if (!(window.gsap && window.ScrollTrigger)) {
  // GSAP didn't load (offline / CDN blocked) — show everything so nothing
  // is ever left dim/invisible.
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
} else {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  gsap.to('.hero-bg', {
    yPercent: 15, ease: 'none',
    scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
  });

  gsap.utils.toArray('[data-count]').forEach((el) => {
    const end = parseInt(el.dataset.count, 10);
    const suffix = (el.textContent.match(/[^0-9]+$/) || [''])[0];
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
    });
  });
}

// 5. Nav glass on scroll ---------------------------------------------------
const header = document.querySelector('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
