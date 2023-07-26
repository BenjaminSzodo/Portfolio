
const Contact = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className="bg-gradient-to-tr from-sky-500 to-sky-200 bg-clip-text font-sans text-4xl font-semibold leading-tight tracking-normal text-transparent antialiased m-4 mb-20">
                    CONTACTO
                </h2>
            </div >
            <div className="flex gap-8 justify-center">
            <section>
        <a
          href="https://api.whatsapp.com/send?phone=5492612510791" target="_blank"
          class="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500"
        >
          <div class="flex items-center space-x-3">
            <img
              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png'}
              alt=""
              class="h-auto w-10 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
            <h3 class="text-green-500 group-hover:text-white text-sm font-semibold">
            Whatsapp
            </h3>
          </div>
        </a>
      </section>
      <section>
        <a
          href="https://www.linkedin.com/in/benjamin-szodo-laborde-a363aa27a/" target="_blank"
          class="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-500 hover:ring-blue-500"
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
          class="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-white hover:ring-white"
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
    )
}

export default Contact