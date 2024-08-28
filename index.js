var signupSideButton = document.getElementById('signupSideButton');
var signinButton = document.getElementById('signinButton');
var cardContainer = document.querySelector('.card-container');
var sideCardInner = document.querySelector('.side-card-inner');


signupSideButton.addEventListener("click", switchSides);

function switchSides() {
    sideCardInner.classList.add('move')
}
