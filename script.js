// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
  }));
}

// Form submission toast
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = '✨ Thank you! Your message has been sent.';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
    form.reset();
  });
});

// Smooth reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; }});
}, { threshold: 0.1 });
document.querySelectorAll('.blog-card, .form-card, .about-grid, .session-types li').forEach(el => {
  el.style.opacity = 0; el.style.transform = 'translateY(24px)'; el.style.transition = 'opacity 0.6s, transform 0.6s';
  observer.observe(el);
});
