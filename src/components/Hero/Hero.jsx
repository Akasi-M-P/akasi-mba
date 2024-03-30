import "./Hero.css";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <main className="">
        <div className="">
          <h1 className="text-center py-4">
            Hi. I’m Peter. A Frontend Engineer.
          </h1>
          <h4 className="text-center">
            I develop applications that are engaging, accessible and user
            centric.
          </h4>
        </div>
        <div className="">
          <img
            src="/assets/peter.jpeg"
            alt="peter-photo"
            className="profile_photo py-6"
          />
          <div className="social-icons">
            <div data-aos="flip-left">
              <FaGithub className="text-3xl" />
            </div>
            <div data-aos="flip-left">
              <FaLinkedin className="text-3xl" />
            </div>
            <div data-aos="flip-left">
              <FaXTwitter className="text-3xl" />
            </div>
            <div data-aos="flip-left">
              <FaInstagram className="text-3xl" />
            </div>
            <div data-aos="flip-left">
              <FaWhatsapp className="text-3xl" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
