import Contributors from "./components/Contributors";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import { useEffect, useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // check if theme is saved in local storage
    if ("theme" in localStorage) {
      return localStorage.theme === "dark";
    }

    // check if system is in dark mode
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      return;
    }

    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }, [isDarkTheme]);
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
