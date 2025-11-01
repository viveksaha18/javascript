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

// In this above code you see how the name variable of parentFunction is accessed by the childFunction, this describes how it access the out of the scope which is lexical scoping.
