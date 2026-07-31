//V1:
// function fibonacciGenerator(n) {
//     var fibonacci = []
//     var i = 0

//     if (n >= 1) {
//         fibonacci.push(i)
//     }

//     if (n >= 2) {
//         i++;
//         fibonacci.push(i)
//     }

//     for (var i = 1; i < n-1; i++) {
//         var fibo = fibonacci[i] + fibonacci[i - 1];
//         fibonacci.push(fibo)
//     }

//     return fibonacci
// }

// output = fibonacciGenerator(5)
// console.log(output)

// V2:
function fibonacciGenerator(n) {
    var fibonacci = []

    if (n >= 1) {
        fibonacci.push(0);
    }

    if (n >= 2) {
        fibonacci.push(1);
    }

    for (var i = 2; i < n; i++) {
        var fibo = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
        fibonacci.push(fibo);
    }

    return fibonacci
}

output = fibonacciGenerator(5)
console.log(output)