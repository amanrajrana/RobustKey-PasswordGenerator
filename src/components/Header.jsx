import { useState } from "react";
import { useEffect } from "react";
import SunImage from "../../images/sun.png";
import MoonImage from "../../images/moon.png";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import GithubIcon from "../../images/github_logo.svg";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

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
    <>
      <nav className="relative w-full h-16 text-white bg-indigo-700 flex flex-col sm:flex-row items-center justify-between px-0 sm:px-4 lg:px-32 xl:px-36">
        {/* utility items */}
        <div className="relative flex flex-row justify-between gap-6 items-center pt-1">
          <Link to="/" className="title-font font-medium text-2xl pr-10">
            RobustKey
          </Link>
          <div className="flex flex-row justify-center items-center gap-2">
            <a
              href="https://github.com/amanrajrana/RobustKey-PasswordGenerator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubIcon}
                id="icon"
                width={30}
                height={30}
                className="cursor-pointer opacity-90 hover:opacity-100 filter sm:hidden"
              ></img>
            </a>
            <img
              src={isDarkTheme ? SunImage : MoonImage}
              id="icon"
              width={30}
              height={30}
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="cursor-pointer opacity-90 hover:opacity-100 filter invert dark:invert-0 sm:hidden"
            ></img>
            <div className="relative block sm:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
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
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/amanrajrana/RobustKey-PasswordGenerator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub icon"
              width={26}
              height={26}
              className="cursor-pointer opacity-90 hover:opacity-100 filter hidden sm:inline"
            />
          </a>

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
