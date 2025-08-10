// Code from https://www.w3schools.com/howto/howto_js_media_queries.asp
function checkDevice(x) {
    if (x.matches) {
        document.getElementById("nav-triggered").classList.add("hide-nav");
    } else {
        document.getElementById("nav-triggered").classList.remove("hide-nav");
    }
}
  
var x = window.matchMedia("(max-width: 768px)")
  
checkDevice(x);
  
x.addEventListener("change", function() {
    checkDevice(x);
});
// End of code from https://www.w3schools.com/howto/howto_js_media_queries.asp


document.getElementById("nav-trigger").addEventListener("click", () => {
    document.getElementById("nav-triggered").classList.toggle("hide-nav");
    document.getElementById("nav-triggered").classList.toggle("show-nav");
})


var pageNav = document.getElementById("page-nav")
var progressBar = document.getElementById("progress-bar")
if (document.body.contains(pageNav)){
    // Code from https://www.youtube.com/watch?v=nwCtWn-xFz0
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionElements = document.querySelectorAll('.section');
    let currentSection = 'overview';

    window.addEventListener('scroll', () => {
        if (document.body.contains(progressBar)){
            updateProgress();
        }

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

    // Code from https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
    function updateProgress() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }
    // End of code from https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
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
