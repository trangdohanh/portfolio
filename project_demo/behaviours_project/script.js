var buttons = document.querySelectorAll('button')

function showOriginal(event) {
  document.getElementById("original").style.display = "grid"
  document.getElementById("new").style.display = "none"
  document.getElementById("main").classList.remove("grid")

  event.currentTarget.disabled = true;
  for (let i=0; i<buttons.length; i++) {
    if (buttons[i] != event.currentTarget) {
      buttons[i].disabled = false;
    }
  }
}

function showNew(event) {
  document.getElementById("new").style.display = "grid"
  document.getElementById("original").style.display = "none"
  document.getElementById("main").classList.remove("grid")

  event.currentTarget.disabled = true;
  for (let i=0; i<buttons.length; i++) {
    if (buttons[i] != event.currentTarget) {
      buttons[i].disabled = false;
    }
  }
}

function showBoth(event) {
  document.getElementById("new").style.display = "grid"
  document.getElementById("original").style.display = "grid"
  document.getElementById("main").classList.add("grid")

  event.currentTarget.disabled = true;
  for (let i=0; i<buttons.length; i++) {
    if (buttons[i] != event.currentTarget) {
      buttons[i].disabled = false;
    }
  }
}