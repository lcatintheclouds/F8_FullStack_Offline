const Header = ({ title, email, name, children }) => {
  //   console.log(props);

  return (
    <div>
      <h2>Header</h2>
      {/* {props.title} */}
      <h3>{title}</h3>
      <h3>{email}</h3>
      <h3>{name}</h3>
      {children}
    </div>
  );
};
export default Header;
