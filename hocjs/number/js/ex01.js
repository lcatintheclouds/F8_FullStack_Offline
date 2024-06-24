// Number: Kiểu dữ liệu nguyên thuỷ, thể hiện các giá trị số
console.dir(Number);

var a = 12;
// console.log(a, typeof a);

// Kiểm tra 1 biến có phải number không?
/* 
- typeof = number
- Không phải NaN (Not a Number)
- Không phải Infinity
*/

// Ép kiểu:
// Cách 1: Dùng hàm Number
var a = "12"; //String
// a = Number(a);
a = +a;
console.log(a, typeof a);

// Cách 2: Dùng hàm parseInt, parseFloat
var a = "12.5"; //String
// a = parseInt(a);
a = parseFloat(a);
console.log(a, typeof a);

// Tự động ép kiểu: Khi gặp các toán tử số học (Trừ phép +)

var a = 10;
var b = "5";
console.log(a + b, typeof (a + b));
console.log(a - b, typeof (a - b));

// Số NaN (Not a Number) ==> Giá trị khi ép kiểu / tính toán thất bại
/* var a = NaN;
if (isNaN(a)) {
  console.log("Số NaN");
} */

// Số Infinity ==> Vượt quá khả năng lưu trữ
/* var a = 1000 ** 1000;
var b = 2000 ** 2000;
console.log(a, typeof a);
console.log(b, typeof b);
console.log(a === b); */

// toFixed(number) ==> Lấy số chữ số phần thập phân và tự động làm tròn
var price = 123456.789;
// console.log(price.toFixed(1));

console.log(price.toPrecision(3));

// ==> Dùng hàm toFixed và toPrecision ==> Trả về chuỗi

// toLocaleString() ==> Định dạng số theo quốc gia / Khu vực
console.log(price.toLocaleString("zh-Hans-CN-u-nu-latn"));

// Math =>> Toán học
/* 
abs: Trị tuyệt đối
ceil: làm tròn lên
floor: làm tròn xuống
max: tính số lớn nhất
min: tính số nhỏ nhất
pow: luỹ thừa (có thể dùng **)
round: làm tròn
random: ngẫu nhiên

*/
