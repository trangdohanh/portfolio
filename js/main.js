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
// End of code from w3schools


document.getElementById("nav-trigger").addEventListener("click", () => {
    document.getElementById("nav-triggered").classList.toggle("hide-nav");
    document.getElementById("nav-triggered").classList.toggle("show-nav");
})
