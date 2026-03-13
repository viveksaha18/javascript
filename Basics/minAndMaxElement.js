let a = 100;
let b = 50;
let c = 20;
let d = 80;
let maxElement = 0;


function maxNumber(a, b, c) {
    if(a > b) {
        if(a > c) {
            maxElement = a;
        }
    }
    else if(b > c) {
        maxElement = b;
    }
    else maxElement = c;

    return maxElement;
}


function sirCode(a, b, c) {
    if(a > b) {
        if(a > c) {
            maxElement = a;
        }
        else maxElement = c;
    }
    else {
        if(b > c) {
            maxElement = b;
        }
        else maxElement = c;
    }
    return maxElement;
}
let ans = sirCode(a, b, c);


function smallerNumber(a, b, c, d) {
    if(a < b && a < c && a < d) {
        console.log("a is smaller");
    }
    else if(b < a && b < c && b < d) {
        console.log("b is smaller");
    }
    else if(c < a && c < b && c < d) {
        console.log("c is smaller");
    }
    else console.log("d is smaller");
}

smallerNumber(a, b, c, d);
console.log(ans);