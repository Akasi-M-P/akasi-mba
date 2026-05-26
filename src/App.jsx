import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/MyServices/Services";
import Projects from "./components/MyProjects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,      // animate each element only once
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;