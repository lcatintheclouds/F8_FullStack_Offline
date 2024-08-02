// // Event
// // CustomEvent
// var rangeEl = document.querySelector("input");
// var finishEvent = new CustomEvent("finish", {
//   detail: {
//     name: "F8",
//   },
// });
// finishEvent.msg = "Hello Anh Em";
// rangeEl.addEventListener("input", function () {
//   var value = this.value;
//   //   console.log(value);
//   if (+value === 100) {
//     this.dispatchEvent(finishEvent);
//   }
// });
// /*
// Các bước tạo event
// - Xác định logic của event
// - Xác định element lắng nghe được event đó
// - Xác định tên event và tạo object tương ứng
// - Xử lý logic và dispatch
// */
// var input = document.querySelector("input");
// input.addEventListener("finish", function (e) {
//   console.log("Finish");
//   console.log(e.msg);
// });

// var slider1 = document.querySelector(".slider-1");
// var slider2 = document.querySelector(".slider-2");
// slider1.addEventListener("finish", function () {
//   console.log("ok chưa?");
// });

// slider2.addEventListener("finish", function () {
//   console.log("ok chưa? 2");
// });

// // Trigger event
// var imageUrl = "./image/anh1.jpg";
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   var a = document.createElement("a");
//   a.href = imageUrl;
//   a.download = "anh1.jpg";
//   a.click();
// });

// var form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var input = this.querySelector("input").value;
//   console.log(input);
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   form.submit();
// });

HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var quantityInput = document.querySelector(".quantity input");
// console.dir(quantityInput);
var minusBtn = document.querySelector(".quantity .minus-btn");
var plusBtn = document.querySelector(".quantity .plus-btn");
// var changeEvent = new Event("change");
quantityInput.addEventListener("change", function () {
  console.log(`Quantity: ${this.value}`);
});
minusBtn.addEventListener("click", function () {
  if (quantityInput.value > 1) {
    quantityInput.value--;
    // quantityInput.dispatchEvent(changeEvent);
    quantityInput.change();
  }
});
plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  //   quantityInput.dispatchEvent(changeEvent);
  quantityInput.change();
});
