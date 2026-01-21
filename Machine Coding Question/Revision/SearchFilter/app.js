const items = [
    'C', 
    'C++', 
    'Java',
    'JavaScript',
    'Python',
    'Ruby',
]

const list = document.getElementById('list')


const renderList = (items) => {
    list.innerHTML = ''
    if(items.length === 0) {
        const li = document.createElement('li')
        li.textContent = 'No items found'
        list.appendChild(li)
    }
    items.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        list.appendChild(li)
    })
}
renderList(items)
const search = document.getElementById('search')
const handleSearch = (e) => {
    const data = e.target.value.toLowerCase()
    const filteredItems = []
    items.forEach(item => {
        if(item.toLowerCase().includes(data)) {
            filteredItems.push(item)
        }
    })
    renderList(filteredItems)
}
search.addEventListener('input', handleSearch)