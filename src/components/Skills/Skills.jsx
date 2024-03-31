import "./Skills.css";
import { FaHtml5, FaSass, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="skill-header py-4 mt-10">
        <h1 className="text-white text-center">Skills</h1>
      </div>
      <div className="skills">
        <div data-aos="flip-up" className="skill">
          <FaHtml5 className="text-6xl text-orange-600 mx-auto" />
          <h1 className="text-center text-orange-600">HTML5</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <IoLogoCss3 className="text-6xl text-blue-600 mx-auto" />
          <h1 className="text-center text-blue-600">CSS3</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <RiJavascriptFill className="text-6xl text-yellow-500 mx-auto" />
          <h1 className="text-center text-yellow-500">JAVASCRIPT</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <FaSass className="text-6xl text-pink-600 mx-auto" />
          <h1 className="text-center text-pink-600">SASS</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <FaReact className="text-6xl text-blue-400 mx-auto" />
          <h1 className="text-center text-blue-400">REACT</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <SiTailwindcss className="text-6xl text-blue-400 mx-auto" />
          <h1 className="text-center text-blue-400">TAILWIND CSS</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <FaBootstrap className="text-6xl text-purple-500 mx-auto" />
          <h1 className="text-center text-purple-500">BOOTSTRAP</h1>
        </div>
        <div data-aos="flip-up" className="skill">
          <FaFigma className="text-6xl text-fuchsia-500 mx-auto" />
          <h1 className="text-center text-fuchsia-500">FIGMA</h1>
        </div>
      </div>
    </>
  );
};
export default Skills;
