import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const Project = ({ project }) => {
  return (
    <article
      className="project-card"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {/* ── Thumbnail ── */}
      <div className="project-img-wrap">
        <img
          src={project.img}
          alt={`${project.title} project screenshot`}
          className="project-img"
          loading="lazy"
          width="600"
          height="340"
        />
      </div>

      {/* ── Body ── */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {project.impact && (
          <p className="project-impact">
            <span aria-hidden="true">→ </span>
            {project.impact}
          </p>
        )}

        {project.techStack && (
          <ul className="project-tags" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <li key={tech} className="project-tag">{tech}</li>
            ))}
          </ul>
        )}

        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-btn"
          >
            Live Demo <FiExternalLink aria-hidden="true" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline project-btn"
          >
            View Code <FaGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id:          PropTypes.number.isRequired,
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img:         PropTypes.string.isRequired,
    github:      PropTypes.string.isRequired,
    live:        PropTypes.string.isRequired,
    techStack:   PropTypes.arrayOf(PropTypes.string),
    impact:      PropTypes.string,
  }).isRequired,
};

export default Project;