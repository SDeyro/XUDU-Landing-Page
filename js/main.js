///////////////////////////////////////////////////////////
// SWIPER
let testimonialSwiper = new Swiper('.testimonial_container', {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

///////////////////////////////////////////////////////////
// Set Current Year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Sticky Navigation
const sectionHeroEl = document.querySelector('.section-hero');
const options = {
  root: null,
  threshold: 0,
  rootMargin: '-80px',
};

const handleObserver = function (entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    document.body.classList.add('sticky');
  }

  if (entry.isIntersecting) {
    document.body.classList.remove('sticky');
  }
};

const observer = new IntersectionObserver(handleObserver, options);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal('.text-title');
sr.reveal('.social--list', { delay: 700, origin: 'bottom' });
sr.reveal('.nav-scroll', { delay: 700, origin: 'bottom' });
sr.reveal('.btn-learn-container', { delay: 700, origin: 'bottom' });
