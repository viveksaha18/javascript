console.log('Calculator app is running ....')

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let res = document.getElementById('result');
let addBtn = document.getElementById('Addition');
let subBtn = document.getElementById('Subtraction');
let mulBtn = document.getElementById('Multiplication');
let divBtn = document.getElementById('Division');
addBtn.addEventListener('click', function() {
    let firstNumber = parseFloat(num1.value);
    let secondNumber = parseFloat(num2.value);
    let sum = firstNumber + secondNumber;
    res.innerText = "Result: " + sum;
});
subBtn.addEventListener('click', function() {
    let firstNumber = parseFloat(num1.value);
    let secondNumber = parseFloat(num2.value);  
    let difference = firstNumber - secondNumber;
    res.innerText = "Result: " + difference;
});
mulBtn.addEventListener('click', function() {
    let firstNumber = parseFloat(num1.value);
    let secondNumber = parseFloat(num2.value);
    let product = firstNumber * secondNumber;
    res.innerText = "Result: " + product;
});
divBtn.addEventListener('click', function() {
    let firstNumber = parseFloat(num1.value);
    let secondNumber = parseFloat(num2.value);
    if (secondNumber === 0) {
        res.innerText = "Error: Division by zero";
    } else {
        let quotient = firstNumber / secondNumber;
        res.innerText = "Result: " + quotient;
    }
});