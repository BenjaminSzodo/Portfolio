import React from "react";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Education from "./components/Education";
import Skills2 from "./components/Skills2";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-indigo-950">
      <div className="flex justify-center">
        <div className="mt-20">
          <h2 className="flex justify-center text-4xl text-lime-500">
            Hola, soy
            <span className="inline-block ml-1 animate-pulse">_</span>
          </h2>
          <h1 className="flex justify-center text-8xl underline decoration-dashed decoration-sky-500 text-violet-200">
            Benjamin Szodo
          </h1>
          <div>
            <About/>
          </div>
          <div>
            <Proyects/>
          </div>
          <div>
            <Education/>
          </div>
          <div>
            <Skills2/>
          </div>
          <div>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
