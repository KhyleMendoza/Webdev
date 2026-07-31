//V1:
function fibonacciGenerator(n) {
    fibonacci = []
    var i = 0

    if (n >= 1) {
        fibonacci.push(i)
    }

    if (n >= 2) {
        i++;
        fibonacci.push(i)
    }

    for (var i = 1; i < n-1; i++) {
        var fibo = fibonacci[i] + fibonacci[i - 1];
        fibonacci.push(fibo)
    }


    return fibonacci
}

output = fibonacciGenerator(5)
console.log(output)