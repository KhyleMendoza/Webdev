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

// function green() {
//     $("#green").addClass("pressed")
//     let greenSounds = new Audio("sounds/green.mp3")
//     greenSounds.play()
//     setTimeout(function() {
//         $("#green").removeClass("pressed")
//     }, 100)
// }

// function red() {
//     $("#red").addClass("pressed")
//     let redSounds = new Audio("sounds/red.mp3")
//     redSounds.play()
//     setTimeout(function() {
//         $("#red").removeClass("pressed")
//     }, 100)
// }

// function yellow() {
//     $("#yellow").addClass("pressed")
//     let yellowSounds = new Audio("sounds/yellow.mp3")
//     yellowSounds.play()
//     setTimeout(function() {
//         $("#yellow").removeClass("pressed")
//     })
// }

// function blue() {
//     $("#blue").addClass("pressed")
//     let blueSounds = new Audio("sounds/yellow.mp3")
//     setTimeout(function() {
//         $("#blue").removeClass("pressed")
//     }, 100)
// }

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
    // Javascript
    // console.log(this.classList)
    // if (this.classList.contains("blue")) {
    //     console.log("blue")
    // }
    // Jquery
    let simonBtn = $(this)
    // console.log(simonBtn.attr("class"))

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