console.log('I am running...')
const items = [
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "C",
  "React",
  "NodeJS",
  "HTML",
  "CSS",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Machine Learning",
  "Data Structures",
  "Algorithms"
];

const list = document.getElementById('list')
console.log(list);
function renderList(data) {
    list.innerHTML ='';
    if(data.length === 0) {
        return list.innerHTML ='<li>No items Found</li>'
    }
    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        list.appendChild(li)
    })
    return;
}
renderList(items)

const input = document.getElementById('searchInput')

function handleSearch(e) {
    const data = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(data));
    renderList(filteredItems);
}
input.addEventListener('input', handleSearch);