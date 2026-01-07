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
function handleSearch() {
    const search = input.value.trim().toLowerCase();
    if(search === '') {
        renderList(items);
        return;
    }
    const filteredItems = items.filter(item => item.toLowerCase().includes(search));
    renderList(filteredItems);
}
function debounce(fn, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}
input.addEventListener("input", debounce(handleSearch, 500));