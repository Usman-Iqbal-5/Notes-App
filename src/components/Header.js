function Header({ children }) {
  return (
    <header>
      <div className="logo">Notes.</div>
      <div className="button-container">{children}</div>
    </header>
  );
}

export default Header;