import { useState } from "react";
import { useEffect } from "react";
import SunImage from "../../images/sun.png";
import MoonImage from "../../images/moon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    changeTheme();
  }, []);

  useEffect(() => {
    localStorage.theme = isDarkTheme ? "dark" : "light";
    changeTheme();
  }, [isDarkTheme]);

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
  return (
    <header className="text-white body-font bg-indigo-700">
      <div className="container mx-auto flex flex-wrap px-4 max-w-screen-xl py-3 flex-col md:flex-row items-center">
        <Link
          to="/RobustKey-PasswordGenerator"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">RobustKey</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/RobustKey-PasswordGenerator"
            className="mr-5 cursor-pointer opacity-90 hover:opacity-100"
          >
            Home
          </Link>
          <Link
            to="RobustKey-PasswordGenerator/about"
            className="mr-5 cursor-pointer opacity-90 hover:opacity-100"
          >
            About
          </Link>

          <Link
            to="/RobustKey-PasswordGenerator/contributors"
            className="mr-5 cursor-pointer opacity-90 hover:opacity-100"
          >
            Contributors
          </Link>
          <img
            src={isDarkTheme ? SunImage : MoonImage}
            id="icon"
            width={30}
            height={30}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="cursor-pointer opacity-90 hover:opacity-100 filter invert dark:invert-0"
          ></img>
        </nav>
      </div>
    </header>
  );
};
export default Header;
