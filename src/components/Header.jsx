import { useState } from "react";
import { useEffect } from "react";
import SunImage from "../../images/sun.png";
import MoonImage from "../../images/moon.png";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isOpen, setOpen] = useState(false);

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
    <>
      <nav className="relative w-full h-16 text-white bg-indigo-700 flex flex-col sm:flex-row items-center justify-between px-0 sm:px-4 lg:px-32 xl:px-36">
        {/* utility items */}
        <div className="relative flex flex-row justify-between gap-36 items-center pt-1">
          <Link to="/" className="title-font font-medium text-2xl">
            RobustKey
          </Link>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="relative block sm:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <img
              src={isDarkTheme ? SunImage : MoonImage}
              id="icon"
              width={30}
              height={30}
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="cursor-pointer opacity-90 hover:opacity-100 filter invert dark:invert-0 sm:hidden"
            ></img>
          </div>
        </div>

        {/* routes */}
        <div
          className={`relative flex flex-col sm:flex-row sm:gap-2 max-[600px]:w-full top-2 sm:top-0 z-30 ${
            isOpen ? "opacity-100" : "sm:opacity-100 opacity-0"
          }`}
        >
          <Link
            to="/"
            className="relative bg-indigo-700 sm:px-2 pl-8 sm:py-1 py-3 cursor-pointer opacity-90 hover:opacity-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative bg-indigo-700 sm:px-2 pl-8 sm:py-1 py-3 cursor-pointer opacity-90 hover:opacity-100"
          >
            About
          </Link>
          <Link
            to="/contributors"
            className="relative bg-indigo-700 sm:px-2 pl-8 sm:py-1 py-3 cursor-pointer opacity-90 hover:opacity-100"
          >
            Contributors
          </Link>
          <img
            src={isDarkTheme ? SunImage : MoonImage}
            id="icon"
            width={30}
            height={30}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="cursor-pointer opacity-90 hover:opacity-100 filter invert dark:invert-0 hidden sm:inline"
          ></img>
        </div>
      </nav>
    </>
  );
};
export default Header;
