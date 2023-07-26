import logo from '../assets/HENRY.png';

const Education = () => {
  return (
    <div className="min-h-screen mt-40 flex flex-col items-center">
      <h2 className="bg-gradient-to-tr from-sky-500 to-sky-200 bg-clip-text font-sans text-4xl font-semibold leading-tight tracking-normal text-transparent antialiased m-4 mb-20">
        EDUCACION
      </h2>
      <div className="max-w-7xl mx-auto px-5 flex justify">
        <div className="">
          <section className="max-w-xs">
            <div className="mx-auto lg:max-w-7xl">
              <div className="max-w-xl rounded-lg border border-gray-200 shadow-lg dark bg-gray-800 dark:border-gray-800">
                <img src={logo} alt="logo" className="rounded-t-lg px-4 py-2 mt-4" />
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
          {/* Agregar más secciones según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default Education;

