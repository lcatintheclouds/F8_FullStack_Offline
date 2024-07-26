// HTMLElement.prototype.css = function (styles) {
//   Object.assign(this.style, styles);
// };
// var title = document.querySelector(".title");
// console.dir(title);
// title.css({
//   color: "red",
//   background: "yellow",
//   fontSize: "2rem",
// });

// Web Component

// Bước 1: Khởi tạo class kế thừa từ HTMLElement
// class HelloWorld extends HTMLElement {
//   static observedAttributes = ["color", "size"];
//   //   constructor() {
//   //     super();
//   //     // this.innerHTML = "Học lập trình không khó";
//   //   }
//   connectedCallback() {
//     console.log("connectedCallback");
//     this.innerHTML = "<h1>Học lập trình làm gì <button>Click me</button></h1>";
//     var btn = this.querySelector("button");
//     var _this = this;
//     btn.addEventListener("click", function () {
//       _this.setAttribute("color", "red");
//       _this.setAttribute("size", "M");
//     });
//   }
//   disconnectedCallback() {
//     console.log("disconnectedCallback");
//   }
//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(name, oldValue, newValue);
//   }
// }
// // Bước 2: Đăng ký component
// customElements.define("hello-world", HelloWorld);

// var btn = document.querySelector(".btn");
// var root = document.querySelector("#root");
// var HelloWorldEl = document.createElement("hello-world");
// var isShow = false;
// // HelloWorldEl.setAttribute("color", "red");
// btn.addEventListener("click", function () {
//   if (!isShow) {
//     root.append(HelloWorldEl);
//     isShow = true;
//   } else {
//     HelloWorldEl.remove();
//     isShow = false;
//   }
// });

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.innerHTML = this.render();
    this.loadStyle();
    this.addEvenChangeTheme();
    this.addItem();
  }
  loadStyle() {
    var style = document.createElement("style");
    style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .todo-app {
        border: 1px solid red;
        padding: 20px;
    }
    .light {
        border: 1px solid red;
        padding: 20px;
        color black;
        background: white;
    }
    .dark {
        border: 1px solid orange;
        padding: 20px;
        color: white;
        background: black;
    }
    `;
    this.shadowRoot.append(style);
  }
  render() {
    this.shadow.innerHTML = `<div class="todo-app"><h1>Todo App</h1>
    <div>
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    </ul>
    <input type="text" placeholder="Enter todo" />
    <button>Add</button>
    </div>
    <button class="light-btn">Light Theme</button>
    <button class="dark-btn">Dark Theme</button></div>`;
  }
  addEvenChangeTheme() {
    var btnLight = this.shadowRoot.querySelector(".light-btn");
    var btnDark = this.shadowRoot.querySelector(".dark-btn");
    var todoApp = this.shadowRoot.querySelector(".todo-app");
    btnLight.addEventListener("click", function () {
      todoApp.classList.remove("dark");
      todoApp.classList.add("light");
    });
    btnDark.addEventListener("click", function () {
      todoApp.classList.remove("light");
      todoApp.classList.add("dark");
    });
  }
  addItem() {
    var btnAdd = this.shadowRoot.querySelector("button");
    var input = this.shadowRoot.querySelector("input");
    btnAdd.addEventListener("click", function () {
      if (!input.value) {
        alert("Input trống");
      } else {
        var li = document.createElement("li");
        li.innerText = input.value;
        var ul = document.querySelector("ul");
        ul.append(li);
        input.value = "";
      }
    });
  }
}
customElements.define("todo-app", TodoApp);

// Tạo shadow root
// var boxEl = document.querySelector(".box");
// var shadowRoot = boxEl.attachShadow({ mode: "open" });
// shadowRoot.innerHTML = `<h1>Học lập trình không khó</h1>`;
// var style = document.createElement("style");
// style.textContent = `
// h1 {
//     color: red;
// }
// `;
// shadowRoot.append(style);

// // Từ boxEl ==> thay đổi text của h1
// var h1 = boxEl.shadowRoot.querySelector("h1");
// console.log(h1);

// Khi element đã được attachShadow ==> Không loại bỏ shadow, không attach lại được

// Buổi sau: Template, Slot, Custom 1 thư viện nhỏ
