import foto from '../assets/fotomia.png';
import logo from '../assets/HENRY.png'

const About2 = () => {
  return (
    <div>
      <section className="text-gray-200 bg-gray-900 mt-20">
        <div className="max-w-6xl mx-auto px-5 py-24 flex flex-wrap-reverse items-center">
          <div className="w-full md:w-1/2 md:pr-10">
            <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl  bg-gradient-to-tr from-sky-500 to-sky-700 bg-clip-text font-sans text-transparent antialiased flex justify-center">
            Sobre mí
            </h1>
            <p className="text-1xl text-violet-200 m-4 leading-tight mt-8">
              Soy una persona apasionada a la creación de contenido y desarrollo web. En un principio comencé estudiando Ingeniería en Sistemas pero luego con el tiempo me di cuenta que no era lo mío, pero al final decidí dedicarme a este mundo en crecimiento.
            </p>
            <h3 className="text-2xl text-lime-500 m-4 underline decoration-dotted mt-8">
              ACTUALMENTE ESTUDIO Y BUSCO AMPLIAR MI EXPERIENCIA EN EL CAMPO LABORAL DEL DESARROLLO WEB
            </h3>
            <p className="text-1xl text-violet-200 mt-8 leading-tight m-4">
              En mis tiempos libres me gusta ir a entrenar, andar en skate y jugar videojuegos. Actualmente tengo un canal de twitch.
            </p>
            <div>
                <h2 className='title-font text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-4xl  bg-gradient-to-tr from-sky-500 to-sky-700 bg-clip-text font-sans text-transparent antialiased mt-8 m-4'>Educación:</h2>
                <section className="w-25 mx-auto max-w-md">
            <div className="mx-auto lg:max-w-7xl">
              <div className="max-w-xl rounded-lg border border-gray-200 shadow-lg dark bg-gray-800 dark:border-gray-800">
                <img src={logo} alt="logo" className="rounded-t-lg px-4 py-2 mt-4 w-40" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bootcamp para Full Stack Developer
                  </h5>
                  <div className="text-xs font-bold uppercase text-lime-500 mt-1 mb-2">
                    +800 horas de programación
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Curso online basado en prácticas y proyectos reales, aprenderás las habilidades más demandadas del mercado.
                  </p>
                  <a
                    href="https://certificates.soyhenry.com/new-cert?id=afac04d619eb2b3bb46aff423f032fd1e49354b25be70c361192d1440a74c87a"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Ver certificado
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
            </div>
            
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={foto} alt="foto" className=" m-4 mb-8 rounded-full w-66 h-66 md:w-66 md:h-66 object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About2;
