// Khai báo mảng
// var users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users);

// Kiểm tra số lượng phần tử
// console.log(users.length);

// Kiểm tra 1 biến có phải là mảng hay không?
// console.log(Array.isArray(users));

// Thêm phần tử vào cuối mảng
// users[10] = "User 5";
// users[users.length] = "User 5";
// users[users.length] = "User 6";
// console.log(users);

// Lấy giá trị phần tử
// console.log(users["2"]);

// Sửa giá trị phần tử
// users[2] = "User Update";

// Duyệt mảng: Lặp qua từng phần tử của mảng
// console.log(users);
/* for (var i = 0; i < users.length; i++) {
  var value = users[i];
  console.log(value);
} */

/* for (var index in users) {
  console.log(index, typeof index);
  var value = users[index];
  console.log(value);
} */

/* for (var value of users) {
  //chỉ áp dụng bên mảng
  console.log(value);
} */

// Xoá mảng: Tạo ra 1 mảng mới không có phần tử đã xoá
/* console.log(users);
var indexDelete = 2;
var newUsers = [];
for (var index in users) {
  if (+index === indexDelete) {
    continue;
  }
  var value = users[index];
  newUsers[newUsers.length] = value;
}
console.log(newUsers); */

// Bài tập: Thêm phần tử mới vào đầu mảng (Không dùng hàm sử lý mảng, cú pháp ES6)
// console.log(users);
// var newValue = "User 0";
// var newUsers = [newValue];
// for (var value of users) {
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

// Bài tập 2:
var users = [
  "Tạ Hoàng An",
  "Nguyễn Tuấn Anh",
  "Nguyễn Văn Dũng",
  "Phạm Văn Hiếu",
];
var keyword = "an";
// Yêu cầu: Xoá tất cả các phần tử mảng có chưa keyword (Không phân biệt hoa, thường)
newUsers = [];
for (var index in users) {
  var value = users[index];
  if (value.toLowerCase().includes(keyword.toLowerCase())) {
    continue;
  }
  newUsers[newUsers.length] = value;
}
// console.log(newUsers);

var number = [5, 2, 1, 9, 6];
// Yêu cầu: Tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên
var max = numbers[0]; //Giả định max là phần tử đầu tiên
var indexMax = 0;
for (var index in numbers) {
  var value = numbers[index];
  if (max < value) {
    max = value;
    indexMax = index;
  }
}
numbers[indexMax] = numbers[0];
number[0] = max;
console.log(numbers);
