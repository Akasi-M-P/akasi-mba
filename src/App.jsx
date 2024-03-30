import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <main>
        <NavBar />
        <Hero />
      </main>
    </>
  );
}

export default App;
