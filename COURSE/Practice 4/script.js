document.addEventListener('DOMContentLoaded', () => {
    const taskInput =
    document.getElementById('taskInput');
    const addTaskBtn =
    document.getElementById('addTaskBtn');
    const taskList =
    document.getElementById('taskList');
}

/*addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) =>{
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !=='') {
        const li = document.createElement('li');
        li.textContent = taskText;

        taskList.appendChild(li);
        taskInput.value = '';
    }
