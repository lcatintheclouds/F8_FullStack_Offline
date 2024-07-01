const formEl = document.querySelector(".todolist_form");
const inputEl = document.querySelector(".input_todo");
const msgEl = document.querySelector(".list_item");
formEl.addEventListener("submit", addTask);
inputEl.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    btnEl.click();
  }
});
function addTask(e) {
  e.preventDefault();
  const data = inputEl.value;
  const list = document.querySelector("ol");
  const item = document.createElement("li");
  const text = document.createElement("span");
  const div = document.createElement("div");
  const updateForm = document.createElement("form");
  const updateInput = document.createElement("input");
  const updateBtn = document.createElement("button");
  if (!data) {
    alert("Nội dung trống, vui lòng nhập nội dung.");
    return;
  }
  div.className = "btn-action";
  text.textContent = data;
  inputEl.value = "";
  item.append(text);
  item.append(div);
  list.append(item);
  item.append(updateForm);
  updateForm.append(updateInput);
  updateForm.append(updateBtn);

  updateForm.className = "update_form hide";

  updateInput.className = "input_todo hide";
  updateInput.type = "text";
  updateInput.placeholder = "Update task";

  updateBtn.type = "button";
  updateBtn.textContent = "Add Task";
  updateBtn.className = "btn-todos hide";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "btn-edit";
  editBtn.innerHTML = `<img src="./img/edit.svg" />`;
  div.append(editBtn);
  editBtn.addEventListener("click", editAction);

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn-delete";
  deleteBtn.innerHTML = `<img src="./img/trash.svg"/>`;
  div.append(deleteBtn);
  deleteBtn.addEventListener("click", deleteAction);

  function deleteAction() {
    item.parentElement.remove();
  }
  function editAction(e) {
    e.preventDefault();
    const newItem = this.parentElement;
    const newText = newItem.firstElementChild;
    updateForm.classList.remove("hide");
    updateInput.classList.remove("hide");
    updateBtn.classList.remove("hide");
    text.classList.add("hide");
    editBtn.classList.add("hide");
    deleteBtn.classList.add("hide");
    text.textContent = updateInput.value;
    newText.setAttribute("contenteditable", true);
  }
}

// function saveEdit(e) {
//   const item = this.parentElement;
//   const text = item.firstElementChild;
//   text.removeAttribute("contenteditable");
//   this.classList.add("hide");
//   this.previousElementSibling.classList.remove("hide");
// }
