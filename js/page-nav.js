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