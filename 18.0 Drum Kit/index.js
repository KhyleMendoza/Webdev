// alert("Hello")
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked!");
// }

// let btn = document.querySelectorAll("button");
// btn[0].addEventListener("click", function() {
//     alert("Hello");
// });
// btn[1].addEventListener("click", function() {
//     alert("Hi")
// })

// var x = new Audio ("./sounds/crash.mp3");

// x.play()

let btn = document.querySelectorAll(".drum");

function DrumSound(fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        var music = new Audio(this.fileLocation);
        music.play();
    }  
}

function playDrum(key) {
    switch(key) {
        case "w":
            // let tom1 = new Audio("./sounds/tom-1.mp3")
            // tom1.play();
            let tom1 = new DrumSound("./sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            let tom2 = new DrumSound("./sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            let tom3 = new DrumSound("./sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            let tom4 = new DrumSound("./sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            let snare = new DrumSound("./sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            let crash = new DrumSound("./sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            let kickBass = new DrumSound("./sounds/kick-bass.mp3")
            kickBass.play();
            break;
        default:
            console.log(key)
            return;
    }
}

function buttonAnimation(key) {
    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        // alert("I got clicked!");
        // console.log(this.innerText)
        // this.style.color = "white"
        // tom1.play();

        var key = this.innerText;
        playDrum(key);
        buttonAnimation(key);
    });
};

// document.addEventListener("keydown", function(event) {
//     console.log(event.key)
// })

document.addEventListener("keydown", e => {
    // console.log(e.key + " Key was pressed!");
    var key = e.key;
    playDrum(key)
    buttonAnimation(key)
})