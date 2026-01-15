console.log('I am running....')
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
console.log(content1, content2, content3);
const button1 = document.getElementById('butt1');
const button2 = document.getElementById('butt2');
const button3 = document.getElementById('butt3');

button1.addEventListener('click', ()=>{
    content1.style.display = 'block';
    content2.style.display = 'none';
    content3.style.display = 'none';
});
button2.addEventListener('click', ()=>{
    content2.style.display = 'block';
    content1.style.display = 'none';
    content3.style.display = 'none';
});
button3.addEventListener('click', ()=>{
    content3.style.display = 'block';
    content1.style.display = 'none';
    content2.style.display = 'none';
});