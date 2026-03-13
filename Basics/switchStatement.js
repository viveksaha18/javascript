/** Switch Statement 
 *  Is a multiway decision maker
 *  Syntax
 * switch(expression) {
 * case constant1:
 *      statement1:
 *      break
 * case const2
 *      statement2:
 *      break;
 * ..........
 * default:
 *      statement
 * }
 */

function displayWeekDay(n) {
    switch(n) {
        case 1 : console.log("Monday");
                break;
        case 2 : console.log("Tuesday");
                break;
        case 3 : console.log("Wed");
                break;
        case 4 : console.log("Thrusday");
                break;
        case 5 : console.log("Friday");
                break;
        case 6 : console.log("Saturday");
                break;
        case 7 : console.log("Sunday");
                break;
        default : console.log("Invalid Number");
    }
}

displayWeekDay(1);

function operation(a, b, c) {
    switch(c) {
        case '+' : console.log(a+b);
                break;
        case '-' : 
            console.log(a-b);
            break;

        case '*' : 
            console.log(a*b);
            break;
    
        case '/' : 
            console.log(a/b);
            break;
        
        default : console.log("not a valid operation");
    }
}
let c = '+';
operation(2, 4, c);