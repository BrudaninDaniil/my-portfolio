let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset + 1280;
    if (offset > 2560) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px' ;
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 1280;
    if (offset < 0) {
        offset = 2560;
    }
    sliderLine.style.left = -offset + 'px' ;
});




