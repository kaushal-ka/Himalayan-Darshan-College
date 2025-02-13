let currentSlide = 0;
let slides = document.querySelectorAll('.slide');

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlider();
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

updateSlider();

function updateSlider() {
    console.log('Updating slider, current slide:', currentSlide);
    slides.forEach((slide, index) => {
        console.log('Slide index:', index, 'Display:', index === currentSlide ? 'block' : 'none');
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}
document.querySelector('.button-search').addEventListener('click', function() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm.style.display === 'block') {
        searchForm.style.display = 'none';
    } else {
        searchForm.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.button-search'); // Adjust as necessary
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
});
