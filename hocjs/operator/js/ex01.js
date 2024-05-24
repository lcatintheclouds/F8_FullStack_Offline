// Biểu thức = toán tử + toán hạng
// total = a + b * c

// 1. Toán tử số học
// +, -, *, /
// var a = 10;
// var b = "0";
// var c = a / b;
// var c = a + b;
// console.log(c);
// var a = 10;
// var b = 2;
// var c = a ** b;
// console.log(c);
var a = 10;
// a = a + 1;
a++;
++a;
console.log(a);

/* 
Phân biệt a++ và ++a

1. Giống nhau:
- Đều tăng biến a lên 1 đơn vị
2. Khác nhau:
- a++ ==> Giá trị biểu thức sẽ trả về trước khi bến a được tăng
- ++a ==> Giá trị biểu thức sẽ trả về sau khi biến a được tăng
*/
// var a = 1;
// var b = a++;
// console.log(`a = ${a}`, `b = ${b}`);

// var a = 1;
// var b = ++a;
// console.log(`a = ${a}`, `b = ${b}`);

// // Bài tập
// var count = 1;
// var total = count++ + ++count + 5 + count++ + ++count;
// console.log(total);

// var count = 1;
// var total = count++ + ++count + 5 + count++;
// console.log(total);

// 2. Toán tử so sánh
//  >, <, >=, <=, ==, ===, !=, !==
//  ==> Lưu ý: kết quả khi sử dụng toán tử so sánh ==> Trả về kiểu dữ liệu Boolean (true, false)
// var a = 10;
// var b = 10;
// var c = a === b;
// console.log(c);

// 3. Toán tử gán (=)
// var a = 10;
// // a = a + 5;
// a += 5;
// a *= 5;
// a /= 5;
// a %= 5;
// a -= 5;
// a **= 5;
// console.log(a);

// var a = 5;

// 4. Toán tử lý luận
//  - and (&&)
//  - or (||)
//  - not (!)
// var a = 10;
// var b = a >= 5 && a <= 15;
// var b = a < 0 || a >= 10;
// var b = !(a < 0 || a >= 10);
// console.log(b);

// 5. Toán tử 3 ngôi
// dieukien ? giatridung : giatrisai
// var a = 9;
// var b = a >= 10 ? 20 : 0
// console.log(b);
var a = 5;
var b = 10;
var c = a ** b;
console.log(c);
var a = Math.pow(5, 10);
console.log(a);
