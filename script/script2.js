const slides = document.querySelectorAll('.slide2');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
// Автоматическое переключение слайдов каждые 5 секунд
setInterval(nextSlide, 5000);

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);