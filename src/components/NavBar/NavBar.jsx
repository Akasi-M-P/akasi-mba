import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header className="w-full flex items-center py-5">
        <nav className="w-4/5 m-auto px-2 py-2 ">
          <div className="nav-link">
            <a href="">About</a>
          </div>
          <div className="nav-link">
            <a href="">Projects</a>
          </div>
          <div className="nav-link">
            <a href="">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
