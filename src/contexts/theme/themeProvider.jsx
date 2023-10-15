import PropType from "prop-types";
import themeContext from "./themeContext";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // check if theme is saved in local storage
    if ("theme" in localStorage) {
      return localStorage.theme;
    }

    // check if system is in dark mode
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      return;
    }

    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default ThemeProvider;
