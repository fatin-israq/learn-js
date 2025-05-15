let todo_list = [];

function loadFromLocalStorage() {
  const savedTodos = localStorage.getItem("todo_list");
  if (savedTodos) {
    todo_list = JSON.parse(savedTodos);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("todo_list", JSON.stringify(todo_list));
}

function renderTodoList() {
  let html = ``;

  if (todo_list.length === 0) {
    html = `<div class="empty-state">No tasks yet. Add a task to get started!</div>`;
  } else {
    for (let i = 0; i < todo_list.length; i++) {
      let name = todo_list[i].name;
      let dueDate = todo_list[i].dueDate;
      html += `<div>
                    <div class="todo-content">
                        <span class="todo-name">${name}</span>
                        <span class="todo-date">Due: ${dueDate}</span>
                    </div>
                    <button onclick='dlt_todo(${i});'>Delete</button>
                </div>`;
    }
  }

  document.querySelector(".js-todo-list").innerHTML = html;
}

function add_todo() {
  let todoElement = document.querySelector(".js-todo-item");
  let name = todoElement.value;
  let dueDateElement = document.querySelector(".js-duedate");
  let dueDate = dueDateElement.value;

  if (name.trim() === "") return;

  todoElement.value = "";
  dueDateElement.value = "";

  todo_list.push({ name, dueDate });
  saveToLocalStorage();
  renderTodoList();
}

function dlt_todo(i) {
  todo_list.splice(i, 1);
  saveToLocalStorage();
  renderTodoList();
}

loadFromLocalStorage();
renderTodoList();
