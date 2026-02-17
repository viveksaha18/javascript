/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. 
In JavaScript, closures are created every time a function is created, at function creation time. */

function parentFunction() {
    let name = 'Parent Function'
    function childFunction() {
        console.log(name)
    }
    childFunction()
}
parentFunction()

// How it is working give step by step explanation:
// 1. When parentFunction is called, it creates a local variable name and assigns it the value 'Parent Function'.
// 2. Then, it defines the childFunction, which is a nested function inside parentFunction.
// 3. The childFunction has access to the variables in its outer scope, which includes the name variable defined in parentFunction.
// 4. When childFunction is called, it logs the value of name to the console, which is 'Parent Function'.
// 5. Finally, parentFunction is called to execute the code and see the result.

// In this above code you see how the name variable of parentFunction is accessed by the childFunction, this describes how it access the out of the scope which is lexical scoping.
