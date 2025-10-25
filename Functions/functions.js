function sayHello() {
    console.log("Hi");
}
sayHello();

function add(num1, num2) {
    return num1 + num2;
}

let x = add(4, 5);
console.log(x);


let y = function multiply(n1, n2) {
    return n1*n2;
}
let z = y(2, 2);
console.log(z)