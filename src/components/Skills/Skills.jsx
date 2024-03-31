import "./Skills.css";
import { FaHtml5, FaSass, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="skill-header py-4">
        <h1 className="text-white text-center">Skills</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <FaHtml5 className="text-6xl text-orange-600 mx-auto" />
        </div>
        <div className="skill">
          <IoLogoCss3 className="text-6xl text-blue-600 mx-auto" />
        </div>
        <div className="skill">
          <RiJavascriptFill className="text-6xl text-yellow-500 mx-auto" />
        </div>
        <div className="skill">
          <FaSass className="text-6xl text-pink-600 mx-auto" />
        </div>
        <div className="skill">
          <FaReact className="text-6xl text-blue-400 mx-auto" />
        </div>
        <div className="skill">
          <SiTailwindcss className="text-6xl text-blue-400 mx-auto" />
        </div>
        <div className="skill">
          <FaBootstrap className="text-6xl text-blue-400 mx-auto" />
        </div>
        <div className="skill">
          <FaFigma className="text-6xl text-fuchsia-500 mx-auto" />
        </div>
      </div>
    </>
  );
};
export default Skills;
