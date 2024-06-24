// DOM = Document Object Model
/* 
Mô hình hoá tài liệu HTML thành các đối tượng

Cho phép JS chỉnh sửa HTML trên trang web

Các loại DOM
- DOM Document
- DOM Element
- DOM HTML
- DOM CSS
- DOM Navigation
- DOM Event
- DOM EventListener
- DOM Nodes
Bổ sung: Shadow DOM, Custom Element, Web Components, Custom Event, ...
*/

// DOM Element: Truy xuất tới các thẻ html để trả về object
// var head = document.head;
// console.dir(head);
// var tittle = document.title;
// console.log(tittle);
// var body = document.body;
// console.log(body);

// Chọn theo id ==> Chỉ trả về 1 element đầu tiên
/* var h2 = document.getElementById("title");
console.log(h2); */

// Chọn theo class ==> Trả về 1 danh sách các element tìm được
/* var h2List = document.getElementsByClassName("title");
console.log(h2List); */

// Chọn theo tagName ==> Trả về 1 danh sách các element tìm được
/* var h2List = document.getElementsByTagName("h2");
console.log(h2List); */

// Chọn theo CSS selector
/* 
- Dùng querySelector ==> Trả về element đầu tiên tìm được
- Dùng querySelectorAll ==> Trả về 1 danh sách các element tìm được
*/
/* var h2 = document.querySelector("#title");
console.log(h2);

var h2List = document.querySelectorAll(".title");
console.log(h2List); */

// var username = document.querySelector('[name="username"]');
/* var username = document.login_form.username;
console.log(username); */

/* var h2Box = document.querySelector(".box .title");
console.log(h2Box); */

var box = document.querySelector(".box");
var tittle = box.querySelector(".title");
console.log(tittle);
