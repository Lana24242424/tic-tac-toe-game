let editedPlayer = 0;

const playerConfigOverlayElement = document.querySelector('#config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.querySelector('#config-errors');


const editPlayer1BtnElement = document.querySelector('#edit-plaer-1-btn');
const editPlayer2BtnElement = document.querySelector('#edit-plaer-2-btn');

const cancelConfigBtnElement = document.querySelector('#cancel-config-btn');


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);