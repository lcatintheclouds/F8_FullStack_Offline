// function User() {
//   this.name = "Hoàng An";
//   this.email = "hoangan.web@gmail.com";
//   this.find = function () {
//     return {
//       name: this.name,
//       email: this.email,
//     };
//   };
// }
// function Authentication() {
//   User.call(this);
//   // Thay đổi this của User thành đối tượng của Authentication
//   this.getProfile = function () {
//     return this.find();
//   };
// }

// var auth = new Authentication();
// console.log(auth.getProfile());
// console.log(auth.find());
// Gợi í: tìm hiểu hàm call()

// var users = [
//   {
//     id: 1,
//     name: "User 1",
//     email: "user1@gmail.com",
//     status: true,
//     createdAt: "2024-06-18 00:00:00",
//     updateAt: "2024-06-18 00:00:00",
//   },
//   {
//     id: 2,
//     name: "User 2",
//     email: "user2@gmail.com",
//     status: false,
//     createdAt: "2024-06-18 00:00:00",
//     updateAt: "2024-06-18 00:00:00",
//   },
//   {
//     id: 3,
//     name: "User 3",
//     email: "user3@gmail.com",
//     status: true,
//     createdAt: "2024-06-18 00:00:00",
//     updateAt: "2024-06-18 00:00:00",
//   },
// ];
// console.log(users);

// // Xây dựng tầng Transformer
// function BaseTransformer(data) {
//   // Code
//   var _this = this;
//   return data.map(function (item) {
//     return _this.response(item);
//   });
//   //   console.log(this);
//   //   console.log(data);
// }
// function UserTransformer(data) {
//   this.response = function (resource) {
//     return {
//       UID: resource.id,
//       fullname: resource.name,
//       email: resource.email,
//       status: resource.status,
//       status_text: resource.status ? "active" : "inactive",
//       created_at: resource.createdAt,
//       update_at: resource.updateAt,
//     };
//   };
//   return BaseTransformer.call(this, data);
// }
// var output = new UserTransformer(users);
// console.log(output);

// Toán tử optional chaining ( ?. )
// var user = null;
// console.log(user?.message);

// var user = {};
// console.log(user.getName?.());

// var users = [];
// // Xử lý logic
// if (users.length) {
//   users.forEach(function (user) {
//     console.log(user);
//   });
// }

// Tham chiếu
// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// // var b = a;
// // var b = Object.assign({}, a);
// // var b = { ...a };
// var b = JSON.parse(JSON.stringify(a)); // Deep
// b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);
// // Clone object

var data = {
  users: ["User 1"],
};
function getNewData() {
  //   var value = data;
  var value = Object.assign({}, data);
  value.message = "Hello";
  return value;
}

console.log(getNewData());
console.log(data);
