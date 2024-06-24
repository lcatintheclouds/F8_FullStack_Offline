// DOM HTML: Thao tác với thẻ html
/* 
- Nội dung
- Thuộc tính
- Xoá
- Class
*/

var contentEl = document.querySelector(".content");

// Lấy nội dung thẻ html
// console.log(contentEl.innerHTML);
// console.log(contentEl.textContent);
// contentEl.innerHTML = `<h2>Học lập trình không khó</h2>`;

// innerText
// console.log(contentEl.innerText);

// contentEl.innerText = `<h2>Học lập trình làm gì</h2>`;

// textContent giữ nguyên khoảng cách
// console.log(contentEl.textContent);
// contentEl.textContent = `<h2>Học lập trình làm gì</h2>`;

// outerText
// console.log(contentEl.outerText);
// contentEl.outerText = `<h2>Học lập trình làm gì</h2>`;

// outerHTML
// console.log(contentEl.outerHTML);
var minusBtn = document.querySelector(".minus-btn");
var countEl = document.querySelector("h1");
var count = 0;
minusBtn.addEventListener("click", function () {
  count--;
  countEl.textContent = "Count: " + count;
});
var plusBtn = document.querySelector(".plus-btn");
plusBtn.addEventListener("click", function () {
  count++;
  countEl.textContent = "Count: " + count;
});
