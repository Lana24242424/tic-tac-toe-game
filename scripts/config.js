function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
}


// спросить у Вовы. Почему не показывает сообщение внизу
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {   
    errorsOutputElement.textContent = 'Please enter your name';
    return;
  } // enteredPlayername === ''  
}
