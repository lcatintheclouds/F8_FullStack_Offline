const Input = ({ onChange }) => {
  //   const handleChangeValue = (e) => {
  //     console.log(e.target.value);
  //   };
  return (
    <div>
      <input type="text" placeholder="Nhập tên" onChange={onChange} />
    </div>
  );
};
export default Input;
/* 
App
  - Component A
  - Component B
*/
