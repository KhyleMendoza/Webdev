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

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        // alert("I got clicked!");
        // console.log(this.innerText)
        // this.style.color = "white"
        // tom1.play();
        var drumBtn = this.innerText;
        switch(drumBtn) {
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;
            case "j":
                let snare = new Audio("./sounds/snare.mp3")
                snare.play();
                break;
            case "k":
                let crash = new Audio("./sounds/crash.mp3")
                crash.play();
                break;
            case "l":
                let kickBass = new Audio("./sounds/kick-bass.mp3")
                kickBass.play();
                break;
            default:
                console.log(drumBtn)
                return;
        }
    });
};


