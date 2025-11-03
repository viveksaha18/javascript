/*
Hoisting: 
Hoisting means JavaScript moves variable and function declarations to the top of the code before it runs — but not the values.
*/
console.log(b)
var b = 10

/*what is internal happens in var case is it goes like:
var b
console.log(b) // and that's why gives undefined 
b=9
*/

// this will gives reference error
//console.log(a)
let a = 9
// this also gives reference error
//console.log(c)
const c = 10

// Block Scope means code inside curly braces'{}'

// var ignores block scope example: 
// let and z cannot be accesible outside the block scope 
if(true) {
    var x = 20
    let y = 40
    const z = 50
}
console.log(x)
//console.log(y) -> gives y is not defined
//console.log(z) -> gives z is not defined

// But var obeys this in function while function destroys you cannot access the variables declared inside the function var but works inside the function 
function explaningFunctionScope() {
    var p = 30
    console.log('Explaining Function Scope')
}
explaningFunctionScope()
console.log(p) // p is not defined