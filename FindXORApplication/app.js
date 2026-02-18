console.log("XOR APPLICATION...")
let a = document.getElementById("num1");
let b = document.getElementById("num2");
let xor = document.getElementById("butt");
let result = document.getElementById("result");
xor.addEventListener('click',()=>{
    let firstNum = parseFloat(a.value);
    let secondNum = parseFloat(b.value);
    let res = firstNum ^ secondNum;
    result.innerText = "XOR: "+ res;
    console.log(firstNum, secondNum)
})
