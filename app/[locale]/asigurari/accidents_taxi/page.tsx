import {
  faCalendarAlt,
  faCheck,
  faClock,
  faEdit,
  faEuroSign,
  faHeart,
  faInfoCircle,
  faList,
  faMapMarkerAlt,
  faSearch,
  faShield,
  faSuitcase,
  faTaxi,
  faTimes,
  faTimesCircle,
  faUmbrella,
  faWheelchair
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import BannerAccidentsTaxi from '@/components/banners/banner-accidents-taxi'

export default function AccidentsTaxiPage() {
  return (
    <>
      <BannerAccidentsTaxi />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare de Accidente Pasageri Taxi Online si Calculator de
              Asigurare Accidente Pasageri Taxi
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Un eveniment rutier poate interveni în orice situație, chiar și în
              timpul unei curse cu taxiul. Pentru ca stabilitatea ta financiară
              să nu fie periclitată de un asemenea eveniment, ai la dispoziție o
              asigurare a conducătorului auto, persoanelor și bagajelor aflate
              în autovehiculul de taxi.
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
                <strong>Tot despre asigurarea PAD taxi</strong>
              </span>
            </Link>

            <Link
              href="#ce-acopera"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce acoperă asigurarea</strong>
              </span>
            </Link>

            <Link
              href="#riscuri-neacoperite"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Riscuri neacoperite</strong>
              </span>
            </Link>

            <Link
              href="#indemnizatii"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEuroSign} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Când se acordă indemnizații</strong>
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
          </div>
        </div>

        <div
          id="despre-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faTaxi}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea de accidente pasageri
                taxi
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Emiterea și particularitățile poliței sunt reglementate de OUG
              49/2019, Art. 24, iar beneficiile oferite de aceasta se adresează
              atât taximetriștilor, cât și șoferilor independenți, care practică
              ridesharing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">
                Acoperire teritorială
              </h3>
              <p className="text-gray-700 text-sm">
                Exclusiv pe teritoriul României
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Perioadă minimă</h3>
              <p className="text-gray-700 text-sm">6 luni</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Perioadă maximă</h3>
              <p className="text-gray-700 text-sm">12 luni</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Asigurarea este valabilă exclusiv pe teritoriul României, pe durata
            în care vehiculul este în mișcare, staționat sau oprit, precum și în
            momentul în care pasagerii se îmbarcă sau coboară din acesta.
            Perioada minimă de asigurare, aferentă acestei polițe, este de șase
            luni, iar cea maximă, de 12 luni.{' '}
          </p>
        </div>

        <div
          id="ce-acopera"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faUmbrella}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce acoperă asigurarea de accidente pasageri taxi</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Potrivit reglementărilor, asigurarea de accidente pasageri taxi
              acoperă persoanele care se află în vehicul, inclusiv pe cea aflată
              la volan, în timpul unui accident. Pagubele acoperite includ și
              deteriorarea sau distrugerea bagajelor, atât ca urmare a unui
              eveniment rutier, cât și din cauza furtului, efracției sau a
              actelor de tâlhărie.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentele produse pe drumuri deschise circulației publice
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul produs ca urmare a unei catastrofe: cutremur,
                inundație, precipitații abundente, alunecări de teren sau
                aluviuni cauzate de revărsarea apelor
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul cauzat de căderea vehiculului în apă, în prăpastie
                sau pe copaci sau bolovani
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul survenit ca urmare a derapării sau răsturnării
                vehiculului, precum și ca urmare a iscării unui incendiu
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul cauzat de producerea unei explozii a rezervorului de
                carburant sau a celui de aer comprimat, chiar și în cazul în
                care aceasta nu a fost urmată de un incendiu
              </span>
            </div>
          </div>
        </div>

        <div
          id="riscuri-neacoperite"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Care sunt riscurile neacoperite de asigurarea de accidente
                pasageri taxi
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            La fel ca în cazul oricăror alte tipuri de polițe de asigurare, și
            aceasta are excepții, în privința acordării de despăgubiri. Printre
            riscurile care nu sunt asigurate se numără următoarele:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                pagubele survenite în afara producerii unui accident
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                invaliditatea temporară, survenită din accident, dar care nu a
                necesitat zile de spitalizare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                invaliditatea survenită anterior încheierii contractului de
                asigurare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentarea persoanelor care nu au cetățenie română sau
                rezidență pe teritoriul României
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                deteriorarea, pierderea sau furtul următoarelor tipuri de
                bunuri: bani, documente, manuscrise, obiecte de artă, bijuterii
                sau mărci poștale
              </span>
            </div>
          </div>
        </div>

        <div
          id="indemnizatii"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEuroSign}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>În ce cazuri se acordă indemnizații păgubiților</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Asigurarea de accidente pasageri taxi prevede despăgubiri
            financiare, acordate în condițiile legii și conform contractului
            încheiat. Indemnizațiile se acordă pentru următoarele riscuri
            asigurate:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faWheelchair}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Invaliditate permanentă
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Invaliditate permanentă, totală sau parțială, survenită în
                  cazul călătorilor aflați în vehiculul asigurat, în urma unui
                  accident rutier.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">Deces</h3>
                <p className="text-gray-700 leading-relaxed">
                  Decesul călătorilor aflați în vehiculul asigurat, survenit în
                  urma unui accident rutier în care acesta a fost implicat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faSuitcase}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Deteriorarea bagajelor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Deteriorarea și distrugerea bagajelor călătorilor aflați în
                  vehiculul asigurat, în urma producerii unui accident rutier.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="cum-inchei-polita"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Cum poți încheia o asigurare de accidente pasageri taxi
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              asigurari.ro îți oferă posibilitatea de a încheia rapid o poliță
              pentru asigurarea de accidente pasageri taxi. Brokerul se va ocupa
              de găsirea celor mai bune oferte dintre cele disponibile pe piață.
              De asemenea, www.asigurari.ro îți va oferi informații cu privire
              la drepturile și obligațiile aferente fiecărei oferte în parte,
              iar la final, va elibera polița, conform opțiunilor bifate de
              tine.{' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">
                Găsirea ofertelor
              </h3>
              <p className="text-gray-700 text-sm">
                Cele mai bune oferte de pe piață
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Rapiditate</h3>
              <p className="text-gray-700 text-sm">
                Achiziționare în câteva minute
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

          <p className="text-gray-700 leading-relaxed">
            Pe www.asigurari.ro te așteaptă un comparator de prețuri online de
            la asiguratori de top, care îți permite să achiziționezi asigurarea
            în câteva minute. Poți face plata în mod securizat, fie prin
            transfer bancar, fie cu cardul VISA, VISA Electron, MASTERCARD sau
            Maestro. Site-ul folosește protocoale de securitate moderne și
            sigure, adaptate legislației în vigoare. Livrarea polițelor de
            asigurare obligatorie PAD, respectiv de asigurare facultativă a
            locuinței se face instant, prin intermediul e-mailului, fără costuri
            suplimentare.{' '}
          </p>

          <div className="border border-gray-200 p-4 rounded-lg mt-6">
            <p className="text-gray-700 leading-relaxed italic text-center">
              Acum știi exact ce avantaje îți aduce asigurarea de accidente
              pasageri taxi, dar și cum poți obține rapid polița. Cu ajutorul
              www.asigurari.ro poți porni de fiecare dată la drum cu încredere.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
