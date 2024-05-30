/* 
Hàm trong JS
- Cú pháp trong lập trình dùng để thể hiện các chức năng (Động thừ)
- Nhóm các đoạn chương trình còn để dễ dàng gọi lại ==> tái sử dụng
- Hàm trong JS có 2 loại:
+ Hàm tự định nghĩa bở lập trình viên
+ Hàm có sẵn (trình duyệt, engine)

Cú pháp: 
function tenham() {
    Nội dung hàm
}

function tenham(thamso1, thamso2, ...) {
    Nội dung hàm
}

Đặt tên hàm:
- Quy tắc camelCase
- Sử dụng động từ
+ get
+ set
+ make
+ build
+ call
+ remove
+ create
+ insert
...

Định nghĩa hàm ==> Tham số (Parameter)
Gọi hàm ==> Đối số (Argument)

- Hàm Có giá trị trả về (Hàm return)
- Hàm không có giá trị trả về (hàm void)

- Biến toàn cục: Biến khai báo ở phạm vi ngoài hàm
- Biến cục bộ: Biến khai báo ở phạm vi trong 1 hàm, chỉ được sử dụng trong phạm vi của hàm đó

Lưu ý: Trong JS không có khái niệm tham chiếu, tham trị
*/

// function getMessage(msg, type = "success") {
//   console.log(`Học JS không khó`);
//   console.log(msg);
//   console.log(type);
//   return "F8";
//   console.log("ok");
// }
// var result = getMessage(`F8 - Fullstack`, "errors"); //Lời gọi hàm chủ động
// console.log(result);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "Không tính dược";
// }

// var result = division(10, 0);
// console.log(result);

// var data = "F8";
// function getData() {
//   return data;
// }

// function setData(value) {
//   data = value;
// }

// setData("Fullstack");

// var result = getData();
// console.log(result);

// function getTotal(a, b) {
//   var total = a + b;
//   return total;
// }

// var result = getTotal(10, 20);
// console.log(result);
// console.log(total);

// anonymous function: Hàm ẩn danh, hàm không tên
// Muốn thực thi:
/* 
Cách 1: Gán vào 1 biến (Expression Function)
Cách 2: Đưa vào 1 hàm khác dưới dạng đối số
*/
// var getMessage = function () {
//   console.log("Học JS không khó");
// };
// // var getMsg = getMessage;

// // var getMsg2 = getMsg;

// getMessage();

// var display = function (callback) {
//   //   console.log(text);
//   callback();
// };
// display("F8 - Fullstack");

// var handleDisplay = function () {
//   console.log("Học JS để làm gì");
// };
// display(function () {
//   console.log("Học JS để làm gì");
// });

// var display = function (callback) {
//   typeof callback === "function" && callback();
// };

// var handleDisplay = function (text) {
//   console.log("Học JS để làm gì");
//   console.log(text);
// };
// display(function () {
//   handleDisplay("F8");
// });

// Từ khoá arguments

// Rest Paraneter (Tham số còn lại)

// var count = 0;
// var id = setInterval(function () {
//   console.log("Học lập trình làm gì", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

var getA = function (callback) {
  setTimeout(function () {
    console.log("getA");
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};
var getB = function (callback) {
  setTimeout(function () {
    console.log("getB");
    if (typeof callback === "function") {
      callback();
    }
  }, 500);
};
var getC = function (callback) {
  setTimeout(function () {
    console.log("getC");
    if (typeof callback === "function") {
      callback();
    }
  }, 1500);
};
getA(function () {
  getB(getC);
});
/* Buổi sau:
- Định nghĩa hàm con
- Closure
- Kỹ thuật Thunk Function
- IIFE
- Giải thuật đệ quy

Tìm hiểu sau:
- Async Function
- Generator Function
*/
