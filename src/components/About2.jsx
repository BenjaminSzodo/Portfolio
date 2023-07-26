import foto from '../assets/fotomia.png';

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
              Soy una persona apasionada a la creación de contenido y desarrollo web. En un principio comencé estudiando Ingeniería en Sistemas pero luego con el tiempo me di cuenta que no era lo mío, al final decidí dedicarme a este mundo en crecimiento.
            </p>
            <h3 className="text-2xl text-lime-500 m-4 underline decoration-dotted mt-8">
              ACTUALMENTE ESTUDIO Y BUSCO AMPLIAR MI EXPERIENCIA EN EL CAMPO LABORAL DE DESARROLLO WEB
            </h3>
            <p className="text-1xl text-violet-200 mt-8 leading-tight m-4">
              En mis tiempos libres me gusta ir a entrenar, andar en skate y jugar videojuegos. Actualmente tengo un canal de twitch.
            </p>
            <div>
                <h2 className='title-font text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-4xl  bg-gradient-to-tr from-sky-500 to-sky-700 bg-clip-text font-sans text-transparent antialiased mt-8 m-4'>Educación:</h2>
            </div>
            
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={foto} alt="foto" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About2;
