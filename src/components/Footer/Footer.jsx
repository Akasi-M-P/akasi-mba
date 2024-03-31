import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div>
          <h1 className="footer-header py-4">Get In Touch</h1>
        </div>
        <div className="social-icons flex gap-12">
          <div>
            <a href="https://github.com/Akasi-M-P" target="blank">
              <FaGithub className="icon text-5xl" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/peter-akasi-mba/"
              target="blank"
            >
              <FaLinkedin className="icon text-5xl" />
            </a>
          </div>
          <div>
            <a href="" target="blank">
              <FaXTwitter className="icon text-5xl" />
            </a>
          </div>
          <div>
            <a href="" target="blank">
              <FaInstagram className="icon text-5xl" />
            </a>
          </div>
          <div>
            <a href="https://wa.me/+233241899029" target="blank">
              <FaWhatsapp className="icon text-5xl" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-nav">
          <div className="flex flex-row gap-10">
            <div className="nav-link">
              <a href="#about">About</a>
            </div>
            <div className="nav-link">
              <a href="#projects">Projects</a>
            </div>
            <div className="nav-link">
              <a href="#footer">Contact</a>
            </div>
          </div>
          <div className="copy-rights">
            <p>2024 PETER AKASI MBA ©️ ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
