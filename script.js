const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const animatedItems = document.querySelectorAll('.fade-in-up');

if ('IntersectionObserver' in window && animatedItems.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add('is-visible'));
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const initialText = submitButton?.textContent || '';

    if (submitButton) {
      submitButton.textContent = 'Спасибо! Заявка отправлена';
      submitButton.disabled = true;
    }

    setTimeout(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = initialText;
      }
      contactForm.reset();
    }, 2000);
  });
}
