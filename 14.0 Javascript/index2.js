// function hello() {
//     console.log("Hello World!");
// }
// hello();

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// var name = prompt("what is your name?");
// var properName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()
// // console.log(properName)
// greet(properName);

// Exercise 6 - Buy
// Version 1:
// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberOfBottles = Math.floor(money / 1.5);
//   console.log(`Bought ${numberOfBottles} bottles of milk!`)
//   console.log(`Money left: ${money%1.5}`)
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }
// getMilk(5)

// Version 2: buy milk with check if can be afford and deduct money
// function getMilk(bottles, money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log(`Karel has money: ${money}`)
//   var cost = bottles * 1.5;
//   if (money >= cost) {
//     console.log(`bought ${bottles} bottles of Milk and paid: $${cost}.`);
//     money = money - cost;
//     console.log(`Money: ${money}`);
//   } else {
//     console.log("Not enough money!")
//   }
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }
// getMilk(3, 5);

// Version 3:
// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberOfBottles = Math.floor(money / 1.5);
//   console.log(`Bought ${numberOfBottles} bottles of milk!`);
//   var bought = true;
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   return [money % 1.5, numberOfBottles, bought];
// }
// var [change, milk, bought] = getMilk(5)
// if (bought == true) {
//     console.log(`Milk: ${milk} Money left: ${change}`)
// } else {
//     console.log("Failed to purchase")
// }

// Version 4:
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var [numberOfBottles, bought] = calcBottles(money, 1.5)
  console.log(`Bought ${numberOfBottles} bottles of milk!`);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return [money % 1.5, numberOfBottles, bought];
}
function calcBottles(startingMoney, costPerBottle) {
    if (startingMoney >= costPerBottle) {
        var numberOfBottles = Math.floor(startingMoney / costPerBottle)
        var bought = true;
        return [numberOfBottles, bought];
    } else {
        var bought = false
        return [0, bought];
    }
}
var [change, milk, bought] = getMilk(4)
if (bought === true) {
    console.log(`Milk: ${milk} Money left: ${change}`)
} else {
    console.log("Failed to purchase")
}

// Exercise 7 - Life In Weeks (90 yrs old max age) example: 56 yrs old Expected Output: You have 12410 days, 1768 weeks, and 408 months left.
// function lifeInWeeks(age) {
//     var yearsRemaining = 90 - age;
//     var days = (yearsRemaining * 365);
//     var weeks = yearsRemaining * 52;
//     var month = yearsRemaining * 12;
//     console.log(`You have ${days} days, ${weeks} weeks, and ${month} months left.`)
// }
// lifeInWeeks(56)

