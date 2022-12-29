const playerConfigOverlayElement = document.querySelector('#config-overlay');
const backDropElement = document.getElementById('backdrop');


const editPlayer1BtnElement = document.querySelector('#edit-plaer-1-btn');
const editPlayer2BtnElement = document.querySelector('#edit-plaer-2-btn');


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
