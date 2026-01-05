// Start of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
let slideIndex = 1;

function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let thumbnails = document.getElementsByClassName("thumbnail");
  let dots = document.getElementsByClassName("dot");
  let caption = document.getElementById("caption");

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

  if (document.body.contains(dots[0])){
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
  }
  
  if (document.body.contains(caption)) {
    caption.innerHTML = thumbnails[slideIndex-1].children[0].alt;
  }
}

showSlides(slideIndex);
// End of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
