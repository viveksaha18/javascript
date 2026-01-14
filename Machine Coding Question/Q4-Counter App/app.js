console.log('I am running.....')
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const reset = document.getElementById('reset');
const initailValue = document.getElementById('initial');
console.log(initailValue.textContent);
const num = initailValue.textContent;
console.log(typeof(num))
let value = parseInt(num);
add.addEventListener('click', ()=>{
    value +=1;
    initailValue.textContent = value;
})
subtract.addEventListener('click', ()=>{
    if(value>0) {
        value-=1;
        initailValue.textContent = value;
    }
    else {
        alert('Value cannot be minus');
    }
})

reset.addEventListener('click', () => {
    value = 0;
    initailValue.textContent = value;
})
