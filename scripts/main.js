// ===============================
// YEAR IN FOOTER
// ===============================
document.getElementById('year').textContent = new Date().getFullYear();


// ===============================
// BOOKING BUTTON HANDLER
// ===============================
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


// ===============================
// CAROUSEL (AUTO‑LOAD 25 IMAGES)
// ===============================
const track = document.querySelector('.carousel-track');
const dotsContainer = document.querySelector('.carousel-dots');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

if (track && dotsContainer && nextBtn && prevBtn) {

  let slides = [];
  let index = 0;

  // Load sample1.jpg → sample25.jpg
  for (let i = 1; i <= 25; i++) {
    const img = document.createElement('img');
    img.src = `images/sample${i}.jpg`;
    img.alt = `Example ${i}`;
    track.appendChild(img);
    slides.push(img);
  }

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

  // Next button
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  // Previous button
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

  // Auto-slide every 4.5 seconds
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 4500);
}
