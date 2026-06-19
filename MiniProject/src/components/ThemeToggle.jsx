import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-indigo-600"
    >
      {darkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
};

export default ThemeToggle;