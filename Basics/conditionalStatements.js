let age = 12;
if(age > 18) {
    console.log("Can Vote");
}
else console.log("Can't Vote");

// if-else ladder 
let marks = 78;
if(marks > 60) {
    console.log("Pass");
}
else if(marks > 70) {
    console.log("Grade A");
}
else if(marks > 80) {
    console.log("Grade B");
}
else {
    console.log("Fail");
}


// Ternary Operator 
let x = (5 > 3) ? true : false;

console.log(x); 


// Switch Case 

let day = 3;
switch(day) {
    case 1 : 'Monday';
            console.log("Monday");
            break;
    case 2 : "Tuesday";
            console.log("Tuesday");
            break;
    case 3 : "Wednesday";
            console.log("Wednesday");
            break;
    default : 
            console.log("Error!");
}