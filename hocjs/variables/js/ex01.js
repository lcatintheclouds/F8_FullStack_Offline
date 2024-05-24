/* 
Biến (Variable)
- Cú pháp trong lập trình cho phép lưu trữ dữ liệu tạm thời
- Biến được lưu ở RAM
- Biến có thể đặt tên tuỳ ý theo nguyên tắc sau:
+ Chứa những chữ thường, hoa, số, gạch dưới, $
+ Không được bắt đầu bằng số
+ Nên đặt tên biến theo quy tắc camelCase
+ Nên đặt tên biến tường minh
*/

// Khai báo biến
var userId, customerName, username, userEmail;

var customer;
var customerEmail;

var course = "Fullstack",
  coursePrice = 12000;

customer = "Lê Công Anh Tú";

//Hiển thị dữ liệu

// 1. hiển thị ở tab console trình duyệt
console.log(customer);
console.log(course);
console.log(userEmail);

// 2. Hiển thị lên giao diện trình duyệt

// 2.1 Dùng document.write()
document.write(customer);

// 2.2 Dùng DOM (Document Object Model)
// document.body.innerHTML = course;

// Lưu ý: Giá trị của biến có thể đưa vào cả 1 chuỗi HTML
// var wellcome = "<h2>Học " + course + " JS không khó</h2>";
// Ký hiệu backtick (`) --> Template String
var wellcome = `<h2>Học ${course} không khó</h2>
<h2>Học ${course} không khó</h2>`;

document.write(wellcome);

// 8 kiểu trong JS

/* 
1. String: chuỗi
2. Number: sô
3. BigInt: số nguyên lơn
4. Boolean: logic (đúng, sai)
5. Undefined: không xác định
6. Null: rỗng
7. Symbol
8. Object: đối tượng

Chia thành 2 nhóm:
- Kiểu dữ liệu nguyên thuỷ
+ String
+ Number
+ BigInt
+ Boolean
+ Undefined
+ Null
+ Symbol
- kiểu dữ liệu tham chiếu
+ Object
*/
