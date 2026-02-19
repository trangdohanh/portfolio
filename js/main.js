var homepage = document.getElementById("home")
if (!document.body.contains(homepage)){
    document.getElementById("header").innerHTML = `<div class="flex header">
                                                        <div class="flex header-mobile-wrap">
                                                            <a href="../" class="logo">
                                                                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style="width: 1.25rem; height: 1.25rem;">
                                                                    <path d="M128 0C198.692 0 256 57.3076 256 128C256 198.692 198.692 256 128 256H112V224C112 206.603 98.1176 192.449 80.8262 192.011L80 192H76.001C69.4768 192 64.1681 197.207 64.0039 203.691L64 204.001V244.044C63.9756 250.651 58.6124 255.999 52 255.999H64V256H32V255.998H18V253.551C26.0145 251.731 31.9971 244.565 31.998 236H32V76C32.0002 69.3726 37.3736 64.0003 44.001 64H77.9971V66.4473C70.0076 68.2611 64.0381 75.3885 64 83.918V96H64.0029C64.2565 131.381 99.9744 160 144 160C188.183 160 224 131.177 224 95.6211C224 74.298 211.118 55.3966 191.275 43.6807C172.658 56.0673 160.309 77.1295 160.006 101.096L160 102V101C160 109.837 152.837 117 144 117C135.302 117 128.224 110.059 128.005 101.413L128 101V95H127.991C127.461 60.3902 99.459 32.4438 64.8271 32.0049L64 32H19.999L19.5986 32.0039C11.211 32.1872 4.23749 38.1084 2.44629 45.998H0.000976562V32H0V9.72363C0.871806 4.77339 4.77827 0.86943 9.72949 0H128Z"/>
                                                                    <ellipse cx="192" cy="94" rx="14" ry="14"/>
                                                                    <ellipse cx="96" cy="94" rx="14" ry="14"/>
                                                                </svg>
                                                                Trang Do
                                                            </a>
                                            
                                                            <span class="nav" id="nav-trigger">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                                                            </span>
                                                            
                                                            <span class="nav hide-trigger" id="nav-close">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                                                            </span>
                                                        </div>
                                                        
                                                        <nav id="nav-triggered">
                                                            <a href="../#works">Works</a>
                                                            <a href="../#about">About</a>
                                                            <a href="../files/Hanh_Trang_Do_Resume.pdf" target="_blank" class="link-button">Resume 
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.25rem; height: 1.25rem;"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                                                            </a>
                                                        </nav> 
                                                    </div>`;
}

document.getElementById("footer").innerHTML = `<div>
                                                    <h2 class="text-md">Get in touch</h2>
                                                    <div class="contact">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.25rem; height: 1.25rem;"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                                                        <a href="mailto:trangdohanh@gmail.com">trangdohanh@gmail.com</a>
                                                    </div>
                                                    <div class="contact">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.25rem; height: 1.25rem;"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                                                        <a href="https://www.linkedin.com/in/hanh-trang-do/" target="_blank">linkedin.com/in/hanh-trang-do</a>
                                                    </div>
                                                </div>
                                                
                                                <span class="label theme">Made with HTML, CSS, and JS</span>`;

var navbar = document.getElementById("nav-triggered")
var navOpen = document.getElementById("nav-trigger");
var navClose = document.getElementById("nav-close");
var tabcontent = document.getElementsByClassName("tabcontent");
var tablinks = document.getElementsByClassName("tablinks");
// Code from https://www.w3schools.com/howto/howto_js_media_queries.asp
function checkDevice(x) {
    navbar.classList.remove("hide-nav");
    navOpen.classList.remove("hide-trigger");
    navClose.classList.add("hide-trigger");
    if (x.matches) {navbar.classList.add("hide-nav");}

    if (document.body.contains(tablinks[0])) {
        tablinks[0].setAttribute("id", "defaultOpen")
        tablinks[1].removeAttribute("id", "defaultOpen")
        if (x.matches) {
            tablinks[1].setAttribute("id", "defaultOpen")
            tablinks[0].removeAttribute("id", "defaultOpen")
        }
        document.getElementById("defaultOpen").click();
    }
}
  
var x = window.matchMedia("(max-width: 768px)")
checkDevice(x);
x.addEventListener("change", () => {checkDevice(x);});
// End of code from w3schools

navOpen.addEventListener("click", () => {
    navbar.classList.remove("hide-nav");
    navOpen.classList.add("hide-trigger");
    navClose.classList.remove("hide-trigger");
})

navClose.addEventListener("click", () => {
    navbar.classList.add("hide-nav");
    navOpen.classList.remove("hide-trigger");
    navClose.classList.add("hide-trigger");
})

function openDevice(evt, deviceName) {
    for (let i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
    for (let i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}
    document.getElementById(deviceName).style.display = "block";
    evt.currentTarget.className += " active";
}


var pageNav = document.getElementById("page-nav")
if (document.body.contains(pageNav)){
    // Code from https://www.youtube.com/watch?v=nwCtWn-xFz0
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionElements = document.querySelectorAll('.section');
    let currentSection = 'overview';

    window.addEventListener('scroll', () => {
        sectionElements.forEach(sectionElement => {
            if (window.scrollY >= sectionElement.offsetTop - 300) {
                currentSection = sectionElement.id;
            }
        });

        navLinks.forEach(navLink => {
            if (navLink.href.includes(currentSection)){
                document.querySelector('.nav-link-active').classList.remove('nav-link-active');
                navLink.classList.add('nav-link-active');
            };
        });

        if (scrollY >= document.querySelector('footer').offsetTop - document.querySelector('footer').clientHeight*4.8){
            document.querySelector('.page-nav-container').style.display = "none";
        } else {
            document.querySelector('.page-nav-container').style.display = "flex";
        }
    })
    // End of code from https://www.youtube.com/watch?v=nwCtWn-xFz0
}


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
        } else{ 
            console.log("nothing stored");
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


/* Code from https://codepen.io/pig3onkick3r/pen/YzqqWKY */
const sliders = document.getElementsByClassName('before-after-slider');
if (document.body.contains(sliders[0])){
    Array.from(sliders).forEach((slider) => {
        const resizer = slider.getElementsByClassName('resizer')[0];
        const before = slider.getElementsByClassName('before-image')[0];
        const beforeImage = slider.getElementsByTagName('img')[0];
        let active = false;

        function getWidth() {
            let width = slider.offsetWidth;
            beforeImage.style.width = width + 'px';
        }

        document.addEventListener("DOMContentLoaded", getWidth)
        window.addEventListener('resize', getWidth)

        resizer.addEventListener('mousedown', event => {active = true;});
        document.body.addEventListener('mouseup', event => {active = false});
        document.body.addEventListener('mouseleave', event => {active = false});

        document.body.addEventListener('mousemove', function(e){
            if (!active) return;
            let x = e.pageX;
            x -= slider.getBoundingClientRect().left;
            slideIt(x);
            pauseEvent(e);
        });

        resizer.addEventListener('touchstart', event => {active = true;});
        document.body.addEventListener('touchend', event => {active = false});
        document.body.addEventListener('touchcancel', event => {active = false});

        document.body.addEventListener('touchmove',function(e){
            if (!active) return;
            let x;
            for (let i=0; i < e.changedTouches.length; i++) {
                x = e.changedTouches[i].pageX; 
            }
            x -= slider.getBoundingClientRect().left;
            slideIt(x);
            pauseEvent(e);
        });

        function slideIt(x){
            let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
            before.style.width = transform+"px";
            resizer.style.left = transform-0+"px";
        }

        function pauseEvent(e){
            if(e.stopPropagation) e.stopPropagation();
            if(e.preventDefault) e.preventDefault();
            e.cancelBubble=true;
            e.returnValue=false;
            return false;
        }
        /* End of code from https://codepen.io/pig3onkick3r/pen/YzqqWKY */
    })
}


// Code from https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
        } else {
            if (!entry.target.classList.contains("animatedIn")) {
                entry.target.classList.remove("fadeIn");
            }
        }
    }) 
}, {rootMargin: "0px 0px -15% 0px"})

document.querySelectorAll([".animated", ".animatedIn"]).forEach((el) => observer.observe(el));
// End of code from https://www.youtube.com/watch?v=T33NN_pPeNI


const overlays = document.querySelectorAll(".before-after-overlay")
if (document.body.contains(overlays[0])){
    function showBefore(e) {e.children[0].style.opacity = 0;}
    function hideBefore(e) {e.children[0].style.opacity = 1;}
    Array.from(overlays).forEach((overlay) => {
        overlay.addEventListener("mouseover", event => {showBefore(overlay)})
        overlay.addEventListener("mouseleave", event => {hideBefore(overlay)})
        overlay.addEventListener("touchstart", event => {
            showBefore(overlay)
            event.preventDefault();
        })
        overlay.addEventListener("touchend", event => {
            hideBefore(overlay)
            event.preventDefault();
        })
    })
}
