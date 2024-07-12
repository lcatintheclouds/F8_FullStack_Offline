var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = "Count: ";
// var span = document.createElement("span");
// span.innerText = "0";
// h1.append(span);
var countNumberNode = document.createTextNode("0");
h1.append(countNumberNode);
var plusBtn = document.createElement("button");
plusBtn.innerText = "+";
// var minusBtn = document.createElement("button");
// minusBtn.innerText = "-";

plusBtn.addEventListener("click", function () {
  //   span.innerText++;
  //   countNumberNode.textContent = Number(countNumberNode.textContent) + 1;
  countNumberNode.data++;
  if (countNumberNode.data >= 10) {
    countNumberNode.remove();
  }
});

// minusBtn.addEventListener("click", function () {
//   //   span.innerText--;
//   //   countNumberNode.textContent = Number(countNumberNode.textContent) - 1;
//   countNumberNode.data--;
// });

root.append(h1);
root.append(plusBtn);
// root.append(minusBtn);

// Comment Node
// var Comment = document.createComment("Đây là comment demo");
// document.body.append(Comment);
// setTimeout(function () {
//   var commentLiveServer = Array.from(document.body.childNodes).find(function (
//     node
//   ) {
//     return (
//       node.nodeName === "#comment" && node.nodeValue.includes("live-server")
//     );
//   });
//   if (commentLiveServer) {
//     commentLiveServer.data = "Code injected by F8";
//   }
// }, 1000);

// // cloneNodes() ==> Sao chép 1 node
// var h1 = document.createElement("h1");
// h1.innerText = "Học JS";
// for (var i = 0; i < 10; i++) {
//   var h1 = h1.cloneNode(true);
//   root.append(h1);
// }

var ul = document.createElement("ul");
var li = document.createElement("li");
// li.innerText = "Tên công việc";
// ul.append(li);
var input = document.createElement("input");
input.placeholder = "Name...";
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    var name = e.target.value;
    var todoItem = li.cloneNode(true);
    // todoItem.innerText = `${name}`;
    todoItem.innerHTML = `${name
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")}`;
    ul.append(todoItem);
    e.target.value = "";
  }
});
root.append(ul);
root.append(input);
