import "./MyProjects.css";
import Project from "./Project";
import projects from "/src/ProjectsData.json";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects">
        <h1 className="projects-header text-white py-8 text-center">
          Projects
        </h1>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
