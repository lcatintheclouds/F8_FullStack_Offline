/* 
let, const ==> Chỉ hoạt động trong scope mà nó khai báo ( cả với block scope )
let: 
- Được phép gán lại
- Không được khai báo lại trong cùng 1 scope
const: 
- Không được gán lại
- Khi khai báo phải gán luôn
*/
// let a = 10;
// if (a >= 10) {
//   let b = 20;
//   console.log(b);
// }
// console.log(b);

// let a = 10;
// a = 20;
// console.log(a);

// const a = 10;
// a = 20;
// console.log(a);

// const user = {
//   name: "User 1",
//   age: 20,
//   address: "HN",
// };

// user.name = "User 2";
// console.log(user);

var something = function () {
  console.log("Something");
};
var something = function () {
  console.log("Something 2");
};
something();
