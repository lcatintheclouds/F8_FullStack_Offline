// Bài 1:
console.log("Bài 1:");
Array.prototype.push2 = function (...element) {
  var _this = this.length;
  element.forEach((item) => {
    this[_this++] = item;
  });
  return this.length;
};
var arrA = [1, 2, 3, 4];
console.log("Cho mảng: ", arrA);
arrA.push2(5, 6, 7, 8);
console.log("Mảng mới: ", arrA);
console.log("------------------------------------------------------");

// Bài 2:
console.log("Bài 2:");
Array.prototype.filter2 = function (callbackFn) {
  var newData = [];
  for (var i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newData.push(this[i]);
    }
  }
  return newData;
};
var numbers = [6, 2, 3, 4, 5];
console.log("Cho mảng: ", numbers);
var result = numbers.filter2(function (number) {
  if (number > 2) {
    return number;
  }
});
console.log("Kết quả: ", result);
console.log("------------------------------------------------------");

// Bài 3:
/* console.log("Bài 3:");
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];
*/
