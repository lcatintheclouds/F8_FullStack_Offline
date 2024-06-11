// Bài 1:
console.log("Bài 1:");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
console.log("Cho mảng: A =", arrA, "và B = ", arrB);
var result = arrA.filter(function (item) {
  return arrB.includes(item);
});
console.log("Kết quả giao giữa 2 mảng là: ", result);
console.log("------------------------------------------------------");

// Bài 2:
console.log("Bài 2:");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var isResult = [];
console.log("Cho mảng:", arr);
var isFlat = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (Array.isArray(item)) {
      isFlat(item);
    } else {
      isResult.push(item);
    }
  }
  return isResult;
};
console.log("Mảng sau khi làm phẳng: ", isFlat(arr));
console.log("------------------------------------------------------");

// Bài 3:
console.log("Bài 3:");
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
console.log("Cho mảng:", arr);
var strings = [];
var numbers = [];
var booleans = [];
arr.forEach(function (array) {
  array.forEach(function (item) {
    if (typeof item === "string") {
      strings.push(item);
    } else if (typeof item === "number") {
      numbers.push(item);
    } else if (typeof item === "boolean") {
      booleans.push(item);
    }
  });
});
var result = [strings, numbers, booleans];
console.log("Mảng sau khi tách:", result);
console.log("------------------------------------------------------");

// Bài 4:
console.log("Bài 4:");
