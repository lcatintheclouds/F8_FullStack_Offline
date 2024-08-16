const containerEl = document.querySelector(".container");
const screenAddTodosEl = containerEl.querySelector(".screen-add-todos");
const overplayEl = screenAddTodosEl.querySelector(".overplay");
const addTodoMainEl = screenAddTodosEl.querySelector(".add-todo-main");
const saveBtnEl = addTodoMainEl.querySelector(".save-btn");
const cancelBtnEl = addTodoMainEl.querySelector(".cancel-btn");
const addTodoInputEl = addTodoMainEl.querySelector(".add-todo-input");
const contentEl = containerEl.querySelector(".content");
const todoAppContent = contentEl.querySelector(".todo-app");
const completeTodoList = contentEl.querySelector(".complete-todo");
const searchingInputEl = contentEl.querySelector(
  ".action-todo-app .searching-action .searching-input"
);
const searchingBtnEl = contentEl.querySelector(
  ".action-todo-app .searching-action .searching-btn"
);
const btnAddTodoEl = contentEl.querySelector(".action-todo-app .btn-add-todo");
const clearBtnEl = document.createElement("button");

let count = 0;
clearBtnEl.innerHTML = `Complete Todo ${count} `;
clearBtnEl.classList.add("clear-btn");
completeTodoList.append(clearBtnEl);
btnAddTodoEl.addEventListener("click", () => {
  screenAddTodosEl.style.display = "block";
  overplayEl.style.display = "block";
});

cancelBtnEl.addEventListener("click", () => {
  screenAddTodosEl.style.display = "none";
  overplayEl.style.display = "none";
});
saveBtnEl.addEventListener("click", () => {
  valueInput = addTodoInputEl.value
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll({ '"': "&quot;" });
  if (!valueInput) {
    alert("Dữ liệu trống!");
    return false;
  } else if (valueInput.length > 100) {
    alert("Dữ liệu nhập vào quá dài!");
    return false;
  }
  screenAddTodosEl.style.display = "none";
  overplayEl.style.display = "none";
  const newTodoListEl = document.createElement("div");
  newTodoListEl.classList.add("todo-list-item");
  newTodoListEl.innerHTML = `<div class="todo-item">${valueInput}</div>
  <div class="todo-action-item">
  <button class="delete-btn btn"><i class="fa-regular fa-trash-can"></i></button>
  <button class="edit-btn btn"><i class="fa-regular fa-pen-to-square"></i></button>
  <button class="complete-btn btn"><i class="fa-regular fa-circle-check"></i></button>
  </div>`;
  todoAppContent.append(newTodoListEl);
  addTodoInputEl.value = "";
  todoAcion();
});
const todoAcion = () => {
  const deleteBtns = todoAppContent.querySelectorAll(
    ".todo-list-item .todo-action-item .delete-btn"
  );
  deleteBtns.forEach((item) => {
    item.addEventListener("click", () => {
      // item.parentElement.parentElement.parentElement.remove();
      console.log(item.parentElement);
    });
  });
  const editBtns = todoAppContent.querySelectorAll(
    ".todo-list-item .todo-action-item .edit-btn"
  );
  editBtns.forEach((item) => {
    item.addEventListener("click", () => {
      // item.parentElement.parentElement.parentElement.classList.add("edit");
      console.log(item.parentElement);
    });
  });
  const completeBtns = todoAppContent.querySelectorAll(
    ".todo-list-item .todo-action-item .complete-btn"
  );
  completeBtns.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.parentElement.parentElement.classList.add("complete");
      count++;
      clearBtnEl.innerHTML = `Complete Todo ${count} `;
    });
  });
};
