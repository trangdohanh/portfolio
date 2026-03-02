// Code from https://codepen.io/pig3onkick3r/pen/YzqqWKY
const sliders = document.getElementsByClassName('before-after-slider');
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
    // End of code from https://codepen.io/pig3onkick3r/pen/YzqqWKY
})