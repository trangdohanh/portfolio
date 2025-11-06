var template = document.createElement("div");
template.setAttribute("class", "modal");
template.innerHTML = `<div class="close-overlay" onclick="closeModal()"></div>
                      <span class="material-icons close-modal" onclick="closeModal()">close</span>
                      <div class="modal-content" id="modal-content"></div>`

function openModal(e) {
  document.body.appendChild(template)
  template.style.display = "flex";
  if (e.classList.contains("video-modal")){
    document.getElementById("modal-content").innerHTML = `<video width="100%" height="auto" id="video-modal" controls>
                                                              <source type="video/mp4" src="../img/lightbox/${e.id}.mp4">
                                                          </video>`;
  } else{
    document.getElementById("modal-content").innerHTML = `<img id="img-modal" src="../img/lightbox/${e.id}.png">`
  }
}

function closeModal(){
  template.style.display = "none";
  document.getElementById("modal-content").innerHTML = ``;
  document.body.removeChild(template)
}
