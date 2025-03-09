const input = document.getElementById("field");
const add = document.getElementById("add");
const deleteall = document.getElementById("delete");
const taskCountDisplay = document.getElementById("taskCount"); 
const noTaskMessage = document.getElementById("noTaskMessage"); 

function addTask() {
    const inputValue = input.value.trim();
    if (inputValue === '') return;

    const newDiv = document.createElement('div');
    newDiv.classList.add('taskdiv');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    const ul = document.createElement('ul');
    const list = document.createElement('li');
    list.textContent = inputValue;

    const removebtn = document.createElement('button');
    removebtn.textContent = "✖";
    removebtn.classList.add('delete');

    ul.appendChild(list);
    newDiv.appendChild(ul);
    newDiv.appendChild(checkbox);
    newDiv.appendChild(removebtn);
    document.body.appendChild(newDiv);

    input.value = '';  // Clear input field after adding

    updateTaskCounter();
}

function updateTaskCounter() {
    const totalTasks = document.querySelectorAll('.taskdiv').length;
    taskCountDisplay.textContent = `Total Tasks: ${totalTasks}`;

    noTaskMessage.style.display = totalTasks === 0 ? 'block' : 'none';
}

add.addEventListener('click', addTask);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        let parentDiv = event.target.closest('.taskdiv');
        if (parentDiv) {
            parentDiv.remove();
            updateTaskCounter();
        }
    }
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-checkbox')) {
        let taskItem = event.target.closest('.taskdiv');
        if (event.target.checked) {
            taskItem.style.textDecoration = 'line-through';
            taskItem.style.opacity = '0.5';
        } else {
            taskItem.style.textDecoration = 'none';
            taskItem.style.opacity = '1';
        }
    }
});

deleteall.addEventListener('click', () => {
    document.querySelectorAll('.taskdiv').forEach(task => task.remove());
    updateTaskCounter();
});

updateTaskCounter();
