var loginAccountBtn = document.querySelector(".btnlogin");
var formMain = document.querySelector(".form-main");
var closeBtn1 = document.querySelector(".form-main .overlay");
var closeBtn2 = document.querySelector(".form-main .close");
loginAccountBtn.addEventListener("click", function () {
  formMain.classList.add("show");
});
closeBtn1.addEventListener("click", function () {
  formMain.classList.remove("show");
});
closeBtn2.addEventListener("click", function () {
  formMain.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    formMain.classList.add("show");
  }
  if (e.key === "Escape") {
    formMain.classList.remove("show");
  }
});
