var template = document.createElement("div");
template.setAttribute("class", "modal");
template.innerHTML = `<div class="close-overlay" onclick="closeModal()"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;" class="close-modal" onclick="closeModal()><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
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
