// Chuỗi: Tập hợp các ký tự
var fullname = "Anh Tú";
console.log(fullname);

// Kiểm tra kiểu dữ liệu chuỗi
if (typeof fullname === "string") {
  console.log("kiểu chuỗi");
}

// Ép kiểu dữ liệu khác về chuỗi
var number = 20;
// number = number + "";
number = String(number);
console.log(number, typeof number);

var a = 1;
a = Boolean(a);
console.log(a, typeof a);

// String, Boolean, Number ==> Hàm tạo (Function Constructor)

console.log(String.prototype);
