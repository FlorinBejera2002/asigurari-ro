import Link from 'next/link'

export default async function ArticleSection() {
  return (
    <section className="products-section pb-8 md:pb-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Link
          href="{{ path('root',{'pageName':'contact'}) }}"
          className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center md:hover:-translate-y-0.5 md:hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div>
            <h3 className="contact-title text-lg font-normal text-black mb-2">
              Contact
            </h3>
            <p className="contact-description text-gray-600 text-sm font-light">
              Contactați-ne pentru asistență
            </p>
          </div>
          <div className="flex items-center justify-center text-gray-600 text-2xl md:group-hover:text-green-400 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M435.9 275L368.1 208L448.1 64L576.1 128L576.1 144C576.1 382.6 382.7 576 144.1 576L128.1 576L64.1 448L208.1 368L275.1 435.8C345.6 402.3 402.4 345.5 435.9 275zM205.3 387.9L85.3 454.5L138 560L144.1 560C373.8 560 560.1 373.8 560.1 144L560.1 137.9L454.7 85.2L388 205.2L447.2 263.7L455.3 271.7L450.4 282C415.3 355.7 355.8 415.2 282 450.2L271.7 455.1L263.7 447L205.2 387.8z" />
            </svg>
          </div>
        </Link>

        <Link
          href="{{ path('root',{'pageName':'damage_info'}) }}"
          className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center md:hover:-translate-y-0.5 md:hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div>
            <h3 className="contact-title text-lg font-normal text-black mb-2">
              Info Daune
            </h3>
            <p className="contact-description text-gray-600 text-sm font-light">
              Informații despre procesul de daune
            </p>
          </div>
          <div className="flex items-center justify-center text-gray-600 text-2xl md:group-hover:text-green-400 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M192 80C165.5 80 144 101.5 144 128L144 512C144 538.5 165.5 560 192 560L448 560C474.5 560 496 538.5 496 512L496 250.5C496 246.9 495.6 243.4 494.8 240L392 240C361.1 240 336 214.9 336 184L336 81.2C332.6 80.4 329.1 80 325.5 80L192 80zM488 224C486.2 221.3 484.2 218.9 481.9 216.6L359.4 94.1C357.1 91.8 354.6 89.8 352 88L352 184C352 206.1 369.9 224 392 224L488 224zM128 128C128 92.7 156.7 64 192 64L325.5 64C342.5 64 358.8 70.7 370.8 82.7L493.3 205.3C505.3 217.3 512 233.6 512 250.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128z" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  )
}
