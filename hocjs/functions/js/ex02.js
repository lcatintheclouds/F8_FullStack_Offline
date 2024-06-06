// var a = 10;
// var getA = function () {
//   console.log("getA");
// };
// console.log(a);
// getA();

// Thuộc object là window
// console.log(window);

// console.log(window.a);
// window.getA();

// window.console.log("Hello anh em F8");

// Mọi thứ được tạo ra trong JS đều nằm trong window (chỉ áp dụng với client)

// Cú pháp truy cập: tenObject.tenHam() hoặc tenObject.tenbien

// Hàm con
// function display() {
//   function showUser() {
//     console.log("Hoàng An F8");
//   }
//   showUser();
// }
// display();

/* 
Định nghĩa hàm bên trong 1 hàm khác, có thể:
- Chỉ được gọi hàm đó bên trong hàm khác (closure)
- Được phép sử dụng:
+ Biến toàn cục
+ Tham số của hàm cha
+ Biến cục bộ của hàm cha
+ Tham số của chính nó
*/

function display() {
  function showUser() {
    console.log("Hoàng An F8");
  }
  return showUser;
}

//  ==> Chủ động gọi hàm con ở bên ngoài phạm vi
var showUser = display();
// console.log(showUser);
showUser(); //Kĩ thuật này gọi là Thunk Function

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

// Bước 1: tạo hàm con
var add = sum(10);

// Bước 2: Gọi hàm con
// var result1 = add(10);
// console.log(result1);
// var result2 = add(20);
// console.log(result2);
// var result3 = add(30);
// console.log(result3);

// IIFE (Immediately Invoked Function Expresion)

(function (a) {
  console.log("Học JS không khó", a);
})("F8");

// Giải thuật đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

// S = 1 + 2 + 3 + 4 + ... + n
// Tính tổng bằng cách sử dụng đệ quy
// function getTotal(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + getTotal(n - 1);
// }

// var result = getTotal(10);
// console.log(result);

function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(15));
