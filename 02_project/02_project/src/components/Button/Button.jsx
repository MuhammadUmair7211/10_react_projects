const Button = (props) => {
  console.log({ props });
  return (
    <button className={props.isTrue ? "secondary-btn" : "primary-btn"}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
