const tasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Read a book", completed: true },
];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerHTML = `
        <span class="${t.completed ? "text-done" : ""}">${t.title}</span>
        <div>
          <button class="btn btn-sm btn-success me-1" onclick="toggle(${
            t.id
          })">${t.completed ? "Undo" : "Done"}</button>
          <button class="btn btn-sm btn-danger" onclick="del(${
            t.id
          })">Del</button>
        </div>`;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("newTaskInput");
  const title = input.value.trim();
  if (title) tasks.unshift({ id: Date.now(), title, completed: false });
  input.value = "";
  renderTasks();
}

function toggle(id) {
  const t = tasks.find((t) => t.id === id);
  if (t) t.completed = !t.completed;
  renderTasks();
}

function del(id) {
  const i = tasks.findIndex((t) => t.id === id);
  if (i > -1) tasks.splice(i, 1);
  renderTasks();
}

renderTasks();
