const inputfield = document.getElementById('in');
const addbtn = document.getElementById('add');
const rembtn = document.getElementById('remove');
const taskList = document.getElementById('task-list');

addbtn.addEventListener('click', () => {
     const task = inputfield.value.trim();
     if(task){
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        inputfield.value = "";
    }
});

rembtn.addEventListener('click', () => {
    taskList.innerHTML = "";
});

