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
	} else if (e.classList.contains("img-modal")){
		modal.innerHTML = `<img id="img-modal" src="../img/lightbox/${e.id}.png">`
	} else {
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
		if (e.id == "s-sense") {
            modal.innerHTML = `<div>
									<div class="grid row-reg">
										<img src="${content.SSense.image}">
										<h1>${content.SSense.title}</h1>
										<p>${content.SSense.overview}</p>
										<div class="grid-sm t-col-3 row-xs">
											<div class="textbox bordered padding-sm" style="border: 1px solid #286296;">
												<h3 class="text-reg themed-text">Role</h3>
												<p class="text-sm">${content.SSense.role}</p>
											</div>
											<div class="textbox bordered padding-sm" style="border: 1px solid #286296;">
												<h3 class="text-reg themed-text">Tools</h3>
												<p class="text-sm">${content.SSense.tools}</p>
											</div>
											<div class="textbox bordered padding-sm" style="border: 1px solid #286296;">
												<h3 class="text-reg themed-text">Timeline</h3>
												<p class="text-sm">${content.SSense.timeline}</p>
											</div>
										</div>
									</div>

									<section class="grid row-reg">
										<div>
											<h2>${content.SSense.heading_1}</h2>
											<p>${content.SSense.paragraph_1}</p>
										</div>
										<img src="${content.SSense.image_1}">
									</section>

									<section class="grid-sm t-col-2 row-reg">
										<div class="t-span-2">
											<h2>${content.SSense.heading_2}</h2>
											<p>${content.SSense.paragraph_2}</p>
										</div>
										<img src="${content.SSense.image_2}">
										<img src="${content.SSense.image_3}">
									</section>

									<section class="grid row-reg">
										<div>
											<h2>${content.SSense.heading_3}</h2>
											<p>${content.SSense.paragraph_3}</p>
										</div>
										<img src="${content.SSense.image_4}">
									</section>

									<section class="grid row-reg">
										<div>
											<h2>${content.SSense.heading_4}</h2>
											<p>${content.SSense.paragraph_4}</p>
										</div>
										<img src="${content.SSense.image_5}">
									</section>
                                </div>`
		}
	} 
    document.body.style.overflowY = "hidden";
}
