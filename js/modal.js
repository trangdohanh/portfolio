function openModal(e) {
	document.body.appendChild(template)
	template.style.display = "flex";
	var modal = template.querySelector("#modal-content")
	if (e.classList.contains("video-modal")){
		modal.innerHTML = `<video width="100%" height="auto" id="video-modal" controls>
								<source type="video/mp4" src="../img/lightbox/${e.id}.mp4">
							</video>`;
	} else if (e.classList.contains("proj-modal")){
		modal.innerHTML = `<img id="img-modal" src="${e.querySelector("img").src}">`
	} else if (e.classList.contains("page-modal")){
        template.classList.add("page")
        if (e.id == "career-courier") {
            modal.innerHTML = `<div class="grid row-sm">
                                    <iframe style="aspect-ratio: 16/9;" src="${content.hackathon.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <div>
                                        <p>${content.hackathon.paragraph_1}</p>
                                        <p>This was an entry for Hackville 2024, in collaboration with <a href="${content.hackathon.designer_1}" target="_blank" class="link">Adriana Baric</a>, <a href="${content.hackathon.designer_2}" target="_blank" class="link">Euna Lim</a>, and <a href="${content.hackathon.designer_3}" target="_blank" class="link">Kelly Kou</a>. You can view this project on <a href="${content.hackathon.link}" target="_blank" class="link">Devpost</a>.</p>
                                    </div>
                                </div>`
		}
	} else{
		modal.innerHTML = `<img id="img-modal" src="../img/lightbox/${e.id}.png">`
	}
    document.body.style.overflowY = "hidden";
}