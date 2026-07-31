// // Write a program that prints the numbers from 1 to 100. But for multiplies of three print "Fizz" 
// // instead of the number and for the multiples of five print "buzz". For numbers which are multiples 
// // of both three and five print "FizzBuzz"
// // V1:
// var n = Math.random();
// n = Math.floor(n * 100 + 1);
// // console.log(n);
// var word = "";

// if (n % 3 === 0) {
//     word += "Fizz";
// }
// if (n % 5 === 0) {
//     word += "Buzz";
// }

// if (word) {
//     console.log(word);
// } else {
//     console.log(n);
// }

// // V2
// function fizzBuzz(number) {
//     var word = "";
//     console.log(number)
//     if (number % 3 === 0) {
//         word += "Fizz";
//     }

//     if (number % 5 === 0) {
//         word += "Buzz";
//     }

//     if (!word) {
//         word = number;
//     }
//     return word;
// }

// number = Math.random();
// number = Math.floor(number * 100 + 1);
// fizzBuzz = fizzBuzz(number);
// console.log(fizzBuzz)

// V3
var output = [];

function fizzBuzz(number) {

    var word = "";

    if (number % 3 === 0) {
        word += "Fizz";
    }

    if (number % 5 === 0) {
        word += "Buzz";
    }

    if (number % 3 === 0 || number % 5 === 0) {
        output.push(word);
    } else {
        output.push(number);
    }
    
    console.log(output);
}

for (count = 1; count <= 100; count++) {
    fizzBuzz(count);
}
