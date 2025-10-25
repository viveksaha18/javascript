// && if both condition is true then true

if(5 > 3 && 6 > 2) {
    console.log("AND OPERATOR both the condition are true");
}
// || if only one condition true
if(5 > 3 || 2 > 5) {
    console.log("OR OPERATOR only one condition are true");
}

// Logical NOT Operator !
let age = !(5>3);  // 5 > 3 true but !true which gives false
console.log(age);  // age is false
