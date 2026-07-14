function ThemeToggle({ darkMode, onDarkMode }) {
  return (
    <label className="theme-toggle">
      <input type="checkbox" checked={darkMode} onChange={() => onDarkMode()} />
      <span className="slider"></span>
    </label>
  );
}

export default ThemeToggle;