import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import themeContext from "../contexts/theme/themeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div
      onClick={() =>
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
      }
      className={`flex bg-slate-800 text-yellow-400 p-1 rounded-full relative cursor-pointer ${
        theme === "dark" ? "bg-slate-950" : ""
      }`}
    >
      <FaMoon className="mr-1" size={16} />
      <FaSun className="ml-1" size={16} />
      <span
        className={`absolute top-0 left-0 h-full border-2 border-slate-800 aspect-square bg-white rounded-full transition-transform duration-300 ${
          theme === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
};

export default ThemeToggleButton;
