// LIGHT MODE
var lightToggle = document.getElementById("switch-input")
if (document.body.contains(lightToggle)){
    var setDarkMode;
    var lightMode = document.getElementById("lm");
    var darkMode = document.getElementById("dm");

    function checkSaved() {
        if(typeof(Storage)!=="undefined"){
            if(localStorage.hasOwnProperty("dark-mode")){
                setDarkMode = localStorage.getItem('dark-mode');
                if(setDarkMode !== 'on') {
                    document.querySelector("body").classList.remove("dark")
                    lightMode.classList.toggle("inactive-mode")
                    darkMode.classList.toggle("inactive-mode")
                    lightToggle.checked = true;
                }
            } else{
                setDarkMode = localStorage.setItem('dark-mode', 'on');
            }
        }
    }
    checkSaved();

    document.querySelector(".switch").addEventListener("mouseover", () => {
        document.querySelector(".inactive-mode").style.scale = "120%";
        document.querySelector(".inactive-mode").style.opacity = "0.8";
    })

    document.querySelector(".switch").addEventListener("mouseout", () => {
        document.querySelector(".inactive-mode").style.scale = "100%";
        document.querySelector(".inactive-mode").style.opacity = "0.2";
    })

    lightToggle.addEventListener("click", () => {
        setDarkMode = localStorage.getItem('dark-mode');
        document.querySelector("body").classList.toggle("dark")
        if(setDarkMode !== "on") {
            setDarkMode = localStorage.setItem('dark-mode', 'on');
            lightMode.style.opacity = "0.2"
            darkMode.style.opacity = "1"
        } else {
            setDarkMode = localStorage.setItem('dark-mode', 'off');
            lightMode.style.opacity = "1"
            darkMode.style.opacity = "0.2"
        }
        document.querySelector(".inactive-mode").style.scale = "100%";
        darkMode.classList.toggle("inactive-mode")
        lightMode.classList.toggle("inactive-mode")
    })
}
//////////


// READ MORE BUTTON
const aboutBtns = document.querySelectorAll("#about button")
aboutBtns[0].addEventListener("click", () => {
    document.querySelector(".about").classList.add("show-full")
})
aboutBtns[1].addEventListener("click", () => {
    document.querySelector(".about").classList.remove("show-full")
})
//////////


// ABOUT PROFILE PICTURE
const myCard = document.querySelector(".my-cards .persona-card")
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.parentElement.classList.remove("hide-hobbies");
        } 
        else {
            entry.target.parentElement.classList.add("hide-hobbies");
        }
    }) 
}, {rootMargin: "-30% 0px -30% 0px"})

function hoverCard() {
    myCard.addEventListener("mouseover", () => {
        myCard.parentElement.classList.remove("hide-hobbies");
    })
    myCard.addEventListener("mouseleave", () => {
        myCard.parentElement.classList.add("hide-hobbies");
    })
}

function checkCardHover(y) {
    if (!y.matches) {cardObserver.observe(myCard);} 
    else {hoverCard()}
}

function checkCardDevice(x) {
    if (x.matches) {cardObserver.observe(myCard);} 
    else {hoverCard()}
}

checkCardHover(y)
checkCardDevice(x)
y.addEventListener("change", () => {checkCardHover(y)});
x.addEventListener("change", () => {checkCardDevice(x)});
//////////


// SHOEBOX
const shoebox = document.querySelector(".shoebox")
const flairs = document.querySelectorAll(".flair")
flairs.forEach((flair) => {
    flair.addEventListener("dblclick", () => {
        flair.style.scale = "140%"
        setTimeout(() => {flair.style.scale = "100%"}, 5000)
    })
    flair.addEventListener("touchstart", () => {
        flair.style.scale = "140%"
    })
    flair.addEventListener("touchend", () => {
        flair.style.scale = "100%"
    })
})
document.querySelector(".gif-modal").addEventListener("click", () => {shoebox.style.display = "flex"})
shoebox.querySelector(".close-modal").addEventListener("click", () => {shoebox.style.display = "none"})
shoebox.querySelector(".close-overlay").addEventListener("click", () => {shoebox.style.display = "none"})
//////////


// SLIDES
var slideTemplate = document.createElement("div");
slideTemplate.setAttribute("class", "modal");
slideTemplate.innerHTML = `<div class="close-overlay" onclick="closeSlides(this)"></div>
                            <button class="icon-btn close-modal" onclick="closeSlides(this)" aria-label="Close modal">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                            </button>
                            <div class="modal-content grid row-xs">
                                <div class="thumbnails"></div>
                                <div class="slides">
                                    <button class="prev" onclick="plusSlides(-1)" aria-label="Previous slide">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                                    </button>
                                    <button class="next" onclick="plusSlides(1)" aria-label="Next slide">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                                    </button>
                                </div>
                            </div>`

var infographics = `<img src="img/info-visualization/info-visual-1.jpg" class="slide" alt="Instructional infographic of a handheld steam iron.">
                    <img src="img/info-visualization/info-visual-2.jpg" class="slide" alt="Graphic representation of the number of deaths attributed to cardiovascular disease in Southeast Asian countries from 1999 to 2019.">
                    <img src="img/info-visualization/info-visual-3.jpg" class="slide" alt="Data visualization of the prominent sounds heard during each hour of a day.">
                    <img src="img/info-visualization/info-visual-4.jpg" class="slide" alt="Calendar visualization of my coffee purchases from Tim Hortons throughout 2023.">
                    <img src="img/info-visualization/info-visual-5.jpg" class="slide" alt="Infographic of the main reasons U.S. college students consume caffeinated beverages.">
                    <img src="img/info-visualization/info-visual-6.jpg" class="slide" alt="Data visualization of U.S. college students' sleep behaviours.">`

var coffee = `<img src="img/coffee-mill/mockup-1.jpg" class="slide" alt="A coffee cup and paper bag with the Coffee Mill logo, a barista works in the background.">
                <img src="img/coffee-mill/mockup-2.jpg" class="slide" alt="The Coffee Mill logo at 3 different sizes.">
                <img src="img/coffee-mill/mockup-3.jpg" class="slide">
                <img src="img/coffee-mill/mockup-4.jpg" class="slide">
                <img src="img/coffee-mill/mockup-5.jpg" class="slide">
                <img src="img/coffee-mill/mockup-6.jpg" class="slide" alt="The Coffee Mill logo as signage at a coffee shop.">
                <img src="img/coffee-mill/mockup-7.jpg" class="slide" alt="3 coffee cups at small, medium, and large sizes, with the Coffee Mill logo.">
                <img src="img/coffee-mill/mockup-8.jpg" class="slide" alt="The front and diagonal views of a cake box with the Coffee Mill logo.">
                <img src="img/coffee-mill/mockup-9.jpg" class="slide" alt="The front and back of a light orange shirt with the Coffee Mill logo.">`

let slideIndex = 1;
var showSlides;

var slides, thumbnails
function openSlides(e){
	document.body.appendChild(slideTemplate)
	const container = slideTemplate.querySelector('div.modal-content')
    const slidesButton = container.querySelector('button.prev')

	if (e.id == "coffee") {slidesButton.insertAdjacentHTML("beforebegin", coffee);}
	else{slidesButton.insertAdjacentHTML("beforebegin", infographics);}
	slideTemplate.style.display = "block";

	slides = Array.from(container.getElementsByClassName("slide"));
	thumbnails = container.querySelector("div.thumbnails");
	
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

	return showSlides(slideIndex), slides, thumbnails;
}

function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}

function closeSlides(e){
	slideTemplate.style.display = "none";
    slides.forEach((slide) => {
        slide.remove();
    })
    thumbnails.innerHTML = ``;
	document.body.removeChild(slideTemplate)
	slideIndex = 1;
	return slideIndex;
}
//////////