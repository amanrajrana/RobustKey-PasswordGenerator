import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import SunImage from "../../images/sun.png";
import MoonImage from "../../images/moon.png";
import GithubIcon from "../../images/github_logo.png";

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

  return (
    <>
      <nav className="relative w-full h-16 text-white bg-indigo-700 flex flex-col sm:flex-row items-center justify-between px-0 sm:px-4 lg:px-32 xl:px-36">
        <div className="flex items-center justify-between gap-6 pt-1">
          <Link to="/" className="title-font font-medium text-2xl">
            RobustKey
          </Link>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="relative block sm:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
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
          </div>
        </div>

        <div
          className={`flex flex-col  sm:flex-row sm:gap-2 max-[600px]:w-full top-2 sm:top-0 z-30 ${
            isOpen ? "opacity-100" : "sm:opacity-100 opacity-0"
          } `}
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
