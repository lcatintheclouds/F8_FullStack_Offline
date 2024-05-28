/* 
Câu lệnh rẽ nhánh
- Thực thi các đoạn code dựa vào điều kiện 
- 4 trường hợp
+ Câu lệnh rẽ nhánh thiếu
+ Câu lệnh rẽ nhánh đầy đủ
+ Câu lệnh rẽ nhiều nhánh
+ Câu lệnh rẽ nhánh lồng nhau

Câu lệnh:
- if else
- switch case
*/

var number = 5;
// if (number >= 10) {
//   console.log("đúng");
// } else {
//   console.log("sai");
// }

// if (number < 0) {
//   console.log("số âm");
// } else if (number >= 0 && number < 5) {
//   console.log("số siêu nhỏ");
// } else if (number >= 5 && number < 10) {
//   console.log("số nhỏ");
// } else if (number >= 10 && number < 15) {
//   console.log("số trung bình");
// } else {
//   console.log("số lớn");
// }

/* var email = "";
var password = "";
if (!email || !password) {
  if (!email) {
    console.log("Vui lòng nhập email");
  } else {
    console.log("Vui lòng nhập password");
  }
} else {
  console.log("Thông tin đầy đủ");
} */

/* 
Quy ước 
- Lương <= 5tr --> thuế 0%
- Lương > 5tr và < 15tr --> thuế 3%
- >= 15tr --> thuế 5%
*/

var salary = 5000000;
var tax; //phần trăm thuế
var income; //thu nhập
if (salary <= 5000000) {
    tax = 0;
} else if (salary < 15000000) {
    tax = 3;
} else {
    tax = 5;
}
income = salary - (salary * tax) / 100;
console.log(income);
 else {
    console.log("Không hợp lệ!");
}

var saleRate = 5; // Phần trăm giảm giá
var salePrice = 1000000; //Giảm 5%
//Tìm giá gốc

// salePrice = regularPrice - regularPrice * saleRate / 100;

var regularPrice = salePrice / (1 - salePrice / 100);
console.log(regularPrice)