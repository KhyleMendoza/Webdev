function playPiano(pKey) {
    switch (pKey) {
        case "C":
            let pianoC = new Audio("sounds/pianoC.mp3")
            pianoC.play()
            break;
        case "D":
            let pianoD = new Audio("sounds/pianoD.mp3")
            pianoD.play()
            break;
        case "E":
            let pianoE = new Audio("sounds/pianoE.mp3")
            pianoE.play()
            break;
        case "F":
            let pianoF = new Audio("sounds/pianoF.mp3")
            pianoF.play()
            break;
        case "G":
            let pianoG = new Audio("sounds/pianoG.mp3")
            pianoG.play()
            break;
        default:
            break;
    }
    const pianoSounds = new Audio("")
}

function animateBtn(pKey) {
    pKey = "." + pKey
    $(pKey).addClass("active")
    setTimeout(function() {
        $(pKey).removeClass("active")
    }, 200)
}

$(".piano").on("click", function() {
    var pKey = this.innerText
    playPiano(pKey)
    animateBtn(pKey)
})

$("body").on("keydown", function(e) {
    var pKey = e.key;
    if (pKey.length > 1) {
        return;
    }
    pKey = pKey.toUpperCase()
    playPiano(pKey)
    animateBtn(pKey)
})