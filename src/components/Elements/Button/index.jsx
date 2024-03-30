const Button = (props) => {
  const { children, classname, type } = props;
  return (
    <button className={classname} type={type}>
      {children}
    </button>
  );
};

export default Button;
