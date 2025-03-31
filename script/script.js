let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = 'translateX(' + offset + '%)';
}

// Автоматическая смена слайдов каждые 3 секунды
setInterval(() => {
    slideIndex++;
    showSlides();
}, 3000);

showSlides();


