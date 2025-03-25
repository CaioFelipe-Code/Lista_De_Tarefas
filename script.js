const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const dueDateInput = document.getElementById('dueDate');
const categorySelect = document.getElementById('category');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const category = categorySelect.value;

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} (${category}) - ${dueDate}</span>
            <div>
                <button class="complete-btn">Concluída</button>
                <button class="remove-btn">Remover</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        dueDateInput.value = '';

        const completeButton = taskItem.querySelector('.complete-btn');
        completeButton.addEventListener('click', completeTask);

        const removeButton = taskItem.querySelector('.remove-btn');
        removeButton.addEventListener('click', removeTask);
    }
}

function completeTask(event) {
    const taskItem = event.target.parentElement.parentElement;
    taskItem.classList.toggle('completed');
    const span = taskItem.querySelector('span');
    if (taskItem.classList.contains('completed')) {
        span.innerHTML = `✅ ${span.textContent}`;
    } else {
        span.innerHTML = span.textContent.replace('✅ ', '');
    }
}

function removeTask(event) {
    const taskItem = event.target.parentElement.parentElement;
    taskList.removeChild(taskItem);
}