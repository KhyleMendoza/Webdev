//Random
// var n = Math.random();
// console.log(n);

// n = n * 6;
// console.log(n);
// n = Math.floor(n) + 1;
// console.log(n);

// Love Calculator - ask user 2 names and generate random number from 1-100
var firstPerson = prompt("What is your name?");
var secondPerson = prompt("What is your crush name?");

var rand = Math.random();
rand = rand * 100;
var lovePercent = Math.floor(rand) + 1;
//console.log(lovePercent)
alert(`${firstPerson} and ${secondPerson} is ${lovePercent}% in love!`)
if (lovePercent <= 20) {
    alert("There is no chance")
} else if (lovePercent >= 21 && lovePercent <= 40) {
    alert("Sad")
} else if (lovePercent >= 41 && lovePercent <= 60) {
    alert("Balance")
} else if (lovePercent >= 61 && lovePercent <= 80) {
    alert("Good")
} else if (lovePercent >= 81 && lovePercent <= 100) {
    alert("Perfect")
}