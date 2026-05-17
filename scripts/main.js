// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple “Request Booking” handler – opens email draft
const buttons = document.querySelectorAll('.btn-book');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const session = btn.getAttribute('data-session');
    const subject = encodeURIComponent(`Autumn Mini Session – ${session}`);
    const body = encodeURIComponent(
`Hi John,

I’d like to request a booking for ${session} at Carlton Gardens.

Name:
Phone:
Number of people:
Type of session (couple/family/portrait/other):
Any notes:

Thanks!`
    );
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  });
});

// CAROUSEL
const track = document.querySelector('.carousel-track');
const slides = track ? Array.from(track.children) : [];
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const dotsContainer = document.querySelector('.carousel-dots');

if (track && slides.length > 0 && nextBtn && prevBtn && dotsContainer) {
  let index = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
  });

  // Auto-slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 4500);
}
