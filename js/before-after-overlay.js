const overlays = document.querySelectorAll(".before-after-overlay")
function showBefore(e) {e.children[0].style.opacity = 0;}
function hideBefore(e) {e.children[0].style.opacity = 1;}
Array.from(overlays).forEach((overlay) => {
    overlay.addEventListener("mouseover", () => {showBefore(overlay)})
    overlay.addEventListener("mouseleave", () => {hideBefore(overlay)})
    overlay.addEventListener("touchstart", event => {
        showBefore(overlay)
        event.preventDefault();
    })
    overlay.addEventListener("touchend", event => {
        hideBefore(overlay)
        event.preventDefault();
    })
})