import { useRef } from "react";
import useLocoScroll from "./Hooks/useLocoScroll";
import "./assets/css/style.css";
import "./assets/css/locomotive-scroll.css";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Footer from "./sections/Footer";

function App() {
  const containerRef = useRef(null);
  useLocoScroll();

  return (
    <div
      id="App"
      className="bg-house-600 overflow-hidden font-objektiv"
      ref={containerRef}
      data-scroll-container
    >
      <main>
        <Hero />
        <Intro />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
