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

document.addEventListener("DOMContentLoaded", function () {
  const posts = [
    {
      title: "Tiêu đề bài viết 1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
      image: "https://picsum.photos/200",
    },
    {
      title: "Tiêu đề bài viết 2",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
      image: "https://picsum.photos/200",
    },
    {
      title: "Tiêu đề bài viết 3",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
      image: "https://picsum.photos/200",
    },
  ];

  const contentDiv = document.getElementById("content");

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const img = document.createElement("img");
    img.src = post.image;
    img.alt = post.title;

    const textDiv = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = post.title;

    const content = document.createElement("p");
    content.innerText = post.content;

    textDiv.appendChild(title);
    textDiv.appendChild(content);

    postDiv.appendChild(img);
    postDiv.appendChild(textDiv);

    contentDiv.appendChild(postDiv);
  });
});
