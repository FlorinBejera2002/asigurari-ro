import {
  faFacebookF,
  faInstagram,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-[#031b30] text-gray-400 py-6 md:py-12 lg:py-12 px-0 text-sm w-full max-w-full flex flex-col gap-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 text-left w-full">
          {/* Asigurări Column */}
          <div className="footer-column">
            <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-2">
              Asigurări
            </h3>
            <ul className="flex flex-col list-none p-0">
              <li className="mb-1">
                <Link
                  href="/asigurari/rca"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  RCA
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/casco"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Casco
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/casco_econom"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Casco Econom
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/pad"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Locuință PAD
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/home"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Locuință Facultativă
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/travel"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Călătorie
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/cmr"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  CMR
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rcp"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Malpraxis
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/breakdown"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Asistență Rutieră
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/health"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Sănătate
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/accidents"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Accidente Persoane
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/accidents_taxi"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Accidente Taxi
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/accidents_traveler"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Accidente Călători
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/life"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Viață
                </Link>
              </li>
            </ul>
          </div>

          {/* Informații Utile Column */}
          <div className="footer-column">
            <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-2">
              Informații Utile
            </h3>
            <ul className="flex flex-col list-none p-0">
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/verificare-rca"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Verificare RCA
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/verificare-rovinieta"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Verificare rovinietă
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/verificare-itp"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Verificare ITP
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/bonus-malus"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Bonus Malus
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/schimbare-permis-auto"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Schimbare Permis Auto
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/inmatriculare-masina"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Înmatriculare vehicul
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/radiere-auto"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Radierea auto
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/accidente-usoare"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Accidente ușoare
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/dnt-persoana"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Formular DNT Persoane fizice
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/dnt-companie"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Formular DNT Persoane juridice
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/orase"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Asigurare RCA oraș
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/masina"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Asigurare RCA marcă auto
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/amiabila"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Despre aplicația Amiabilă
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/plata-amenzi"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Despre plata amenzilor
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/asigurari/rca/numere-rosii"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Numere roșii
                </Link>
              </li>
            </ul>
          </div>

          {/* Despre Noi Column */}
          <div className="footer-column">
            <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-2">
              Despre Noi
            </h3>
            <ul className="flex flex-col list-none p-0">
              <li className="mb-1">
                <Link
                  href="/despre-noi"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Despre noi
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/sugestii"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Petiții
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/sugestii"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Sugestii și reclamații
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/contact"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/blog"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/termeni-conditii"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Termeni şi condiţii
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/gdpr"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Politica de prelucrare a datelor cu caracter personal
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/politica-cookies"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Politica de cookie-uri
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/toate-asigurarile"
                  className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                >
                  Produsele/Serviciile noastre
                </Link>
              </li>
            </ul>
          </div>

          {/* Resurse Legale & Social Column */}
          <div>
            <div
              className="flex flex-col justify-between h-full"
              style={{ boxSizing: 'border-box' }}
            >
              <ul className="flex flex-col list-none p-0 justify-start items-start">
                <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-2">
                  Resurse Legale
                </h3>
                <li className="mb-1">
                  <Link
                    href="/info-daune"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    Info daune
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="https://anpc.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    ANPC
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="https://baar.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    BAAR
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="https://asfromania.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    ASF
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="https://baar.ro/asigurati-cu-risc-ridicat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    Asigurați cu risc ridicat
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/asigurari/rca/destinatii-de-vacanta"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    Destinații de vacanță
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/asigurari/travel/tari"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    Asigurare călătorie țară
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/asigurari/rca/city-insurance-faliment"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    City Insurance Faliment
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href="/asigurari/rca/euroins-faliment"
                    className="text-gray-300 text-sm no-underline md:hover:underline md:hover:text-blue-400 md:text-base transition-colors duration-300"
                  >
                    Euroins Faliment
                  </Link>
                </li>
              </ul>

              <div className="flex gap-3 mt-8 md:mt-0">
                <Link
                  href="https://www.facebook.com/Asigurari/"
                  className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full md:hover:-translate-y-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-[20px] text-black"
                  />
                </Link>

                <Link
                  href="https://instagram.com/asigurari.ro"
                  className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full md:hover:-translate-y-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[23px] text-black"
                  />
                </Link>

                <Link
                  href="https://twitter.com/asigurari_ro"
                  className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full md:hover:-translate-y-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-[23px] text-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom border-t border-gray-600 mt-4 pt-4 text-gray-300 text-sm text-left">
          <p>
            © {currentYear} Asigurari.ro. Toate drepturile rezervate, CUI:
            28488207
            <br />
            Str. Gheorghe Manu nr. 8, Sector 1, București, România, Cod poștal:
            011451, Email:{' '}
            <Link
              className="no-underline md:hover:underline text-blue-400 md:hover:text-blue-300"
              href="mailto:contact@asigurari.ro"
              target="_top"
            >
              contact@asigurari.ro
            </Link>
            <br />
            Broker de asigurare înregistrat în Registrul Brokerilor de Asigurare
            și/sau Reasigurare cu nr. RBK-356/15.07.2011
          </p>
        </div>
      </div>
    </div>
  )
}
