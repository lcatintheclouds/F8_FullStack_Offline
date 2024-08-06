// OOP ==> SOLID
class Person {
  // Khai báo
  //   name = "Hoàng An";
  //   email = "hoangan.web@gmail.com";
  name;
  email;
  #income = 10000; // Private Property
  static message = "Ok chưa?"; // Static Property
  #data = ["User 1", "User 2", "User 3"];
  constructor(name, email) {
    console.log("Phương thức khởi tạo");
    // Khởi tạo thuộc tính
    this.name = name;
    this.email = email;
  }
  getIncome() {
    return this.#income;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail()];
  }
  //   static Method
  static getMessage() {
    return this.message;
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(value) {
    this.#data.push(value);
  }
}
const person = new Person("Hoàng An", "hoangan.web@gmail.com"); //instance
person.latest = "User 4";
console.log(person.latest);
// console.log(person.getInfo());
// console.log(Person.message);
// console.log(Person.getMessage());

class User {
  constructor() {
    return {
      name: "Hoàng An",
    };
  }
}
const user = new User();
console.log(user);
