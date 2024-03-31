/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
const Project = ({ project }) => {
  return (
    <>
      <div
        className="project-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="project-title-img-des">
          <img src={project.img} alt={project.title} />
          <h1 className="project-title">{project.title}</h1>
          <p className="project-des">{project.description}</p>
        </div>
        <div className="project-links py-2">
          <div className="project-live project-link-hover">
            <a href={project.live} className="link-icon">
              Live
              <span>
                <SiYoutubeshorts />
              </span>
            </a>
          </div>
          <div className="project-github project-link-hover">
            <a href={project.github} className="link-icon">
              GitHub
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
