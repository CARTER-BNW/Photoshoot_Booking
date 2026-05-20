// ===============================
// YEAR IN FOOTER
// ===============================
document.getElementById('year').textContent = new Date().getFullYear();


// ===============================
// REMOVE OLD BOOKING HANDLER
// (Buttons now correctly go to contact.html)
// ===============================


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

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 4500);
}
