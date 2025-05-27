function openSlides(e){
  document.getElementById(e.id).style.display = "block";
}

function closeSlides(e){
  e.parentElement.style.display = "none";
}


// Start of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
let slideIndexA = 1;
showSlidesA(slideIndexA);
function plusSlidesA(n) {showSlidesA(slideIndexA += n);}
function currentSlideA(n) {showSlidesA(slideIndexA = n);}
function showSlidesA(n) {
  let i;
  let slides = document.getElementsByClassName("slideA");
  let captions = document.getElementsByClassName("caption");
  let thumbnails = document.getElementsByClassName("thumbnailA");
  if (n > slides.length) {slideIndexA = 1}
  if (n < 1) {slideIndexA = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    captions[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndexA-1].style.display = "block";
  captions[slideIndexA-1].style.display = "block";
  thumbnails[slideIndexA-1].className += " active";
}


let slideIndexB = 1;
showSlidesB(slideIndexB);
function plusSlidesB(n) {showSlidesB(slideIndexB += n);}
function currentSlideB(n) {showSlidesB(slideIndexB = n);}
function showSlidesB(n) {
  let i;
  let slides = document.getElementsByClassName("slideB");
  let thumbnails = document.getElementsByClassName("thumbnailB");
  if (n > slides.length) {slideIndexB = 1}
  if (n < 1) {slideIndexB = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndexB-1].style.display = "block";
  thumbnails[slideIndexB-1].className += " active";
}
// End of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp