import { createContext, useContext, useState, useEffect } from "react";

/**
 * Context for managing the application theme.
 */
export const ThemeContext = createContext();

/**
 * Provider component for ThemeContext.
 * Sets and persists the current theme in localStorage and applies it to the document body.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {JSX.Element} The ThemeProvider component.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Toggles between light and dark themes.
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access the ThemeContext.
 *
 * @returns {Object} The theme context value.
 */
export const useTheme = () => useContext(ThemeContext);
