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
// function whosPaying(names) {
//     let random = Math.floor(Math.random() * names.length);
//     return `${names[random]} is going to buy lunch today!`;
// }

// names = ["Khyle", "Ben", "Jenny", "Michael", "Chloe"];
// paying = whosPaying(names);
// console.log(paying)

// While loop
// var i = 0;
// var food = ["Hotdog", "Adobo", "Sinigang", "Pinakbet", "Hashbrown"];
// while (i <= 4) {
//     console.log(i + 1);
//     console.log(food[i])
//     i++;
// }

// // For loop
// var food = ["Hotdog", "Adobo", "Sinigang", "Pinakbet", "Hashbrown"];
// for (i = 1; i <=5; i++) {
//     console.log(i);
//     console.log(food[i-1])
// }

// // V1
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         case "%":
//             return num1 % num2;
//         default:
//             return "Invalid Operator!";
//     }
//     return num1 + num2;
// }

// answer = calculator(3, 5, "%");
// console.log(answer);

// V2

// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function mul(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2)
// }

// answer = calculator(15, 6, sub)
// console.log(answer)

// Javascript Object
// var bellboy1 = {
//     name: "timmy",
//     age: 21,
//     hasWorkPermit: true,
//     languages: ["French", "English"]
// }
// console.log(`Hello, my name is ${bellboy1.name}, my age is ${bellboy1.age} and i speak ${bellboy1.languages[1]} and ${bellboy1.languages[0]}!`)

// let houseKeeper1 = {
//     name: "naura",
//     age: 27,
//     gender: "female",
//     isAssigned: true,
//     task: ["clean the room", "clean the living room", "cook meal"]
// }

// if (houseKeeper1.isAssigned == true) {
//     console.log(`Hello, I am ${houseKeeper1.name} and im your new house keeper. my age is ${houseKeeper1.age} and im currently assigned to these task:`)
//     for (i = 0; i < houseKeeper1.task.length; i++) {
//         console.log(houseKeeper1.task[i])
//     }
// } else {
//     console.log(`Hello, I am ${houseKeeper1.name} and im your new house keeper. my age is ${houseKeeper1.age} and im currently not assigned to task.`)
// }

// Constructor Function - capital first letter of word
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellboy1 = new BellBoy("John", 23, true, ["English, Japanase"]);
var bellboy2 = new BellBoy("Carl", 22, false, ["English"]);
var bellboy3 = new BellBoy("Nick", 25, true, ["English"]);
console.log(bellboy1)
console.log("Hi i am " + bellboy1.name + " and This is bellboy2: " + bellboy2.name + " and the other one is " + bellboy3.name);

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(5, "Jane", ["Bathroom"]);
var houseKeeper2 = new HouseKeeper(7, "norn", ["Livingroom", "Bathroom", "Kitchen"])
console.log(houseKeeper1)
console.log(houseKeeper2)