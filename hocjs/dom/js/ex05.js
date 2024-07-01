var inputEl = document.querySelector("input");
var btnEl = document.querySelector(".btn");
var ulEl = document.querySelector("ul");
var msgEl = document.querySelector(".msg");
var count = 0;
inputEl.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    btnEl.click();
  }
});
btnEl.addEventListener("click", function () {
  var value = inputEl.value;
  if (!value) {
    // Người dùng chưa nhập
    alert("Vui lòng nhập tên");
    return;
  }
  //   Xử lý thêm
  count++;
  ulEl.innerHTML += `<li>${value}</li>`;
  msgEl.innerText = "Đã thêm thành công";
  inputEl.value = "";
  /*   var checkboxEl = ulEl.querySelectorAll("input");
  checkboxEl.addEventListener("change", function () {
    if (this.checked) {
      ulEl.classList.add("completed");
    } else {
      ulEl.classList.remove("completed");
    }
  }); */
  var inputCheckboxList = ulEl.querySelectorAll("input");
  inputCheckboxList.forEach(function (inputCheckbox) {
    inputCheckbox.addEventListener("change", function () {
      handleMarkCompleted(inputCheckbox);
    });
  });
});

var handleMarkCompleted = function (checkbox) {
  var status = checkbox.checked;
  var id = checkbox.dataset.id;
  var span = ulEl.querySelector(`span[data-id="${id}"]`);
  if (status) {
    span.classList.add("completed");
  } else {
    span.classList.remove("completed");
  }
};
// Gợi ý:
// Event: change
// Property: chekced
