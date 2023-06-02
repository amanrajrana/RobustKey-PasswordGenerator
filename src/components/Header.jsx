const Header = () => {
  return (
    <header className="text-white body-font bg-indigo-700">
      <div className="container mx-auto flex flex-wrap px-4 max-w-screen-xl py-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">RobustKey</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 cursor-pointer opacity-90 hover:opacity-100">Home</a>
          <a className="mr-5 cursor-pointer opacity-90 hover:opacity-100">About</a>
          <a className="mr-5 cursor-pointer opacity-90 hover:opacity-100">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
