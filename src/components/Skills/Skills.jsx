import "./Skills.css";
import {
  FaHtml5,
  FaSass,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiNextdotjs } from "react-icons/si";

const skillGroups = [
  {
    category: "Core Languages",
    skills: [
      { Icon: RiJavascriptFill, name: "JavaScript", color: "#f7df1e" },
      { Icon: FaPython, name: "Python", color: "#3776ab" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { Icon: FaReact, name: "React", color: "#61dafb" },
      { Icon: SiNextdotjs, name: "Next.js", color: "#111111" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { Icon: FaNodeJs, name: "Node.js", color: "#68a063" },
      { Icon: SiExpress, name: "Express", color: "#888888" },
      { Icon: SiMongodb, name: "MongoDB", color: "#47a248" },
      { Icon: SiMysql, name: "MySQL", color: "#4479a1" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [{ Icon: FaAws, name: "AWS", color: "#ff9900" }],
  },
  {
    category: "Design & Tools",
    skills: [{ Icon: FaFigma, name: "Figma", color: "#f24e1e" }],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <div className="skills-inner">
        <span className="section-label">Tech Stack</span>
        <h2 className="skills-heading" id="skills-heading">
          What I work with
        </h2>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3 className="skill-group-label">{group.category}</h3>
              <div className="skill-grid">
                {group.skills.map(({ Icon, name, color }) => (
                  <div
                    className="skill-card"
                    key={name}
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <Icon
                      className="skill-icon"
                      style={{ color }}
                      aria-hidden="true"
                    />
                    <span className="skill-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
