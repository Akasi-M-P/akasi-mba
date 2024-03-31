import "./Hero.css";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ProfilePhoto from "/assets/peter.jpeg";
const Hero = () => {
  return (
    <>
      <main className="" id="about">
        <div className="hero-box">
          <h1 className="text-center py-4">
            Hi. I’m Peter. A Frontend Engineer.
          </h1>
          <h4 className="text-center">
            I develop applications that are engaging, accessible and user
            centric.
          </h4>
        </div>
        <div className="hero-box">
          <img
            src={ProfilePhoto}
            alt="peter-photo"
            className="profile_photo py-6"
          />
          <div className="social-icons">
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
      </main>
    </>
  );
};
export default Hero;
