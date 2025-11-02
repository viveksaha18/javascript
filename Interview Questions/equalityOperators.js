/*
| Operator | Name                | Checks                                                  | Example Behavior      |
| -------- | ------------------- | ------------------------------------------------------- | --------------------- |
| `==`     | **Loose Equality**  | Compares **values only** (performs **type conversion**) | `"5" == 5` → ✅ true   |
| `===`    | **Strict Equality** | Compares **values and types** (❌ no type conversion)    | `"5" === 5` → ❌ false |

*/

console.log(5 == '5')
console.log(5 === '5')