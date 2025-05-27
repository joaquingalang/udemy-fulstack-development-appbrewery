var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(".btn").on("click", function () {
    var userChosenColor = this.id;
    animatePress(userChosenColor);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log("User Clicked Pattern: " + userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keypress", function() {
    $("#level-title").text("Level " + level);
    nextSequence();
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log("Game Pattern: " + gamePattern);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length >= gamePattern.length) {
            setTimeout(nextSequence, 1000);
            userClickedPattern = [];
        }
    } else {
        startOver();
    }
}

function playSound(name) {
    var sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}