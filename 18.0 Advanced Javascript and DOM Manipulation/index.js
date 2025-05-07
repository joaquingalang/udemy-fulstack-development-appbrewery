var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {

        var key = this.innerHTML;
        playSound(key);
        buttonAnimation(key);
        
    });
}

document.addEventListener("keydown", function (event) {
    var key = event.key;
    playSound(key);
    buttonAnimation(key);
});

function playSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = "tom-1";
            break;
        case "a":
            audio = "tom-2";
            break;
        case "s":
            audio = "tom-3";
            break;
        case "d":
            audio = "tom-4";
            break;
        case "j":
            audio = "crash";
            break;
        case "k":
            audio = "kick-bass";
            break;
        case "l":
            audio = "snare";
            break;
    }

    var sound = new Audio("./sounds/" + audio + ".mp3");
    sound.play();
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 150);
}