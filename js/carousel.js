// Loop around JS carousel
const jsCarousels = document.getElementsByClassName('slides')
if (document.body.contains(jsCarousels[0])){
	Array.from(jsCarousels).forEach((carousel) => {
		const container = carousel.parentElement;
		// Start of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
		let slideIndex = 1;
		function plusSlides(n) {showSlides(slideIndex += n);}
		function currentSlide(n) {showSlides(slideIndex = n);}

		const prev = container.getElementsByTagName('button')[0];
		const next = container.getElementsByTagName('button')[1];
		if (container.contains(prev) || container.contains(next)){
			prev.addEventListener("click", event => {plusSlides(-1)})
			next.addEventListener("click", event => {plusSlides(1)})
		}
		
		let slides = Array.from(container.getElementsByClassName("slide"));
		let dots = container.getElementsByClassName("dots")[0];
		let thumbnails = container.getElementsByClassName("thumbnails")[0];
		slides.forEach((slide) => {
			if (container.contains(dots)){
				let dot = document.createElement('span')
				dot.classList.add('dot');
				dot.addEventListener('click', event => {currentSlide(slides.indexOf(slide) + 1)})
				dots.appendChild(dot);
			}

			if (container.contains(thumbnails)){
				let thumbnail = document.createElement('div')
				thumbnail.classList.add('thumbnail');
				thumbnail.innerHTML = `<img src="${slide.src}">`
				thumbnail.addEventListener('click', event => {currentSlide(slides.indexOf(slide) + 1)})
				thumbnails.appendChild(thumbnail);
				thumbnails.style.gridTemplateColumns = `repeat(${thumbnails.children.length}, 1fr)`
			}
		})

		function showSlides(n) {
			let i;
			let caption = container.querySelector('p#caption');

			if (n > slides.length) {slideIndex = 1}
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slides[slideIndex-1].style.display = "block";

			if (container.contains(thumbnails)){
				for (i = 0; i < thumbnails.children.length; i++) {
					thumbnails.children[i].classList.remove("active");
				}
				thumbnails.children[slideIndex-1].classList.add("active");
			}

			if (container.contains(dots)){
				for (i = 0; i < dots.children.length; i++) {
					dots.children[i].classList.remove("active");
				}
				dots.children[slideIndex-1].classList.add("active");
			}
			
			if (container.contains(caption)) {caption.innerHTML = slides[slideIndex-1].alt;}
		}

		showSlides(slideIndex);
		// End of code from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
	})
}


// Scrolling carousel
const slideCarousels = document.getElementsByClassName('scroll-slides');
if (document.body.contains(slideCarousels[0])){
    Array.from(slideCarousels).forEach((carousel) => {
        const container = carousel.parentElement;
        const prev = container.getElementsByTagName('button')[0];
        const next = container.getElementsByTagName('button')[1];
		let dots = container.getElementsByClassName("dots")[0];
		let thumbnails = container.getElementsByClassName("thumbnails")[0];
		let slides = Array.from(carousel.getElementsByClassName("scroll-slide"));

		if (container.contains(dots)){
			slides.forEach((slide) => {
				let dot = document.createElement('span')
				dot.classList.add('dot');
				dot.addEventListener('click', event => {dotScroll(slide.offsetWidth * (slides.indexOf(slide)))})
				dots.appendChild(dot);
			})

			function dotScroll(n) {
				carousel.scrollTo(n, 0)
				for (let i = 0; i < slides.length; i++) {
					if (i == n / slides[0].offsetWidth) {dots.children[i].classList.add("active")}
					else {dots.children[i].classList.remove("active")}
				}
			}
			dotScroll(carousel.scrollLeft)
		}

		if (container.contains(thumbnails)){
			slides.forEach((slide) => {
				let thumbnail = document.createElement('div')
				thumbnail.classList.add('thumbnail');
				thumbnail.innerHTML = `<img src="${slide.src}">`
				thumbnail.addEventListener('click', event => {imgScroll(slide.offsetWidth * (slides.indexOf(slide)))})
				thumbnails.appendChild(thumbnail);
			})
			thumbnails.style.gridTemplateColumns = `repeat(${thumbnails.children.length}, 1fr)`
			function imgScroll(n) {
				carousel.scrollTo(n, 0)
				for (let i = 0; i < slides.length; i++) {
					if (i == n / slides[0].offsetWidth) {thumbnails.children[i].classList.add("active")}
					else {thumbnails.children[i].classList.remove("active")}
				}
			}
			imgScroll(carousel.scrollLeft)
		}

        function placeArrows() {
            prev.style.right = container.offsetWidth / 2 + 8 + "px";
            next.style.left = container.offsetWidth / 2 + 8 + "px";
        }
		if (!prev.classList.contains('prev') && !next.classList.contains('next')) {
			placeArrows()
			window.addEventListener("resize", placeArrows);
		}

        function enablePrev() {prev.disabled = false;}
        function disablePrev() {prev.disabled = true;}
        disablePrev()

        function enableNext() {next.disabled = false;}
        function disableNext() {next.disabled = true;}

        carousel.addEventListener('scroll', function() {
            if (Math.floor(carousel.scrollLeft - (slides[0].offsetWidth * (slides.length - 1))) == 0) {
                enablePrev();
                disableNext();
            }
            else if (Math.floor(carousel.scrollLeft) == 0) {
                disablePrev();
                enableNext();
            }
            else {
                enablePrev();
                enableNext();
            }

			if (container.contains(dots)){
				for (let i = 0; i < slides.length; i++) {
					if (i == Math.floor(carousel.scrollLeft / slides[0].offsetWidth)) {dots.children[i].classList.add("active")}
					else {dots.children[i].classList.remove("active")}
				}
			}
			if (container.contains(thumbnails)){
				for (let i = 0; i < slides.length; i++) {
					if (i == Math.floor(carousel.scrollLeft / slides[0].offsetWidth)) {thumbnails.children[i].classList.add("active")}
					else {thumbnails.children[i].classList.remove("active")}
				}
			}
        })

        prev.addEventListener('click', function() {carousel.scrollBy(-slides[0].offsetWidth, 0)})
        next.addEventListener('click', function() {carousel.scrollBy(slides[0].offsetWidth, 0)})
    })
}
