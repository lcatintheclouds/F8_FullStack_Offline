console.log(String.prototype);

var str = "Học lập trình không khó";

// 1. length: lấy độ dài của chuỗi
console.log(str.length);

console.log(str);

// 2. charAt(index): Lấy kí tự theo index
// console.log(str.charAt(5));
console.log(str[5]);

// 3. charCodeAt(index): lấy kí tự theo index mà chuyển về mã ASCII
console.log(str.charCodeAt(0));

// 4.concat(): Nối chuỗi

// 5. includes(substring): Kiểm tra chuỗi substring có ở trong chuỗi cha hay không? Nếu có trả về true, ngược lại trả về false
console.log(str.includes("Học"));

// 6. indexOf(substring): Kiểm tra chuỗi substring có ở trong chuỗi cha hay không? Nếu có trả về index đầu tiên tìm được, không có trả về -1
console.log(str.indexOf("F8"));

// 7. lastIndexOf(substring): Kiểm tra chuỗi substring có ở trong chuỗi cha hay không? Nếu có trả về index đầu tiên tìm được, không có trả về -1
console.log(str.lastIndexOf("F8"));

// 8. slice(start, end): Cắt chuỗi từ vị trí start đến end-1
console.log(str.slice(5, 10));
console.log(str.slice(5));
console.log(str.slice(-5));

// 9. replace(str1, str2): Thay thế chuỗi str1 = str2 (Thay chuỗi đầu tiên)
console.log(str.replace("lập", "F88"));

// 10. replaceAll: Thay thế tất cả
console.log(str.replaceAll("Học", "F8"));

// 11. repeat(): Lặp chuỗi theo số lần xác định
console.log(str.repeat(5));

// 12. split(): Tách chuỗi thành mảng
console.log(str.split(" "));

// 13. toUpperCase(); Chuyển thành chữ hoa
console.log(str.toUpperCase());

// 14. toLowerCase(); Chuyển thành chữ thường
console.log(str.toLowerCase());

// 15. trim(): Xoá khoảng trắng đầu và cuối chuỗi
// var str = "  Anh Tú  ";
console.log(str);
console.log(str.trim());

// 16. trimStart(): Xoá khoảng trắng đầu chuỗi

// 17. trimEnd(): Xoá khoảng trắng cuối chuỗi

// 18. startsWith(substring): Kiểm tra chuỗi substring có ở cuối chuỗi không
var path = "/khoa-hoc/fullstack";
console.log(path.startsWith("/khoa-hoc"));

// 19. endsWith(substring); Kiểm tra chuỗi substring có ở cuối chuỗi không
console.log(path.endsWith("/fullstack"));

// 20. match(pattern): Cắt chuỗi dựa vào biểu thức chính quy (Regex)
var str = `Hello anh em, so dien thoai cua toi: 0123545857 va so tiep theo: 0198765432`;

var pattern = /(0|\+84)\d{9}/g;
console.log(str.match(pattern));

// Bài tập:
var email = "hoangan@fullstack.edu.vn";
// Lấy username của email
var position = email.indexOf("@");
console.log(position);
var username = email.slice(0, position);
console.log(username);

// Kiểm tra biến fullname có phải tất cả là chữ HOA không?
var fullname = "TẠ HOÀNG AN";
if (fullname === fullname.toUpperCase()) {
  console.log("Viết hoa");
} else {
  console.log("Không viết hoa");
}
