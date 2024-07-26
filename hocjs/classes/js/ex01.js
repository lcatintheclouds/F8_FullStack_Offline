class Person {
  // Thuộc tính
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
// Enhanced Object Literals
var person = new Person("Nguyễn Văn A", "nguyenvana@email.com");
console.log(person);

class User extends Person {
  constructor(name, email) {
    console.log("Constructor của User");
    super(name, email);
  }
  getInfo() {
    return [this.getName(), this.getEmail()];
  }
}
var user = new User("Nguyễn Văn B", "nguyenvanb@email.com", "admin");
console.log(user);
