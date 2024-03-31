import "./MyProjects.css";
import Project from "./Project";
import projects from "/src/ProjectsData.json";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div>
        <h1 className="projects-header text-white py-8 text-center">
          Projects
        </h1>
      </div>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};
export default Projects;
