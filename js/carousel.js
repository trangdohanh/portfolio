// Start of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
let slideIndex = 1;

function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let thumbnails = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  
  if (thumbnails){
    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    thumbnails[slideIndex-1].className += " active";
  }
}

showSlides(slideIndex);
// End of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
