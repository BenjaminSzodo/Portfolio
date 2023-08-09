import logo from "../assets/marketplace_logo_large.png";
import poke from "../assets/Pokedex.png";

const Proyects2 = () => {
    return ( 
        <div>
      <section class="text-gray-200 bg-transparent border-2 border-green-500">
        <div class="max-w-6xl mx-auto px-5 py-24 ">
            <div >
            <div className="text-center mb-2">
            <h1 className=" title-font mb-4 text-5xl font-extrabold leading-10 tracking-tight sm:text-6xl sm:leading-none md:text-6xl   font-sans text-sky-600 antialiased flex justify-center " >
            Proyectos
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-violet-200">Estos son algunas de los proyectos que he realizado.</p>
            </div>
            </div>
            <div className="flex gap-8 justify-center md:flex-row flex-col">

      
      <section>
        <a
          href="https://www.youtube.com/watch?v=VX5_YsO_OCU" target="_blank"
          class="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-yellow-500 hover:ring-yellow-500"
        >
          <div class="flex items-center space-x-3">
            <img
              src={poke}
              alt=""
              class="h-auto w-20 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-yellow-500 group-hover:text-black text-sm font-semibold">
              Pokedex
            </h3>
          </div>
          <p class="text-violet-200 group-hover:text-white text-sm">
            Este es un proyecto basado en una pequeña wiki de pokemones
          </p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Javascript
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600">
              React
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
              Redux
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              SQL
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              CSS
            </span>
          </div>
        </a>
      </section>
      <section>
      <a
          href="https://facil-market-proyect.vercel.app/" target="_blank"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-lime-700 hover:ring-lime-700"
        >
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt=""
              className="h-auto w-10 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 className="text-lime-500 group-hover:text-white text-sm font-semibold">
              Facil-Market
            </h3>
          </div>
          <p className="text-violet-200 group-hover:text-white text-sm">
            Este es un proyecto basado en un marketplace donde el usuario puede
            comprar/vender productos nuevos/usados
          </p>
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Typescript
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600">
              React
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
              Redux Toolkit
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              SQL
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
              SASS
            </span>

          </div>
        </a>
      </section>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Proyects2;