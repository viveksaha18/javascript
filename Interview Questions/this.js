console.log(this) 
// In browser, this refers to the Window object
// In Node.js, this refers to an empty object {}

const person = {
    name : 'Vivek',
    greet : function() {
        console.log(this.name)
    }
}
person.greet()