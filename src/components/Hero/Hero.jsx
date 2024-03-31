import "./Hero.css";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ProfilePhoto from "/assets/peter.jpeg";
const Hero = () => {
  return (
    <>
      <main className="">
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
              <a href="">
                <FaGithub className="icon text-5xl" />
              </a>
            </div>
            <div>
              <a href="">
                <FaLinkedin className="icon text-5xl" />
              </a>
            </div>
            <div>
              <a href="">
                <FaXTwitter className="icon text-5xl" />
              </a>
            </div>
            <div>
              <a href="">
                <FaInstagram className="icon text-5xl" />
              </a>
            </div>
            <div>
              <a href="">
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
