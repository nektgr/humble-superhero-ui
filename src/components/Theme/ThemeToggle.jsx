import { useTheme } from "../Theme/ThemeContext";
import "./ThemeToggle.css";

/**
 * Component for toggling between light and dark themes.
 *
 * @component
 * @returns {JSX.Element} The rendered ThemeToggle button.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
