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
function getError(field) {
  if (typeof field !== "string") return "Invalid input type";
  var parts = field.split(".");
  var category = parts[0];
  var errorType = parts[1];
  if (!errors[category]) {
    return "No such category exists";
  }
  if (parts.length > 1 && errors[category][errorType]) {
    return errors[category][errorType];
  } else if (errors[category]["required"]) {
    return errors[category]["required"];
  }
  return "Error message not defined";
}
console.log(getError("name"));
console.log(getError("name.min"));
console.log(getError("email"));
console.log(getError("email.unique"));
console.log("------------------------------------------------------");

// Bài 2:
console.log("Bài 2:");
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
console.log("Mảng ban đầu: ", customers);
function createCustomers(customers) {
  return customers.map(function (item) {
    return {
      name: item.name.trim(),
      age: item.age,
      address: item.address,
      shortName: item.name
        .split("")
        .map(function (item) {
          return item[item.length - 1];
        })
        .join(""),
    };
  });
}
const result = createCustomers(customers);
result.sort(function (a, b) {
  return a.age - b.age;
});
console.log("Mảng sau khi tạo: ", result);
console.log("------------------------------------------------------");

// Bài 3:
console.log("Bài 3:");
const data = [];
function newAccount(name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
  };
}
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Vui lòng nhập đầy đủ thông tin");
  }
  if (email.indexOf("@") === -1) {
    console.log("Email không hợp lệ");
  }
  if (password.length < 6) {
    console.log("Password phải có trên 6 ký tự");
  }
  if (email.indexOf("@") === -1 || password.length < 6) {
    console.log("Email hoặc Password không hợp lệ");
  }
  var newData = newAccount(name, password, email);
  newData.role = "user";
  data.push(newData);
  return newData;
}
function handleLogin(email, password) {
  for (var user of data) {
    if (user.email === email && user.password === password) {
      return user;
    }
  }
  return "Thông tin đăng nhập không hợp lệ";
}
const dataRegister1 = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(data);
console.log("DataLogin: ", dataLogin);
