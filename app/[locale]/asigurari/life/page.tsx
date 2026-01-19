import {
  faBriefcase,
  faChartLine,
  faChartPie,
  faCheck,
  faClock,
  faCoins,
  faCreditCard,
  faEdit,
  faEuroSign,
  faGraduationCap,
  faHandshake,
  faHeartbeat,
  faInfoCircle,
  faLayerGroup,
  faList,
  faMapMarkerAlt,
  faPiggyBank,
  faPlane,
  faPlus,
  faPlusCircle,
  faQuestionCircle,
  faSearch,
  faShield,
  faShieldAlt,
  faShieldHeart,
  faUserShield,
  faUsers
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerLife from '@/components/banners/banner-life'
export const metadata: Metadata = {
  title:
    'Asigurare de Viață - Securitate Financiară pentru Familie | Asigurari.ro',
  description:
    'Asigurare de viață pentru protecția familiei tale. Securitate financiară în caz de deces sau invaliditate.'
}

export default function LifeLandingPage() {
  return (
    <>
      <BannerLife />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare de viata Online si Calculator de Asigurare de viata
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Într-o lume plină de incertitudini, cu toții ne dorim să le oferim
              celor dragi cât mai multe motive de a privi cu încredere viitorul.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faList}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              Cuprins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link
              href="#despre-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Tot despre asigurarea de viață</strong>
              </span>
            </Link>

            <Link
              href="#ce-este-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Ce este asigurarea de viață</strong>
              </span>
            </Link>

            <Link
              href="#tipuri-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faLayerGroup} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Tipuri de asigurare de viață</strong>
              </span>
            </Link>

            <Link
              href="#asigurare-credit"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faCreditCard} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurarea atașată unui credit</strong>
              </span>
            </Link>

            <Link
              href="#asigurare-economisire"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPiggyBank} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurarea cu economisire</strong>
              </span>
            </Link>

            <Link
              href="#asigurare-investitie"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faChartLine} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurarea cu investiție</strong>
              </span>
            </Link>

            <Link
              href="#cum-inchei-polita"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEdit} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cum închei o poliță</strong>
              </span>
            </Link>

            <Link
              href="#alte-asigurari"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Alte tipuri de asigurări</strong>
              </span>
            </Link>
          </div>
        </div>

        <div
          id="despre-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faShieldHeart}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Tot ce trebuie să știi despre asigurarea de viață</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Dacă te întrebi care este scutul financiar minimal ce te poate
              pune la adăpost, în cazul unor scenarii nefaste, ce țin de
              neprevăzut, este timpul să descoperi avantajele unei asigurări de
              viață. O astfel de poliță îți permite să continui planurile chiar
              și atunci când contextul devine nesigur și să contezi pe un
              sprijin financiar garantat, în momentele în care îți setezi noi
              obiective.
            </p>
          </div>
        </div>

        <div
          id="ce-este-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce este asigurarea de viață</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Acest tip de poliță se adresează, în general, persoanelor fizice
              cu vârsta cuprinsă între 16 și 65 de ani, cu rezidența în România.
              Contractul aferent se semnează între asigurat și o companie de
              asigurări, cu beneficii asupra unuia sau mai multor beneficiari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Vârsta eligibilă</h3>
              <p className="text-gray-700 text-sm">16 - 65 de ani</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Rezidența</h3>
              <p className="text-gray-700 text-sm">România</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Contract</h3>
              <p className="text-gray-700 text-sm">
                Între asigurat și companie
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faEuroSign}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Costuri și factori de influență
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Din punctul de vedere al costurilor totale ale unei asemenea
                  polițe, este mai avantajoasă încheierea acesteia la o vârstă
                  mică sau medie. Factorii ce pot influența valoarea primelor
                  includ vârsta asiguratului, respectiv bolile specifice care
                  pot crește riscul pe care și-l asumă societatea de asigurări.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faShield}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Riscuri de bază acoperite
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      invaliditatea permanentă de gradul I sau II, survenită ca
                      urmare a unui accident sau a unei boli
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      decesul din orice cauză
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Clauze pentru acoperiri suplimentare
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  decesul rezultat dintr-un accident
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  invaliditatea permanentă, cauzată de un accident
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  producerea unor fracturi, entorse, luxații sau a unor arsuri,
                  în urma unui accident
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  necesitatea unor intervenții chirurgicale, ca urmare a unui
                  accident
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  invaliditatea temporară, ca urmare a unui accident sau a unei
                  boli, cu acordarea unei indemnizații zilnice
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="tipuri-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce tipuri de asigurare de viață sunt disponibile pe piață
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Când vrei să asiguri un viitor financiar sigur pentru familia ta,
              ai posibilitatea de a te bucura și de avantaje conexe.
              Reglementate prin intermediul unor clauze suplimentare, adăugate
              poliței de bază, componentele de mai jos reprezintă avantaje
              certe, care se răsfrâng în mod pozitiv asupra celor dragi. Acestea
              pot fi alese separat sau incluse într-un tip distinct de asigurare
              de viață, cea mixtă.
            </p>
          </div>
        </div>

        <div
          id="asigurare-credit"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Asigurarea atașată unui credit</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Menită să asigure un plus de siguranță în viața ta sau a familiei
              tale, în eventualitatea accesării unui credit, în special a unuia
              garantat cu ipoteca, acest tip de asigurare are un dublu rol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-blue-600 text-xl"
                />
                <h3 className="font-bold text-gray-800">
                  Siguranță financiară
                </h3>
              </div>
              <p className="text-gray-700 text-sm">
                Oferă posibilitatea de a acoperi integral soldul creditului, cu
                ajutorul asiguratorului, în situații precum invaliditatea
                totală, accidentele sau decesul, survenit din orice cauză.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-blue-600 text-xl"
                />
                <h3 className="font-bold text-gray-800">
                  Pierderea locului de muncă
                </h3>
              </div>
              <p className="text-gray-700 text-sm">
                Sprijin financiar prin plata a maximum 12 rate de credit în
                primii ani de asigurare, din partea asiguratorului, conform
                clauzelor contractului încheiat.
              </p>
            </div>
          </div>
        </div>

        <div
          id="asigurare-economisire"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faPiggyBank}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Asigurarea cu componentă de economisire</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Orientată spre un public format din părinții care își doresc să le
              ofere copiilor un sprijin financiar pentru studiile superioare,
              acest tip de asigurare se caracterizează printr-o durată de
              valabilitate pe termen lung.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Pentru educația copiilor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La atingerea maturității poliței, plata sumei aferente se
                  poate face integral, respectiv sub forma unei rente, la o dată
                  stabilită în prealabil.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Acoperire extinsă
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Acest tip de poliță acoperă cheltuielile generate de decesul
                  persoanei asigurate și poate avea atașată una sau mai multe
                  clauze suplimentare sau chiar o componentă de investiție.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="asigurare-investitie"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Asigurarea cu componentă de investiție</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Acest tip de asigurare este un veritabil instrument financiar, a
              cărui valabilitate este întinsă pe termen mediu și lung. Prin
              intermediul unei polițe cu componentă de investiție atașată, se
              pot realiza operațiuni de transfer a sumelor de bani, respectiv de
              direcționare a acestora în programe de investiție dedicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="text-blue-600 text-xl"
                />
                <h3 className="font-bold text-gray-800">
                  Protecție împotriva inflației
                </h3>
              </div>
              <p className="text-gray-700 text-sm">
                Măsură de precauție în fața inflației prin investiții strategice
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faCoins}
                  className="text-blue-600 text-xl"
                />
                <h3 className="font-bold text-gray-800">
                  Cumpărarea unităților de fond
                </h3>
              </div>
              <p className="text-gray-700 text-sm">
                Conform contractului cu asiguratorul, instrument flexibil de
                investiție
              </p>
            </div>
          </div>
        </div>

        <div
          id="cum-inchei-polita"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Cum poți încheia o poliță de asigurare de viață</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pentru încheierea unei polițe de asigurare de viață, poți apela
              oricând la serviciile www.asigurari.ro. Acesta va gestiona
              identificarea celor mai bune oferte dintre cele disponibile pe
              piață. De asemenea, www.asigurari.ro îți va oferi informații cu
              privire la drepturile și obligațiile aferente fiecărei oferte în
              parte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">
                Identificare oferte
              </h3>
              <p className="text-gray-700 text-sm">
                Găsirea celor mai bune oferte de pe piață
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Sub 5 minute</h3>
              <p className="text-gray-700 text-sm">
                Achiziționarea rapidă online
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faShield}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Plată securizată</h3>
              <p className="text-gray-700 text-sm">
                Transfer bancar sau carduri VISA/Mastercard
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Site-ul folosește protocoale de securitate moderne și sigure,
              adaptate legislației în vigoare. Livrarea polițelor de asigurare
              de viață se face aproape instantaneu, pe e-mail, fără costuri
              suplimentare. Acum ai o imagine mai clară asupra oportunității
              încheierii unei polițe de asigurare de viață. Insurance Broker
              este alături de tine și de familia ta, pentru un viitor cu mai
              puține riscuri.
            </p>
          </div>
        </div>

        <div
          id="alte-asigurari"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              Alte tipuri de asigurări ce te-ar putea interesa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Link
              href="https://www.asigurari.ro/asigurare/health"
              target="_blank"
              className="block p-6 rounded-lg border border-gray-200 md:hover:bg-gray-200 transition-all duration-300 group"
              rel="noopener"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  className="text-blue-600 text-3xl mb-4 group-hover:text-green-500 transition-transform duration-300"
                />
                <h3 className="font-bold text-blue-700 text-lg mb-2">
                  Asigurare de Sănătate
                </h3>
                <p className="text-gray-700 text-sm">
                  Protecție completă pentru sănătatea ta și a familiei
                </p>
              </div>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/accidents"
              target="_blank"
              className="block p-6 rounded-lg border border-gray-200 md:hover:bg-gray-200 transition-all duration-300 group"
              rel="noopener"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-blue-600 text-3xl mb-4 group-hover:text-green-500 transition-transform duration-300"
                />
                <h3 className="font-bold text-blue-700 text-lg mb-2">
                  Asigurare de Accidente
                </h3>
                <p className="text-gray-700 text-sm">
                  Acoperire pentru riscurile de accidente în viața cotidiană
                </p>
              </div>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/travel"
              target="_blank"
              className="block p-6 rounded-lg border border-gray-200 md:hover:bg-gray-200 transition-all duration-300 group"
              rel="noopener"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="text-blue-600 text-3xl mb-4 group-hover:text-green-500 transition-transform duration-300"
                />
                <h3 className="font-bold text-blue-700 text-lg mb-2">
                  Asigurare Medicală de Călătorie
                </h3>
                <p className="text-gray-700 text-sm">
                  Siguranță medicală pentru călătoriile tale în străinătate
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
