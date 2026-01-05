var template = document.createElement("div");
template.setAttribute("class", "modal");
template.innerHTML = `<div class="close-overlay" onclick="closeModal()"></div>
                      <span class="close-modal" onclick="closeModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style="width: 1.5rem; height: 1.5rem;"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                      </span>
                      <div class="modal-content" id="modal-content"></div>`

function openModal(e) {
  document.body.appendChild(template)
  template.style.display = "flex";
  if (e.classList.contains("video-modal")){
    document.getElementById("modal-content").innerHTML = `<video width="100%" height="auto" id="video-modal" controls>
                                                              <source type="video/mp4" src="../img/lightbox/${e.id}.mp4">
                                                          </video>`;
  } else if (e.classList.contains("gif-modal")){
    document.getElementById("modal-content").innerHTML = `<a href="#works" onclick="closeModal()"><img id="img-modal" src="../img/animation.gif"><a>`
  } else if (e.classList.contains("link-modal")){
    document.getElementById("modal-content").innerHTML = `<div class="content-flex">
                                                            <iframe style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/CFDjF0xTOzE?si=MxlUWQ0FFZkbo3_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                            <p>Career Courier is a web platform designed to help high school students in Ontario make informed decisions about their paths after graduation. It provides important information and necessary resources in a structured and well-paced manner. Instead of suggesting programs and schools based solely on the student's interests, we aim to present all the appropriate career and training options.</p>
                                                            <p>This project was completed for Hackville 2024 in collaboration with <a href="https://www.linkedin.com/in/adriana-baric/" target="_blank" class="link">Adriana Baric</a>, <a href="https://www.linkedin.com/in/euna-lim/" target="_blank" class="link">Euna Lim</a>, and <a href="https://www.linkedin.com/in/kelly-kou/" target="_blank" class="link">Kelly Kou</a>. View this project on <a href="https://devpost.com/software/career-courier" target="_blank" class="link">Devpost</a></p>
                                                          </div>`
  } else {
    document.getElementById("modal-content").innerHTML = `<img id="img-modal" src="../img/lightbox/${e.id}.png">`
  }
}

function closeModal(){
  template.style.display = "none";
  document.getElementById("modal-content").innerHTML = ``;
  document.body.removeChild(template)
}
