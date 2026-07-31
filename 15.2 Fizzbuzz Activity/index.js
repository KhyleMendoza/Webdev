// Write a program that prints the numbers from 1 to 100. But for multiplies of three print "Fizz" 
// instead of the number and for the multiples of five print "buzz". For numbers which are multiples 
// of both three and five print "FizzBuzz"
var n = Math.random();
n = Math.floor(n * 100 + 1);
// console.log(n);
var word = ""

if (n % 3 === 0) {
    word += "Fizz";
}
if (n % 5 === 0) {
    word += "Buzz";
}

if (word) {
    console.log(word);
} else {
    console.log(n)
}