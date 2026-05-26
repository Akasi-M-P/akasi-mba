import "./MyProjects.css";
import Project from "./Project";
import projects from "/src/ProjectsData.json";

const Projects = () => {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="projects-inner">
        <span className="section-label">My Work</span>
        <h2 className="projects-heading" id="projects-heading">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;