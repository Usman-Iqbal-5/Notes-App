function Modal({
  children,
  bgColor = "rgb(235, 152, 0)",
  color = "black",
  width = "50",
}) {
  const modalStyle = {
    backgroundColor: bgColor,
    color: color,
    "--modal-width": `${width}%`,
  };

  return (
    <div className="overlay">
      <div style={modalStyle} className="modal">
      {children}
      </div>
    </div>
  );
}

export default Modal;
