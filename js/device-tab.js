var tabcontent = document.getElementsByClassName("tabcontent");
var tablinks = document.getElementsByClassName("tablinks");

function checkTabDevice(x) {
    tablinks[0].setAttribute("id", "defaultOpen")
    tablinks[1].removeAttribute("id", "defaultOpen")
    if (x.matches) {
        tablinks[1].setAttribute("id", "defaultOpen")
        tablinks[0].removeAttribute("id", "defaultOpen")
    }
    document.getElementById("defaultOpen").click();
}
checkTabDevice(x);
x.addEventListener("change", () => {checkTabDevice(x);});

function openDevice(evt, deviceName) {
    for (let i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
    for (let i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}
    document.getElementById(deviceName).style.display = "block";
    evt.currentTarget.className += " active";
}