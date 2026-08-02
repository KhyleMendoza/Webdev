var player1Dice = Math.floor(Math.random() * 6 + 1);
var player2Dice = Math.floor(Math.random() * 6 + 1);
// console.log(player1Dice);
const diceImg = document.querySelectorAll("img");
const heading = document.querySelector("h1");
diceImg[0].src = "./images/dice" + player1Dice + ".png";
diceImg[1].src = "./images/dice" + player2Dice + ".png";

if (player1Dice > player2Dice) {
    // console.log("Player 1:" + player1Dice + " Player 2:" + player2Dice);
    // console.log("Player 1 win");
    heading.innerText = "Player 1 win!"
} else if (player2Dice > player1Dice) {
    // console.log("Player 1:" + player1Dice + " Player 2:" + player2Dice);
    // console.log("Player 2 win");
    heading.innerText = "Player 2 wins!"
} else {
    // console.log("Player 1:" + player1Dice + " Player 2:" + player2Dice);
    // console.log("Tie");
    heading.innerText = "Tie!"
}