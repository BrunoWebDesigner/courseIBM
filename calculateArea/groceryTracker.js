let grocery1;
let grocery2;
let grocery3;

function calculateGrocery() {
    grocery1 = parseFloat(document.getElementById('g1').value);
    grocery2 = parseFloat(document.getElementById('g2').value);
    grocery3 = parseFloat(document.getElementById('g3').value);

    let totalAmount = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}
