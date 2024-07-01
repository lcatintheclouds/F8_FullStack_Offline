var boxEl = document.querySelector(".box");
// console.log(boxEl.style);
// var css = {
//   color: "red",
//   textAlight: "center",
//   textTransform: "uppercase",
//   fontStyle: "italic",
//   //backgroundImage: "url(https://picsum.photos/200/300)",
// };
// css.color = null;
// Object.assign(boxEl.style, css);
// boxEl.style.color = "red";
// boxEl.style.textAlign = "center";
// boxEl.style.textTransform = "uppercase";
// boxEl.style.fontStyle = "italic";

// Bài tập: Thêm thuộc tính background-image cho object css trên
var btnElFadein = document.querySelector(".btn-fadein");
var btnElFadeout = document.querySelector(".btn-fadeout");
var pEl = boxEl.querySelector("p");
pEl.style.transition = "oppacity 2s linear";
btnElFadeout.addEventListener("click", function () {
  pEl.style.opacity = 0;
  setTimeout(function () {
    pEl.style.display = "none";
  }, 400);
});
btnElFadein.addEventListener("click", function () {
  pEl.style.display = null;
  setTimeout(function () {
    pEl.style.opacity = 1;
  }, 200);
});
