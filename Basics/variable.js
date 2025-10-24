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