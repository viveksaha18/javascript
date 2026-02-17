console.log(this) 
// In browser, this refers to the Window object
// In Node.js, this refers to an empty object {}

const person = {
    name : 'Vivek',
    greet : function() {
        console.log(this.name)
    }
}

const person2 = {
    name : "Gopal",
    greet : function() {
        console.log(this.name);
    }
}
// What is wrong in this function 
// The problem is that the function is trying to access the variable name, which is not defined within the function's scope.
// What is this?
// In JavaScript, this is a special keyword that refers to the context in which a function is executed.
//I am not getting make it simple, this is a keyword that refers to the object that is currently executing the code. In the case of person2.greet(), this refers to the person2 object, which has a name property. However, in the greet function of person2, it is trying to access a variable name that is not defined within the function's scope, which will result in an error.
person2.greet() // Output: Vivek
person.greet()