//Random
// var n = Math.random();
// console.log(n);

// n = n * 6;
// console.log(n);
// n = Math.floor(n) + 1;
// console.log(n);

// // Love Calculator - ask user 2 names and generate random number from 1-100
// var firstPerson = prompt("What is your name?");
// var secondPerson = prompt("What is your crush name?");
// var rand = Math.random();
// rand = rand * 100;
// var lovePercent = Math.floor(rand) + 1;
// //console.log(lovePercent)
// alert(`${firstPerson} and ${secondPerson} is ${lovePercent}% in love!`)
// if (lovePercent <= 20) {
//     alert("Poor");
// } else if (lovePercent >= 21 && lovePercent <= 40) {
//     alert("Sad");
// } else if (lovePercent >= 41 && lovePercent <= 60) {
//     alert("Average")
// } else if (lovePercent >= 61 && lovePercent <= 80) {
//     alert("Good")
// } else if (lovePercent >= 81 && lovePercent <= 100) {
//     alert("Perfect")
// }

// // Array
// var color = ["Red", "Blue", "Green", "Skyblue", "Orange"];
// console.log(color)
// color.length;

//Activity - Guest list checker
// var guestList = ["Khyle", "Arianne", "Yu", "Jimmuel"];
// console.log(guestList);
// console.log(`Hi, ${guestList[0]}`);
// console.log(`There are ${guestList.length} Guest in total!`);

// guest = prompt("What is your name?");

// if (guestList.includes(guest)) {
//     console.log(`Welcome, ${guest}!`);
// } else {
//     console.log("You are not in the guest list!");
// }

// var number = [];
// number.push(1, 2, 3)
// console.log(number)
// number.pop()
// console.log(number)

// Activity - Who is paying code challenge
function whosPaying(names) {
    let random = Math.random();
    random = Math.floor(random * names.length);
    console.log(`${names[random]} is going to buy lunch today!`);
}

names = ["Khyle", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);