import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" aria-label="Contact and site footer">
      {/* ── Contact section ── */}
      <section className="contact" aria-labelledby="contact-heading">
        <div className="contact-inner">
          <span className="section-label">Let's Connect</span>
          <h2 className="contact-heading" id="contact-heading">
            Ready to build something great?
          </h2>
          <p className="contact-sub">
            I'm open to freelance projects, full-time roles, and interesting
            collaborations. Reach out through any of these channels.
          </p>

          <ul className="contact-channels" aria-label="Contact channels">
            <li>
              <a
                href="mailto:akasipeter925@gmail.com"
                className="contact-channel"
              >
                <FiMail className="channel-icon" aria-hidden="true" />
                <span>akasipeter925@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/peter-akasi-mba/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
              >
                <FaLinkedin className="channel-icon" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Akasi-M-P"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
              >
                <FaGithub className="channel-icon" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+233241899029"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
              >
                <FaWhatsapp className="channel-icon" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>

          <a href="mailto:akasipeter925@gmail.com" className="btn btn-primary">
            Send Me a Message
          </a>
        </div>
      </section>

      {/* ── Bottom bar ── */}
      <div className="footer-bar">
        <div className="footer-bar-inner">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about" className="footer-nav-link">
              About
            </a>
            <a href="#skills" className="footer-nav-link">
              Skills
            </a>
            <a href="#projects" className="footer-nav-link">
              Projects
            </a>
            <a href="#contact" className="footer-nav-link">
              Contact
            </a>
          </nav>

          <p className="footer-copy">
            © 2025 Peter Akasi MBA. All rights reserved.
          </p>

          <div className="footer-social">
            <a
              href="https://github.com/Akasi-M-P"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-link"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-akasi-mba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            {/* TODO: Add your Twitter/X URL and uncomment */}
            {/* <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="footer-social-link">
              <FaXTwitter aria-hidden="true" />
            </a> */}
            <a
              href="https://wa.me/+233241899029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-link"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
