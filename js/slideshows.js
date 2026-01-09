var slideTemplate = document.createElement("div");
slideTemplate.setAttribute("class", "modal");
slideTemplate.innerHTML = `<div class="close-overlay" onclick="closeSlides(this)"></div>
                          <span class="close-modal" onclick="closeSlides(this)">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                          </span>
                          <div class="modal-content grid row-xs"></div>`

var infographics = `<div class="thumbnails"></div>
            
                    <div class="slides">
                        <img src="img/info-visualization/info-visual-1.jpg" class="slide fade" alt="Instructional infographic of a handheld steam iron.">
                        <img src="img/info-visualization/info-visual-2.jpg" class="slide fade" alt="Graphic representation of the number of deaths attributed to cardiovascular disease in Southeast Asian countries from 1999 to 2019.">
                        <img src="img/info-visualization/info-visual-3.jpg" class="slide fade" alt="Data visualization of the prominent sounds heard during each hour of a day.">
                        <img src="img/info-visualization/info-visual-4.jpg" class="slide fade" alt="Calendar visualization of my coffee purchases from Tim Hortons throughout 2023.">
                        <img src="img/info-visualization/info-visual-5.jpg" class="slide fade" alt="Infographic of the main reasons U.S. college students consume caffeinated beverages.">
                        <img src="img/info-visualization/info-visual-6.jpg" class="slide fade" alt="Data visualization of U.S. college students' sleep behaviours.">

                        <button class="prev" onclick="plusSlides(-1)">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        </button>
                        <button class="next" onclick="plusSlides(1)">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                        </button>
                    </div>`

var coffee = `<div class="thumbnails"></div>
      
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

                  <button class="prev" onclick="plusSlides(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                  </button>
                  <button class="next" onclick="plusSlides(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                  </button>
              </div>`

let slideIndex = 1;
var showSlides;

function openSlides(e){
	document.body.appendChild(slideTemplate)
	const container = slideTemplate.querySelector('div.modal-content')

	if (e.id == "coffee") {container.innerHTML = coffee;} 
    else{container.innerHTML = infographics;}
	slideTemplate.style.display = "block";

	const slides = Array.from(container.getElementsByClassName("slide"));
	const thumbnails = container.getElementsByClassName("thumbnails")[0];
	
	slides.forEach((slide) => {
		let thumbnail = document.createElement('div')
		thumbnail.classList.add('thumbnail');
		thumbnail.innerHTML = `<img src="${slide.src}">`
		thumbnail.addEventListener('click', event => {currentSlide(slides.indexOf(slide) + 1)})
		thumbnails.appendChild(thumbnail);
		thumbnails.style.gridTemplateColumns = `repeat(${thumbnails.children.length}, 1fr)`
	})

	showSlides = (n) => {
		let i;
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex-1].style.display = "block";

		for (i = 0; i < thumbnails.children.length; i++) {
			thumbnails.children[i].classList.remove("active");
		}
		thumbnails.children[slideIndex-1].classList.add("active");
	}

	return showSlides(slideIndex);
}

function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}

function closeSlides(e){
	template.style.display = "none";
	slideTemplate.querySelector('div.modal-content').innerHTML = ``;
	document.body.removeChild(slideTemplate)
	slideIndex = 1;
	return slideIndex;
}
