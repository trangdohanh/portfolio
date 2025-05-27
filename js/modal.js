function openModal(e) {
  if (e.className == "video-modal"){
    document.getElementById("video-modal").src = `../img/lightbox/${e.id}.mp4`;
    document.getElementById("video-modal").style.display = "block";
  } else{
    document.getElementById("img-modal").src = `../img/lightbox/${e.id}.png`;
    document.getElementById("img-modal").style.display = "block";
  }
  
  document.getElementById("modal").style.display = "flex";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("img-modal").style.display = "none";
  document.getElementById("video-modal").style.display = "none";
  document.getElementById("video-modal").pause();
}