var template = document.createElement("div");
template.setAttribute("class", "modal");
template.setAttribute("id", "carousel");
template.innerHTML = `<div class="close-overlay" onclick="closeSlides(this)"></div>
                      <span class="material-icons close-modal" onclick="closeSlides(this)">close</span>
                      <div class="modal-content grid row-gap-16" id="modal-content"></div>`

var infographics = `<div class="thumbnails" style="grid-template-columns: repeat(6, 1fr);">
                            <img class="thumbnail" src="img/info-visualization/info-visual-1.jpg" onclick="currentSlide(1)">
                            <img class="thumbnail" src="img/info-visualization/info-visual-2.jpg" onclick="currentSlide(2)">
                            <img class="thumbnail" src="img/info-visualization/info-visual-3.jpg" onclick="currentSlide(3)">
                            <img class="thumbnail" src="img/info-visualization/info-visual-4.jpg" onclick="currentSlide(4)">
                            <img class="thumbnail" src="img/info-visualization/info-visual-5.jpg" onclick="currentSlide(5)">
                            <img class="thumbnail" src="img/info-visualization/info-visual-6.jpg" onclick="currentSlide(6)">
                        </div>
            
                        <div class="slides">
                            <img src="img/info-visualization/info-visual-1.jpg" class="slide fade" alt="Instructional infographic of a handheld steam iron.">
                            <img src="img/info-visualization/info-visual-2.jpg" class="slide fade" alt="Graphic representation of the number of deaths attributed to cardiovascular disease in Southeast Asian countries from 1999 to 2019.">
                            <img src="img/info-visualization/info-visual-3.jpg" class="slide fade" alt="Data visualization of the prominent sounds heard during each hour of a day.">
                            <img src="img/info-visualization/info-visual-4.jpg" class="slide fade" alt="Calendar visualization of my coffee purchases from Tim Hortons throughout 2023.">
                            <img src="img/info-visualization/info-visual-5.jpg" class="slide fade" alt="Infographic of the main reasons U.S. college students consume caffeinated beverages.">
                            <img src="img/info-visualization/info-visual-6.jpg" class="slide fade" alt="Data visualization of U.S. college students' sleep behaviours.">

                            <a class="prev" onclick="plusSlides(-1)"><span class="material-icons">arrow_back_ios</span></a>
                            <a class="next" onclick="plusSlides(1)"><span class="material-icons">arrow_forward_ios</span></a>
                        </div>`

var coffee = `<div class="thumbnails" style="grid-template-columns: repeat(9, 1fr);">
                        <img class="thumbnail" src="img/coffee-mill/mockup-1.jpg" onclick="currentSlide(1)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-2.jpg" onclick="currentSlide(2)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-3.jpg" onclick="currentSlide(3)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-4.jpg" onclick="currentSlide(4)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-5.jpg" onclick="currentSlide(5)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-6.jpg" onclick="currentSlide(6)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-7.jpg" onclick="currentSlide(7)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-8.jpg" onclick="currentSlide(8)">
                        <img class="thumbnail" src="img/coffee-mill/mockup-9.jpg" onclick="currentSlide(9)">
                    </div>
        
                    <div class="slides">
                        <img src="img/coffee-mill/mockup-1.jpg" class="slide fade" alt="A coffee cup and paper bag with the Coffee Mill logo, a barista works in the background.">
                        <img src="img/coffee-mill/mockup-2.jpg" class="slide fade" alt="The Coffee Mill logo at 3 different sizes.">
                        <img src="img/coffee-mill/mockup-3.jpg" class="slide fade">
                        <img src="img/coffee-mill/mockup-4.jpg" class="slide fade">
                        <img src="img/coffee-mill/mockup-5.jpg" class="slide fade">
                        <img src="img/coffee-mill/mockup-6.jpg" class="slide fade" alt="The Coffee Mill logo as signage at a coffee shop.">
                        <img src="img/coffee-mill/mockup-7.jpg" class="slide fade" alt="3 coffee cups at small, medium, and large sizes, with the Coffee Mill logo.">
                        <img src="img/coffee-mill/mockup-8.jpg" class="slide fade" alt="The front and diagonal views of a cake box with the Coffee Mill logo.">
                        <img src="img/coffee-mill/mockup-9.jpg" class="slide fade" alt="The front and back of a light orange shirt with the Coffee Mill logo.">

                        <a class="prev" onclick="plusSlides(-1)"><span class="material-icons">arrow_back_ios</span></a>
                        <a class="next" onclick="plusSlides(1)"><span class="material-icons">arrow_forward_ios</span></a>
                    </div>`


let slideIndex = 1;
var showSlides;

function openSlides(e){
  document.body.appendChild(template)

  if (e.id == "coffee") {
    template.setAttribute("id", "coffee")
    document.getElementById("modal-content").innerHTML = coffee;
  } else{
    template.setAttribute("id", "infographics")
    document.getElementById("modal-content").innerHTML = infographics;
  }
  template.style.display = "block";

  // Start of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
  showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("slide");
    let thumbnails = document.getElementsByClassName("thumbnail");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
  }
  // End of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

  return showSlides(slideIndex);
}

function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}

function closeSlides(e){
  template.style.display = "none";
  document.getElementById("modal-content").innerHTML = ``;
  document.body.removeChild(template)

  slideIndex = 1;
  return slideIndex;
}
