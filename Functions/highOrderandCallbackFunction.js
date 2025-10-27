// High Order Function 
// The function which takes another function as an argument is called as High Order Function.

function add(a, b, cb) {
    let result = a + b
    cb(result);
}
add(2, 3, function (val) {
    console.log(val);
}) 

// Here cb is a callback function 
// Callback are the fucntion which are passed as an argument to another function and execute after the completion of task


// With using arrow function 

function multiply(a, b, cb) {
    let result = a * b
    cb(result)
}

multiply(2, 3, (val) => {
    console.log(val)
})


// A function can also written a function 

function subtract(a, b) {
    let result = a - b
    return () => {
        console.log(result)
    }
}

let returnedFunction = subtract(4, 2)
returnedFunction();