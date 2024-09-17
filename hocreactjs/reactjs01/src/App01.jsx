import Header from "./components/Header";
import Input from "./components/Input";
// const App = () => {
//   const handleClick = () => {
//     console.log("Click me");
//   };
//   const handleClick2 = (value) => {
//     console.log(value);
//   };
//   const handleChangeValue = (e) => {
//     const value = e.target.value;
//     console.log(value);
//   };
//   const user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//   };
//   return (
//     <div>
//       <Header title="F8" {...user}>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
//           ratione veritatis omnis commodi asperiores cum exercitationem fugit
//           sapiente nam quas vero accusamus quidem rem aut, eaque suscipit
//           explicabo non.
//         </p>
//       </Header>
//       <h1 className="title">Đây là trang chủ</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Nhập tên"
//           onChange={handleChangeValue}
//         />
//       </div>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={() => handleClick2("F8")}>Click me 2</button>
//     </div>
//   );
// };

const App = () => {
  const handleChangeValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Input onChange={handleChangeValue} />
    </div>
  );
};
export default App;
