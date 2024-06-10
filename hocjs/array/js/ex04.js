// some(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về giá trị true / false
// - Trả về giá trị true có ít nhất 1 lần return trong callback là truthy

var numbers = [1, 3, 5, 7, 9];
// Kiểm tra trong mảng number có số chẵn hay không
var check = numbers.some(function (value) {
  return value % 2 === 0;
});
console.log(check);

//  every(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về giá trị true / false
// - Trả về giá trị true nếu tất cả các phần tử đều return về truthy

var check = numbers.every(function (value) {
  return value % 2 !== 0;
});
console.log(check);

// find(callback)
// - Cách hoạt động giống filter
// - Khác: trả về phần tử đầu tiên tìm được

var users = ["User 1", "User 2", "User 3", "User 4"];
// var result = users.find(function (value, index) {
//   return index >= 1;
// });
// console.log(result);

// findLast(callback)
// - Cách hoạt động giống filter
// - Khác: trả về phần tử cuối cùng tìm được
var result = users.findLast(function (value, index) {
  return index >= 1;
});
console.log(result);

// Bài tập:
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

// Tìm phần tử giao giữa 2 mảng
// [1, 2]
var result = arrA.filter(function (item) {
  return arrB.includes(item);
});
console.log(result);
