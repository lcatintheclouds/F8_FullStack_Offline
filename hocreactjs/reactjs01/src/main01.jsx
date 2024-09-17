// import React from "react";
// import { Fragment } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
const rootEl = document.querySelector("#root");
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => console.log("Học React Không khó"),
//   },
//   "Học React Không khó? ",
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn/",
//     },
//     "Fullstack.edu.vn"
//   )
// );
// const liArray = Array.from(Array(100).keys()).map((_, index) => {
//   return React.createElement("li", null, `Item ${index + 1}`);
// });
// const ul = React.createElement(
//   "ul",
//   {
//     className: "menu",
//   },
//   ...liArray
// );
// const h2 = React.createElement("h2", null, "Học font-end không khó");
// const div = React.createElement(Fragment, null, h1, ul, h2);
const title = (
  <>
    <i>Học Font-end Không khó</i> <b>Ok Chưa?</b>
  </>
);
const isAuth = false;
const status = true;
const users = ["Item 1", "Item 2", "Item 3"];
// const usersJsx = users.map((item, index) => <h3 key={index}>{item}</h3>);
const getMessage = () => <h3>F8 - FullStack</h3>;
const Alert = () => <h3>Không ổn rồi</h3>;
class Product extends React.Component {
  render() {
    return <h3>Sản phẩm</h3>;
  }
}
const div = (
  <>
    {isAuth ? <h1>Welcome</h1> : <h1>Vui lòng đăng nhập</h1>}
    <h1 id="title" className={`title ${status ? "active" : ""}`}>
      Học React Không khó
    </h1>
    <h2>{title}</h2>
    {getMessage()}
    <Alert />
    <Alert></Alert>
    <Product />
    {users.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ))}
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, nam.
      Tenetur porro voluptate praesentium consequatur autem quisquam minima nisi
      totam iure. Eius suscipit quis praesentium quo modi vero a maxime.
    </p>
  </>
);
ReactDOM.createRoot(rootEl).render(div);

// Bài tập: Thêm đoạn mã html sau vào sau thẻ h1

/* 
<ul class="menu">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
Có 100 thẻ li
*/
