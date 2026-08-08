let game = false;
let lvl = 0;
let buttonColors = ["green", "red", "yellow", "blue"];
let sequence = [];
let playerSequence = [];

$("body").on("keydown", function() {
    if (!game) {
        nextSequence();
        game = true;
    }
})

$(".btn").on("click", function() {
    if (!game) {
        gameOver();
    }
    var userChosenColor = $(this).attr("id");
    playerSequence.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(playerSequence.length - 1);
})

function checkAnswer(currentLvl) {
    if (playerSequence[currentLvl] == sequence[currentLvl]) {
        if (playerSequence.length == sequence.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        gameOver();
    }
}

function nextSequence() {
    playerSequence = [];
    lvl++;
    $("#level-title").text("Level " + lvl);

    let random = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[random];
    sequence.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function gameOver() {
    $("#level-title").text("Game Over, Press any key to Restart");
    $("body").addClass("game-over");
    let gameOverSounds = new Audio("sounds/wrong.mp3");
    gameOverSounds.play();
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    lvl = 0;
    playerSequence = [];
    sequence = [];
    game = false;
}

function playSound(color) {
    var sounds = new Audio("sounds/" + color + ".mp3");
    sounds.play();
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function() {
        $("#" + color).removeClass("pressed");
    }, 100);
}