// Slideshow homepage
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;
const buttonNext = document.querySelector('#slideshow-button-next');
const buttonPrev = document.querySelector('#slideshow-button-prev');

let slidePosition = 0;

// Auto slide image
setInterval(() => {
    moveToNextImage();
}, 4000);

// Manual slide image
buttonNext.addEventListener("click", function () {
    moveToNextImage();
});

buttonPrev.addEventListener("click", function () {
    moveToPrevImage();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('visible-image');
        slide.classList.add('hidden-image');
    }

    slides[slidePosition].classList.add('visible-image');
}

function moveToNextImage() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevImage() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}