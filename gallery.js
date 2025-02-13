let slideIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
    showImage(slideIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
    showImage(slideIndex += n);
}

function showImage(n) {
    let i;
    const images = document.querySelectorAll('.gallery-item img');
    const lightboxImg = document.getElementById('lightbox-img');

    if (n > images.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = images.length }

    lightboxImg.src = images[slideIndex - 1].src;
}