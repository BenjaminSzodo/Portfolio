import React, { useState, useEffect } from "react";
import About2 from "./components/About2";
import Proyects2 from "./components/Proyects2";
import Skills2 from "./components/Skills2";
import Contact2 from "./components/Contact2";

function App() {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-indigo-950">
      <div className="flex justify-center">
        <div className="mt-20">
          <h2 className="flex justify-center text-2xl sm:text-4xl text-lime-500 text-center">
            Hola, soy
            <span className="inline-block ml-1 animate-pulse">_</span>
          </h2>
          <h1 className="flex justify-center text-5xl sm:text-7xl md:text-8xl underline decoration-dashed decoration-sky-500 text-violet-200 text-center">
            Benjamin Szodo
          </h1>
          <div className="hidden md:flex justify-center mt-20 gap-80">
            <button className="text-violet-200 hover:text-green-300 focus:text-green-300 transition-colors text-2xl" onClick={() => scrollTo('1')}>Proyectos</button>
            <button className="text-violet-200 hover:text-green-300 focus:text-green-300 transition-colors text-2xl" onClick={() => scrollTo('2')}>Habilidades</button>
            <button className="text-violet-200 hover:text-green-300 focus:text-green-300 transition-colors text-2xl" onClick={() => scrollTo('3')}>Contacto</button>
          </div>
          <div>
            <About2/>
          </div>
          <div id="1">
            <Proyects2/>
          </div>
          <div id='2'>
            <Skills2/>
          </div>
          <div id="3">
            <Contact2/>
          </div>
          {showScrollToTop && (
            <button
              className="fixed bottom-4 right-4 p-2 rounded-full bg-transparent border-2 border-green-500 hover:border-green-300 text-white"
              onClick={handleScrollToTop}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
