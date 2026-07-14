function Button({
  children,
  onClick,
  bgColor = "rgb(235, 152, 0)",
  color = "black",
}) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;