// JS sẽ định nghĩa sẵn các sự kiện tương ứng với các thẻ html
// Mỗi thẻ html sẽ có những sự kiện riêng
// Việc của lập trình viên: Lắng nghe sự kiện
// var btn = document.querySelector(".btn");
/* 
btn.onclick = function () {
  console.log("Click me");
};
btn.onmouseover = function () {
  console.log("Di chuột vào");
};
btn.onmouseout = function () {
  console.log("Di chuột ra");
};
btn.onmousemove = function () {
  console.log("Di chuột trong nút");
};
 */
var nameEl = document.querySelector(".name");
/* nameEl.oninput = function () {
  console.log("Bạn đang gõ phải ô input");
}; */

/* nameEl.onfocus = function () {
  console.log("Bạn vừa focus");
};
nameEl.onblur = function () {
  console.log("Bạn vừa blur");
}; */
/* nameEl.onchange = function () {
  console.log("Bạn vừa thay đổi");
}; */

// Event Listener
var btn = document.querySelector(".btn");
var btnRemove = document.querySelector(".btnRemove");
/* btn.addEventListener("click", function () {
  console.log("Click me");
});
btn.addEventListener("mouseover", function () {
  console.log("Di chuỗi vào");
});
btn.addEventListener("mouseout", function () {
  console.log("Di chuỗi ra");
});
btn.addEventListener("mousemove", function () {
  console.log("Di chuỗi trong nút");
}); */
var count = 0;
var handleClickBtn = function (e) {
  //   console.log(`Count: `, ++count);
  console.log("Click me");
  console.log(this);
  console.log(e);
};
btn.addEventListener("click", handleClickBtn);

btnRemove.addEventListener("click", function () {
  // Xoá sự kiện click và listener handleClickBtn ra khỏi element btn
  btn.removeEventListener("click", handleClickBtn);
});
var nameEl = document.querySelector(".name");
nameEl.addEventListener("keyup", function (e) {
  //   console.log(e);
  var value = this.value;
  console.log(value);
  if (e.key === "Enter") {
    document.body.style.background = "red";
  }
  if (e.ctrlKey && e.key === "Enter") {
    document.body.style.background = "blue";
  }
});
