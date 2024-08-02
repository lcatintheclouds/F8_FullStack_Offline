// Destructuring ==> Áp dụng object, array
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   shipping_address: "Ha Noi",
//   age: undefined,
// };

// const { name, email, shipping_address: address, age = 20 } = user;
// console.log(name, email, address, age);

// const { name, ...rest } = user;
// console.log(rest);

// const user = {
//   displayName: "Hoàng An F8",
//   emails: {
//     id: 1,
//     email: "hoangan.web@gmail.com",
//   },
// };

// const {
//   displayName,
//   emails: { email },
// } = user;
// console.log(displayName);
// console.log(email);

// const user = ["Hoàng An", "hoangan.web@gmail.com", 32, "Ha Noi"];
// console.log(user);
// // const [fullname, email, , address] = user;
// // console.log(fullname, email, address);
// const [fullname, ...rest] = user;
// console.log(fullname, rest);

// const something = function ({ name, email }) {
//   console.log(name, email);
// };

// something({ name: "Hoàng An", email: "hoangan.web@gmail.com" });
const users = [
  {
    name: "User 1",
    salary: 1000,
  },
  {
    name: "User 2",
    salary: 2000,
  },
  {
    name: "User 3",
    salary: 3000,
  },
];
const total = users.reduce(function (total, user) {
  return total + user.salary;
}, 0);
console.log(total);
