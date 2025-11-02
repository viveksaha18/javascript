// Difference Between Variable Js

//1.
var x = 20
x = 30
console.log(x)
let y = 40
y = 50
console.log(y)
const z = 79
//z = 90
console.log(z)

// From 1. we get var and let can be reassigned but const cannot be reassigned

// 2.
var v = 9
var v = 10
console.log(v)

let l = 0
//let l = 8
console.log(l)

const c = 89
//const c = 79
console.log(c)

// From 2. we get var can be reclared but not let and const


// 3.
/*
| Keyword | Is it hoisted? | Can you access before declaration? | What happens if you do?   |
| ------- | -------------- | ---------------------------------- | ------------------------- |
| `var`   | ✅ Yes          | ✅ Yes                              | Returns **undefined**     |
| `let`   | ✅ Yes          | ❌ No                               | Throws **ReferenceError** |
| `const` | ✅ Yes          | ❌ No                               | Throws **ReferenceError** |

*/