const Contact2 = () => {
  return (
    <div>
      <section class="text-gray-200 bg-transparent border-2 border-green-500">
        <div class="max-w-6xl mx-auto px-5 py-24 ">
          <div>
            <div className="text-center mb-4">
              <h1 className="  title-font mb-4 text-5xl font-extrabold leading-10 tracking-tight sm:text-6xl sm:leading-none md:text-6xl   font-sans text-sky-600 antialiased flex justify-center ">
                Contacto
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-violet-200">
                Puedes contactarme atraves de estas redes.
              </p>
            </div>
          </div>
          <div className="flex gap-8 justify-center md:flex-row flex-col">
          <section>
        <a
          href="https://api.whatsapp.com/send?phone=5492612510791" target="_blank"
          class="group block max-w-xs mx-auto rounded-full p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500"
        >
          <div class="flex items-center space-x-3">
            <img
              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png'}
              alt=""
              class="h-auto w-10 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-green-500 group-hover:text-white text-sm font-semibold text-center">
            Whatsapp
            </h3>
          </div>
        </a>
      </section>
      <section>
        <a
          href="mailto:benjaminszodo@gmail.com"
          class="group block max-w-xs mx-auto rounded-full p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-red-500 hover:ring-red-500"
        >
          <div class="flex items-center space-x-3">
            <img
              src={'https://freelogopng.com/images/all_img/1657906383gmail-icon-png.png'}
              alt=""
              class="h-auto w-10 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-white group-hover:text-white text-sm font-semibold">
            Gmail
            </h3>
          </div>
        </a>
      </section>
      <section>
        <a
          href="https://www.linkedin.com/in/benjamin-szodo-laborde-a363aa27a/" target="_blank"
          class="group block max-w-xs mx-auto rounded-full p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-500 hover:ring-blue-500"
        >
          <div class="flex items-center space-x-3">
            <img
              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'}
              alt=""
              class="h-auto w-10 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-blue-500 group-hover:text-white text-sm font-semibold">
            Linkedin
            </h3>
          </div>
        </a>
      </section>
      <section>
        <a
          href="https://github.com/BenjaminSzodo" target="_blank"
          class="group block max-w-xs mx-auto rounded-full p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-white hover:ring-white"
        >
          <div class="flex items-center space-x-3">
            <img
              src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}
              alt=""
              class="h-auto w-10 group-hover:stroke-white rounded"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-white group-hover:text-black text-sm font-semibold">
            GitHub
            </h3>
          </div>
        </a>
      </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact2;
