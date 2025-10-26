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


// argument keyword
function addition() {
    // arguments -> Array 
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum +=  arguments[i];
    }
    return sum;
}

let sum = addition(10,20,30,50);
console.log(sum)