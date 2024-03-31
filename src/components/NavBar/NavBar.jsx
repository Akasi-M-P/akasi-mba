import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header className="w-full flex items-center py-5">
        <nav className="w-4/5 md:w-2/4 m-auto px-2 py-2 lg:px-6">
          <div className="nav-link">
            <a href="#about">About</a>
          </div>
          <div className="nav-link">
            <a href="#projects">Projects</a>
          </div>
          <div className="nav-link">
            <a href="#footer">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
