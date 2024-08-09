const containerEl = document.querySelector(".container");
const screenAddTodosEl = containerEl.querySelector(".screen-add-todos");
const overplayEl = screenAddTodosEl.querySelector(".overplay");
const addTodoMainEl = screenAddTodosEl.querySelector(".add-todo-main");
const saveBtnEl = addTodoMainEl.querySelector(".save-btn");
const cancelBtnEl = addTodoMainEl.querySelector(".cancel-btn");
const addTodoInputEl = addTodoMainEl.querySelector(".add-todo-input");
const contentEl = containerEl.querySelector(".content");
const searchingInputEl = contentEl.querySelector(
  ".action-todo-app .searching-action .searching-input"
);
const searchingBtnEl = contentEl.querySelector(
  ".action-todo-app .searching-action .searching-btn"
);
const btnAddTodoEl = contentEl.querySelector(".action-todo-app .btn-add-todo");
btnAddTodoEl.addEventListener("click", () => {
  screenAddTodosEl.style.display = "block";
  overplayEl.style.display = "block";
});

cancelBtnEl.addEventListener("click", () => {
  screenAddTodosEl.style.display = "none";
  overplayEl.style.display = "none";
});
