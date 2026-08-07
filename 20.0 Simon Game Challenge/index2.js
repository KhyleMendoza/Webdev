let lvl = 1;
let game = false;
let sequence = []
let playerSequence = []

function startGame() {
    game = true;
    console.log("Start Game!")
    stageDemo()
    setTimeout(function() {stageDemo()}, 3000)
    setTimeout(function() {stageDemo()}, 6000)
    setTimeout(function() {stageDemo()}, 9000)
    setTimeout(function() {stageDemo()}, 12000)
    console.log("a")
}

function stageDemo() {
    $("#level-title").text("Level " + lvl)
    let color = randomColor()
    console.log(color)
    sequence.push(color)
    console.log(sequence)
    animate(color)
    stage()
}

function stage() {
    lvl++;
}

function randomColor() {
    let random = Math.floor(Math.random() * 4);
    console.log(random);
    let randomColor = "";
    switch (random) {
        case 0:
            randomColor = "green"
            break;
        case 1:
            randomColor = "red"
            break;
        case 2:
            randomColor = "yellow"
            break;
        case 3:
            randomColor = "blue"
            break;
        default:
            break;
    }
    return randomColor
}

function animate(color) {
    $("#" + color).addClass("pressed")
    let Sounds = new Audio("sounds/" + color + ".mp3")
    Sounds.play()
    setTimeout(function() {
        $("#" + color).removeClass("pressed")
    }, 100)
}

function gameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over");
    let gameOverSounds = new Audio("sounds/wrong.mp3");
    gameOverSounds.play()
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200)
}

$("body").on("keydown", function(e) {
    simonKey = e.key
    if (game == false && simonKey.length < 2 ) {
        startGame()
    }
})

$("div[type='button']").on("click", function(e) {
    let simonBtn = $(this)

    if (simonBtn.hasClass("green")) {
        animate("green")
    } else if (simonBtn.hasClass("red")) {
        animate("red")
    } else if (simonBtn.hasClass("yellow")) {
        animate("yellow")
    } else if (simonBtn.hasClass("blue")) {
        animate("blue")
    } else {
        return;
    }

    if (game == false) {
        gameOver();
    }
})