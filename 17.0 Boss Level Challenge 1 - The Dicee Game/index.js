function randomNum(n) {
    var result = Math.floor(Math.random() * n) + 1;
    return result;
}

var randomNumber1 = randomNum(6);
var randomNumber2 = randomNum(6);

var diceImageLeft = document.querySelector(".dice .img1");
diceImageLeft.setAttribute("src", "./images/dice" + randomNumber1 + ".png")

var diceImageRight = document.querySelector(".dice .img2");
diceImageRight.setAttribute("src", "./images/dice" + randomNumber2 + ".png")

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
} else {
    heading.textContent = "Draw!";
}