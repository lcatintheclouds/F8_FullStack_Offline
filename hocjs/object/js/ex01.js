// Object = đối tượng, mô tả thông tin cụ thể của đối tượng cần
/* 
- Thuộc tính: Đặc điểm của đối tượng (Biến)
- Phương thức: Hành động của đối tượng (Hàm)

2 cách để tạo Object:
- Object literal (object nguyên bản)
- Constructors: Tạo object từ function
Object hoặc dùng kí hiệu {}
*/

console.dir(Object);
var user = {
  // key: value
  name: "Hoàng An F8",
  emai: "hoangan.web@gmail.com",
  getName: function () {
    // đây là phương thức ( phương thức là 1 hàm)
    return "Hoàng An";
  },
  profile: {
    age: 32,
    address: "Hà Nội",
    "shipping-address": "Sài Gòn", // nếu key có gạch ngang thì phải có dấu nháy
  },
};

/* user.email = "contact@fullstack.edu.vn";
user.course = "fullstack";
delete user.getName;
console.log(user); */
// cách truy cập vào 1 object ( phương thức)
/* console.log(user.name);
console.log(user.email);
console.log(user.getName());
console.log(user.profile.age);
console.log(user.profile.address);
console.log(user.profile["shipping-address"]); // nếu gọi key có gạch ngang thì phải có [] và trong đó có dấu nháy
 */

// Duyệt các key của object
/* for (var key in user) {
  if (typeof user[key] === "function") {
    user[key]();
  } else if (typeof user[key] !== "object" || user[key] === null) {
    console.log(user[key]);
  }
} */

// Bài tập:
// Nối 2 object (không dùng hàm có sẵn của object)
var obj1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var obj2 = {
  age: 32,
  role: "teacher",
};
var obj3 = {};
for (var key in obj1) {
  obj3[key] = obj1[key];
}
for (var key in obj2) {
  obj3[key] = obj2[key];
}
// console.log(obj3);

// Object.keys()  ==> Trả về 1 array chứa các key của object

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
};
console.log(Object.keys(user));

// kiểm tra 1 object có empty hay không?
/* if (Object.keys(user).length) {
  console.log("Có phần tử");
} else {
  console.log("Không có phần tử");
} */

// Object.values() ==> Trả về 1 mảng chứa các value của object
console.log(Object.values(user));

// Object.entries() ==> Trả về 1 mảng 2 chiều chứa cả key và values của object
console.log(Object.entries(user));

// Object.fromEntries() ==> Trả về 1 object từ 1 mảng 2 chiều
var arr = [
  ["name", "Hoàng An"],
  ["email", "hoangan.web@gmail.com"],
  ["age", 32],
];
console.log(Object.fromEntries(arr));

// Bài tập:
// Không dùng hàm có sẵn để xử lý URL
var query = {
  category: 1,
  keyworld: "Khoá học Fullstack",
  status: true,
};
// Chuyển thành query string: category=1&keyword=Khoá+học+Fullstack&status=true
var queryString = Object.entries(query)
  .map(function (entryItem) {
    return entryItem.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

// Chuyển ngược lại
var allowArr = ["true", "false"];
var query = queryString.split("&").map(function (item) {
  var arr = item.split("=");
  if (!isNaN(+arr[1])) {
    arr[1] = +arr[1];
  } else if (allowArr.includes(arr[1])) {
    arr[1] = arr[1] === "true";
  } else {
    arr[1] = arr[1].replaceAll("+", " ");
  }
  return arr;
});
query = Object.fromEntries(query);
console.log(query);

// Typescript

// Object.assign(target, source1, source2, ..., sourceN) ==> Nối các source vào target (thay đổi object ban đầu)
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var course = {
  courseName: "Fullstack",
  coursePrice: 12000,
};
var result = Object.assign({}, user, course);
console.log(result);
console.log(user);
