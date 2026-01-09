console.log('I am running......')
const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.getElementById('todo-list');
const todos = [];
function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        if(todo.completed) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        })
        list.appendChild(li);
    })
}

function addTask() {
    const task = input.value.trim();
    if(task === '') return;
    todos.push({
        text: task,
        completed: false,
    })
    input.value = '';
    renderTodos();
}
button.addEventListener('click', addTask);