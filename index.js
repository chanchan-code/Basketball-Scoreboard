let player1Score = document.getElementById("player1");
let player2Score = document.getElementById('player2');

let number1 = 0;
let number2 = 0;

function onepoint() {
    number1 += 1;
    player1Score.textContent = number1;
}

function twopoint() {
    number1 += 2;
    player1Score.textContent = number1;
}

function threepoint() {
    number1 += 3;
    player1Score.textContent = number1;
}

function onepoint1() {
    number2 += 1;
    player2Score.textContent = number2;
}
function twopoint2() {
    number2 += 2;
    player2Score.textContent = number2;
}   
function threepoint3() {
    number2 += 3;
    player2Score.textContent = number2;
}