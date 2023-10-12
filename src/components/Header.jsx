import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import SunImage from "../../images/sun.png";
import MoonImage from "../../images/moon.png";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

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
          <NavLink to="/" isActive={location.pathname === '/'} label="Home" />
          <NavLink to="/about" isActive={location.pathname === '/about'} label="About" />
          <NavLink to="/contributors" isActive={location.pathname === '/contributors'} label="Contributors" />
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

// Create a custom NavLink component to style the active link differently
const NavLink = ({ to, isActive, label }) => (
  <Link
    to={to}
    className={`relative sm:px-2 pl-8 sm:py-1 py-3 cursor-pointer opacity-90 ${
      isActive
        ? 'bg-indigo-900 border-b-2' // Change the background color and add a bottom border for the active link
        : 'hover:bg-indigo-900 hover:border-b-2' // Add hover effect and a bottom border when hovering
    }`}
  >
    {label}
  </Link>
);

export default Header;
