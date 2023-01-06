function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.remove("error");
  errorsOutputElement.textContent = "";
}

// спросить у Вовы. Почему не показывает сообщение внизу
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername");


  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter your name";
    return;
  } // enteredPlayername === ''


  
}
