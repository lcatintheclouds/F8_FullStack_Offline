// Bài 1:
console.log("Bài 1:");
function total(...args) {
  var sum = 0;
  for (var value of args) {
    if (typeof value !== "number" || isNaN(value)) {
      console.log(value, "Không hợp lệ!");
    } else {
      sum += value;
    }
  }
  return sum;
}
var something = total(1, "a", null, undefined, 2);
console.log(something);
console.log("------------------------------------------------------");

// Bài 2:
console.log("Bài 2:");
Number.prototype.getCurrency = function () {
  var s = "",
    temp,
    num = this.toString().split("."),
    n = num[0];
  while (n.length > 3) {
    temp = n.substring(n.length - 3);
    s = "," + temp + s;
    n = n.slice(0, -3);
  }
  if (n) {
    s = n + s;
  }
  return s;
};
String.prototype.getCurrency = function () {
  var number = parseInt(this);
  if (!number) {
    console.log("Không hợp lệ!");
  }
  return number.getCurrency();
};
var price = "12000000";
console.log(price.getCurrency("đ"));
console.log("------------------------------------------------------");

// Bài 3:
console.log("Bài 3:");
// var categories = [
//   {
//     id: 1,
//     name: "Chuyên mục 1",
//     parentIdId: 0,
//   },
//   {
//     id: 2,
//     name: "Chuyên mục 2",
//     parentIdId: 0,
//   },
//   {
//     id: 3,
//     name: "Chuyên mục 3",
//     parentIdId: 0,
//   },
//   {
//     id: 4,
//     name: "Chuyên mục 2.1",
//     parentIdId: 2,
//   },
//   {
//     id: 5,
//     name: "Chuyên mục 2.2",
//     parentIdId: 2,
//   },
//   {
//     id: 6,
//     name: "Chuyên mục 2.3",
//     parentIdId: 2,
//   },
//   {
//     id: 7,
//     name: "Chuyên mục 3.1",
//     parentIdId: 3,
//   },
//   {
//     id: 8,
//     name: "Chuyên mục 3.2",
//     parentIdId: 3,
//   },
//   {
//     id: 9,
//     name: "Chuyên mục 3.3",
//     parentIdId: 3,
//   },
//   {
//     id: 10,
//     name: "Chuyên mục 2.2.1",
//     parentIdId: 5,
//   },
//   {
//     id: 11,
//     name: "Chuyên mục 2.2.2",
//     parentIdId: 5,
//   },
// ];
// function buildTreeArray(flatArray) {
//   // Use reduce to create a nodeMap
//   const nodeMap = flatArray.reduce((acc, item) => {
//     acc[item.id] = { ...item, children: [] };
//     return acc;
//   }, {});

//   // Recursive function to build nodes
//   const buildNode = (id) => {
//     const node = nodeMap[id];
//     if (!node) return null;

//     // Filter flatArray for items with parentIdId === id
//     node.children = flatArray
//       .filter((item) => item.parentIdId === id)
//       .map((item) => buildNode(item.id));

//     return node;
//   };

//   // Filter flatArray for root nodes
//   return flatArray
//     .filter((item) => item.parentIdId === null)
//     .map((item) => buildNode(item.id));
// }

// const commentsTree = buildTreeArray(categories);
// // console.log(commentsTree);
// console.log(JSON.stringify(commentsTree, null, 2));

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];
function categoriesNested(category) {
  const nodeMap = {};
  const result = [];
  category.forEach(function (arr) {
    nodeMap[arr.id] = { ...arr, children: [] };
  });
  category.forEach(function (arr) {
    var node = nodeMap[arr.id];
    if (arr.parent !== 0) {
      nodeMap[arr.parent].children.push(node);
    } else {
      result.push(node);
    }
  });
  return result;
}
const solution = categoriesNested(categories);
console.log(solution);
console.log("------------------------------------------------------");

// Bài 4:
console.log("Bài 4:");
Array.prototype.reduce2 = function (callback, initialValue) {
  var result = initialValue;
  for (var i = 0; i < this.length; i++) {
    if (result) {
      result = callback.call(undefined, result, this[i], i, this);
    } else {
      result = this[i];
    }
  }
  return result;
};
var numbers = [1, 2, 3, 4];
console.log("Ví dụ:");
console.log("Cho:", numbers);
var total = numbers.reduce2(function (a, b) {
  return a + b;
});
console.log("SUM: ", total);
