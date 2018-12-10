var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
setInterval(carousel, 2000);

function carousel() {
    for (var i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}
    slides[slideIndex].style.display = "block";
}
