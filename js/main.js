// Vue components
let app = Vue.createApp();
app.component('footer-el', {
    template: `<footer class="grid row-gap-8">
                    <h2 class="text-medium">Get in touch</h2>
                    <div class="contacts flex row-gap-8">
                        <div class="contact">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="width: 1.25rem; height: 1.25rem;"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
                                <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                            </svg>
                            <a href="mailto:trangdohanh@gmail.com">trangdohanh@gmail.com</a>
                        </div>
                        
                        <div class="contact">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="width: 1.25rem; height: 1.25rem;"><!-- !Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
                                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                            </svg>
                            <a href="https://www.linkedin.com/in/hanh-trang-do/" target="_blank">linkedin.com/in/hanh-trang-do</a>
                        </div>
                    </div>
                </footer>`
})
// Project page header only
app.component('header-el', {
    template: `<header>
                    <div class="grid desktop-columns-4 tablet-columns-3 mobile-columns-2">
                        <a href="../" class="logo">
                            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style="width: 1rem; height: 1rem;">
                                <path d="M128 0C198.692 0 256 57.3076 256 128C256 198.692 198.692 256 128 256H112V224C112 206.603 98.1176 192.449 80.8262 192.011L80 192H76.001C69.4768 192 64.1681 197.207 64.0039 203.691L64 204.001V244.044C63.9756 250.651 58.6124 255.999 52 255.999H64V256H32V255.998H18V253.551C26.0145 251.731 31.9971 244.565 31.998 236H32V76C32.0002 69.3726 37.3736 64.0003 44.001 64H77.9971V66.4473C70.0076 68.2611 64.0381 75.3885 64 83.918V96H64.0029C64.2565 131.381 99.9744 160 144 160C188.183 160 224 131.177 224 95.6211C224 74.298 211.118 55.3966 191.275 43.6807C172.658 56.0673 160.309 77.1295 160.006 101.096L160 102V101C160 109.837 152.837 117 144 117C135.302 117 128.224 110.059 128.005 101.413L128 101V95H127.991C127.461 60.3902 99.459 32.4438 64.8271 32.0049L64 32H19.999L19.5986 32.0039C11.211 32.1872 4.23749 38.1084 2.44629 45.998H0.000976562V32H0V9.72363C0.871806 4.77339 4.77827 0.86943 9.72949 0H128Z"/>
                                <ellipse cx="192" cy="94" rx="14" ry="14"/>
                                <ellipse cx="96" cy="94" rx="14" ry="14"/>
                            </svg>
                            Trang Do
                        </a>
        
                        <span class="material-icons" id="nav-trigger">menu</span>
                        
                        <nav id="nav-triggered">
                            <a href="../#works">Works</a>
                            <a href="../#about">About</a>
                            <a href="../files/resume.pdf" target="_blank" class="link-button">Resume <span class="material-icons">arrow_outward</span></a>
                        </nav> 
                    </div>  
                </header>`
})
app.mount('body')
// End of Vue components


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
