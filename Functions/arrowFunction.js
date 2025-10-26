//Syntax



let sayHello = () => {
    console.log("Hello World!");
}

sayHello();

let add = (a, b) => {
    return a + b;
}

console.log(add(2,3));


// Arguments Keyword
// Arguments keyword is not available

// we can use spread operator
let addition = (...arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

let sum = addition(1, 2 ,3 ,4 ,5, 6);
console.log(sum);
// Hoisting -> Arrow Function does not allow hoisting
// You cannot call a function before defining it 

// In normal function hoisting is possible
helloWorld();
function helloWorld() {
    console.log("HI");
}
// not possible in arrow Function 

// hi();
// let hi = () => {
//     console.log("hi");  // Error -> hi() ReferenceError: Cannot access 'hi' before initialization;
// }

// this keyword

// In normal function this keyword refers to the object that invokes the function 
const person = {
    value : 20,
    myFunction: function() {
        console.log(this.value);
    }
}
person.myFunction();

// In arrow function this refers to the window object
const p = {
    val: 30,
    myFun: () => {
        console.log(this.val);  // It shows undefined
    }
}
p.myFun();

