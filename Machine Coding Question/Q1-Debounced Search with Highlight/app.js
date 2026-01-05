const items = [
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "React",
  "NodeJS",
  "Machine Learning",
  "Frontend Developer",
  "Backend Developer"
];

const list = document.getElementById('list');
console.log(list);
function renderList(data) {
    list.innerHTML = '';
    if(data.length === 0) {
        list.innerHTML = '<li> No results are found </li>';
        return;
    }
    data.forEach(items => {
        const li = document.createElement('li');
        li.textContent = items;
        list.appendChild(li);
    })
}
renderList(items);

const input = document.getElementById('searchInput');
input.addEventListener('input', () => {
    console.log(input.value);
})