import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills/Skills";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <>
        <NavBar />
        <Hero />
        <Skills />
      </>
    </>
  );
}

export default App;
