let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const radioButtons = document.querySelectorAll('[name="radio-btn"]');

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function startSlider() {
  setInterval(nextSlide, 5000);
}

startSlider();
