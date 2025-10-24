// JavaScript has two types 
//->Primitive Data Types
//->Non-Primitive Data Types


// Primitive Data Types
/**
 * 
 * Number->Represent both integer and decimal
 * Null->Represent nothing or empty value
 * Boolean->True or False
 * BigInt->For very large Integers
 * Symbol->Used to hide keys in a object
 * String->Sequence of Characters
 * Undefined->Declared but not defined
 */

let num = 10;
console.log(typeof(num));
let x = null;
console.log(x == 0);
let y = true;
console.log(typeof(y));
let z = 123n;
console.log(typeof(z));
// Use of Symbol
let id = Symbol("id");
let obj = {
    name:"vivek",
    age:"20",
    [id]:123
}
console.log(Object.keys(obj));
let str = "Vivek";
console.log(typeof(str));
let u;
console.log(typeof(u));