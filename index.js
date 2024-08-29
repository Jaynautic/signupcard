var signupSideButton = document.getElementById('signupSideButton');
var sideTitle = document.getElementById('sideTitle');
var sideCard = document.getElementById('cardSide');
var sideCardInner = document.getElementById('sidecardinner');
var signinButton = document.getElementById('signinButton');
var signupButton = document.getElementById('signupButton');
var cardContainer = document.querySelector('.card-container');
var sideCardInner = document.querySelector('.side-card-inner');

let signUpState = 0;

signupSideButton.addEventListener("click", switchSides);

function switchSides() {
    if (signUpState == 0) {
        sideCardInner.classList.add('move1');
        sideCardInner.classList.remove('move2');
        sideCard.classList.add('move1');
        sideCard.classList.remove('move2');
        signupSideButton.innerHTML = 'Sign In';
        sideTitle.innerHTML = 'Already have an Account?';
        signUpState = 1;
    } else {
        sideCardInner.classList.add('move2');
        sideCardInner.classList.remove('move1');
        sideCard.classList.add('move2');
        sideCard.classList.remove('move1');
        signupSideButton.innerHTML = 'Sign Up';
        sideTitle.innerHTML = 'New to us?';
        signUpState = 0;
    }
}
