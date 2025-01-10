//Fibonacci Sequence
let limit = 50;
let a = 0;
let b = 1;
let output = '';

while (a <= limit) {
    output += a + '\n';  // Append each Fibonacci number to the output
    let temp = a + b;
    a = b;
    b = temp;
}

// Display the Fibonacci sequence in the div element
document.getElementById('fibonacciOutput').textContent = output;