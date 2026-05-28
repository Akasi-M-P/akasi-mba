import "./Hero.css";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import ProfilePhoto from "/assets/peter_photo.png";

const Hero = () => {
  return (
    <section className="hero" id="about" aria-labelledby="hero-name">
      <div className="hero-inner">
        {/* ── Text column ── */}
        <div className="hero-text">
          <span className="section-label">
            Full-Stack Web Developer · AWS Certified Cloud Practitioner
          </span>
          <h1 className="hero-name" id="hero-name">
            Hi, I'm Peter Mba Akasi.
          </h1>
          <p className="hero-tagline">
            I build scalable, cloud-aware web applications end-to-end — from
            pixel-perfect React frontends to Node.js APIs and AWS
            infrastructure.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowDown aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Akasi-M-P"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="social-icon"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-akasi-mba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="social-icon"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            {/*
              TODO: Replace href with your actual Twitter/X profile URL,
              then remove the social-icon--disabled class and tabIndex/aria-hidden.
            */}
            <a
              href="https://x.com/Awinbisa1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X profile (coming soon)"
              className="social-icon "
              aria-hidden="true"
            >
              <FaXTwitter aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/+233241899029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp contact"
              className="social-icon"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Photo column ── */}
        <div className="hero-photo-wrap">
          <img
            src={ProfilePhoto}
            alt="Peter Akasi MBA, Frontend Engineer"
            className="hero-photo"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
