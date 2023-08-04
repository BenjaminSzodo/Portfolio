import React from "react";
import About2 from "./components/About2";
import Proyects2 from "./components/Proyects2";
import Education from "./components/Education";
import Skills2 from "./components/Skills2";
import Contact2 from "./components/Contact2";

function App() {
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
          <div>
            <About2/>
          </div>
          <div>
            <Proyects2/>
          </div>
          {/* <div>
            <Education/>
          </div> */}
          <div>
            <Skills2/>
          </div>
          <div>
            <Contact2/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
