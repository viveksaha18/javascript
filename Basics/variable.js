// Three types of variables 
// let, var, const
// let can be reassigned
// var can be reassigned 
// const cannot be reassigned
let a = 10;
a = 20;
console.log(a);
var b = 10;
b = 8;
console.log(b);
const c = 8;
//c = 9; The variables with keyword const cannot be redeclared
console.log(c);

// Hoisted 
console.log(x);
var x = 10; // var gives you undefined 

console.log(y);
let y = 10;

// Redeclare run fine but x becomes 30
var x = 20;
var x = 30;

// Give an error as using let you cannot redeclare the variable
let z = 9;
let z = 10;