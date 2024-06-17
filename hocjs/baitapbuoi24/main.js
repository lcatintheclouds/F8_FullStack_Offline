// Bài 1:
console.log("Bài 1:");
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

var getError = function (field) {
  if (typeof field === "string") {
    var fieldArr = [];
    fieldArr = field.split(".");
    if (fieldArr.length > 1) {
      return errors[fieldArr[0]][fieldArr[1]];
    }
    return errors[field]["required"];
  }
};
console.log(getError("name"));
console.log(getError("name.min"));
console.log(getError("email"));
console.log(getError("email.unique"));
console.log("------------------------------------------------------");

// // Bài 2:
// console.log("Bài 2:");
// const customers = [
//   { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
//   { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
//   { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
// ];

// const result = createCustomers(customers);

// result = [
//   { name: "Nguyễn Văn B", age: 2, address: "Hai Phong", shortName: "Nguyễn B" },
//   { name: "Nguyễn Văn A", age: 11, address: "Ha Noi", shortName: "Nguyễn A" },
//   { name: "Nguyễn Văn C", age: 12, address: "TP.HCM", shortName: "Nguyễn C" },
// ];
// console.log("------------------------------------------------------");

// // Bài 3:
// console.log("Bài 3:");
// const data = [];
// const dataRegister = handleRegister(
//   "Nguyen Van A",
//   "123456",
//   "nguyenvana@email.com"
// );
// const dataRegister = handleRegister(
//   "Nguyen Van B",
//   "1234567",
//   "nguyenvanb@email.com"
// );
// const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
// data = [
//   {
//     name: "Nguyen Van A",
//     password: "123456",
//     email: "nguyenvana@email.com",
//     role: "user",
//   },
//   {
//     name: "Nguyen Van B",
//     password: "1234567",
//     email: "nguyenvanb@email.com",
//     role: "user",
//   },
// ];
// dataLogin = {
//   name: "Nguyen Van B",
//   password: "1234567",
//   email: "nguyenvanb@email.com",
//   role: "user",
// };
