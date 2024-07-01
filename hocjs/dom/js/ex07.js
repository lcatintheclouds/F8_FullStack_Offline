// Event Object
// Đối tượng chứa toàn bộ thông tin của sự kiện

var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   console.log(e);
// });
var offsetX;
var offsetY;
var bodyWidth = document.body.clientWidth;
var currentX;
btn.addEventListener("mousedown", function (e) {
  console.log(e.which);
  if (e.which === 1) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", handleDrag);
  }
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  if (currentX >= bodyWidth / 2) {
    Object.assign(btn.style, {
      top: 0,
      right: 0,
      left: "auto",
    });
  } else {
    Object.assign(btn.style, {
      top: 0,
      left: 0,
      right: "auto",
    });
  }
});
var box = document.querySelector(".container");
function handleDrag(e) {
  var x = e.clientX - offsetX;
  var y = e.clientY - offsetY;
  currentX = x;
  if (x >= bodyWidth / 2) {
    box.classList.add("active");
  } else {
    box.classList.remove("active");
  }
  var css = {
    top: y + "px",
    left: x + "px",
    right: "auto",
  };
  Object.assign(btn.style, css);
}
