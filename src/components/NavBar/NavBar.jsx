import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        {/* Logo / brand */}
        <a href="#about" className="navbar-logo" aria-label="Peter Akasi MBA — back to top">
          Peter.
        </a>

        {/* Desktop nav links */}
        <nav className="navbar-links" aria-label="Primary navigation">
          <a href="#about"    className="navbar-link">About</a>
          <a href="#skills"   className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#contact"  className="navbar-link">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="btn btn-primary navbar-cta">
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="navbar-hamburger"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav id="mobile-nav" className="navbar-mobile" aria-label="Mobile navigation">
          <a href="#about"    className="navbar-mobile-link" onClick={closeMenu}>About</a>
          <a href="#skills"   className="navbar-mobile-link" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="navbar-mobile-link" onClick={closeMenu}>Projects</a>
          <a href="#contact"  className="navbar-mobile-link" onClick={closeMenu}>Contact</a>
          <a href="#contact"  className="btn btn-primary navbar-mobile-cta" onClick={closeMenu}>
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default NavBar;