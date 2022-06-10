/* Selectors */

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

/* Event Listeners */

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



/* Functions */

function addTodo(event) {
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo =  document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check">Check</i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash">Trash</i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Apend to list
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";

}


function deleteCheck(event) {
    const item = event.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitioned', function() {
            todo.remove();
        })
        
    }

    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }

}
