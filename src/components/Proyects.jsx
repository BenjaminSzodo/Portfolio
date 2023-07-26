import logo from "../assets/marketplace_logo_large.png";
import poke from "../assets/Pokedex.png";

const Proyects = () => {
  return (
    <div className="mt-40 ">
      <h2 className="block bg-gradient-to-tr from-sky-500 to-sky-200 bg-clip-text font-sans text-4xl font-semibold leading-tight tracking-normal text-transparent antialiased m-4 mb-20 flex justify-center">MIS PROYECTOS</h2>
      <div className="flex gap-8 justify-center">

      
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
          class="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-lime-700 hover:ring-lime-700"
        >
          <div class="flex items-center space-x-3">
            <img
              src={logo}
              alt=""
              class="h-auto w-10 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-lime-500 group-hover:text-white text-sm font-semibold">
              Facil-Market
            </h3>
          </div>
          <p class="text-violet-200 group-hover:text-white text-sm">
            Este es un proyecto basado en un marketplace donde el usuario puede
            comprar/vender productos nuevos/usados
          </p>
          <div class="mt-4 flex gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Typescript
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600">
              React
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
              Redux Toolkit
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              SQL
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
              SASS
            </span>

          </div>
        </a>
      </section>
      </div>
    </div>
  );
};

export default Proyects;
