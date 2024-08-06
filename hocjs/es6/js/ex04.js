// Arrow function
// const getMessage = (msg) => {
//   console.log("Hello", msg);
// };
// getMessage("F8");

// const getTotal = (a, b) => a + b;
// console.log("Toán tử:", getTotal(1, 2));

// // const getUser = () => ({ email: "hoangan.web@gmail" }); // với object thì cần ngoặc tròn bên ngoài
// // console.log(getUser());

// const getFullName = () => ["Hoàng An"];
// console.log(getFullName());

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];
// const getUser = (userId) => users.find((user) => user.id === userId);
// console.log(getUser(2));

// Từ khoá this ==> Nhận từ khoá thí của function cha
// Không có từ khoá argument
// Không dùng làm function Constructor
// Không có object prototype
// Không có hoisting

const contentEl = document.querySelector(".content");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const h1 = document.createElement("h1");
  h1.textContent = "Học JS làm gì";
  contentEl.append(h1);
  h1.addEventListener("click", () => {
    console.log(this);
  });
});

// const something = () => {
//   console.log(arguments);
// };
// something();

const User = () => {
  this.email = "hoangan.web@gmail";
};
const user = new User();
