import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import NavLink from "./NavLink";
import { AiFillGithub } from "react-icons/ai";
import ThemeToggleButton from "./ThemeToggleButton";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const NAV__ITEMS = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Contributors",
      to: "/contributors",
    },
  ];

  return (
    <nav className="w-full h-16 text-white bg-indigo-700 dark:bg-indigo-950 flex items-center px-4">
      {/* utility items */}
      <div className="flex w-full justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/" className="title-font font-medium text-2xl">
          <h1>RobustKey</h1>
        </Link>

        {/* nav items */}
        <div
          className={`${
            isNavOpen ? "opacity-100 px-8 py-4" : "opacity-0"
          } bg-indigo-700 dark:bg-indigo-950 flex flex-col sm:opacity-100 absolute top-16 left-0 w-full gap-y-4 sm:flex-row gap-x-6 sm:static sm:w-max bg-opacity-90`}
        >
          {NAV__ITEMS.map((item, index) => (
            <NavLink key={index} to={item.to} label={item.label} />
          ))}
        </div>

        <div className="flex flex-row justify-center items-center gap-x-4">
          <div>
            <ThemeToggleButton />
          </div>
          <a
            href="https://github.com/amanrajrana/RobustKey-PasswordGenerator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              size={30}
              className="cursor-pointer opacity-90 hover:opacity-100"
            />
          </a>

          {/* hamburger menu */}
          <div className="sm:hidden">
            <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
