import Contributors from "./Pages/Contributors";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./Pages/About";
import { useEffect, useState } from "react";
import ContributorsState from "./contexts/contributors/contributorsState";

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
    <ContributorsState>
      <div className="dark:bg-gray-900 dark:text-white">
        <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ContributorsState>
  );
}

export default App;
