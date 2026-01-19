import {
  faBalanceScale,
  faCalculator,
  faCalendarAlt,
  faCar,
  faCarCrash,
  faCheck,
  faEdit,
  faExclamationTriangle,
  faGlobe,
  faHandPointRight,
  faList,
  faPlane,
  faPlusCircle,
  faQuestionCircle,
  faShieldAlt,
  faTimes,
  faTimesCircle,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import BannerAccidentsTraveler from '@/components/banners/banner-accidents-traveler'

export default function AccidentsTravelerPage() {
  return (
    <>
      <BannerAccidentsTraveler />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Tot ce trebuie să știi despre asigurarea de accidente călători
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Este adevărat că nu știi niciodată ce îți rezervă viitorul și că
              „ce ți-e scris înainte ți-e pus", dar, în loc să te lași pe mâna
              hazardului, poți să-ți construiești o strategie eficientă, prin
              care să diminuezi impactul unor evenimente neprevăzute asupra
              bugetului. Din această perspectivă, o asigurare de accidente
              călători este un instrument de protecție pentru tine și cei dragi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              În ce constă o astfel de poliță de asigurare și cum ar putea să-ți
              fie de folos? Cum alegi oferta cea mai bună pentru nevoile tale?
              Iată câteva dintre întrebările firești pe care ți le poți pune,
              când vine vorba despre asigurarea pentru accidente de călători, și
              la care îți oferim răspunsul, în cele ce urmează.
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
              href="#ce-inseamna"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Ce înseamnă asigurarea de accidente călători</strong>
              </span>
            </Link>

            <Link
              href="#vs-medicala"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Asigurare călători vs medicală călătorie</strong>
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
              href="#ce-nu-acopera"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Ce nu acoperă polița</strong>
              </span>
            </Link>

            <Link
              href="#valabilitate"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Valabilitatea poliței</strong>
              </span>
            </Link>

            <Link
              href="#alte-beneficii"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Alte beneficii oferite</strong>
              </span>
            </Link>

            <Link
              href="#cum-inchei"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEdit} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cum închei asigurarea</strong>
              </span>
            </Link>

            <Link
              href="#cost-timp"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faCalculator} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cât costă și în cât timp</strong>
              </span>
            </Link>
          </div>
        </div>

        <div
          id="ce-inseamna"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCarCrash}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce înseamnă o asigurare de accidente călători</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Asigurarea de accidente călători este un tip de asigurare
              facultativă, prin care sunt acoperite cheltuielile în cazul
              producerii, pe un drum public, a unui accident rutier în care este
              implicat autovehiculul menționat în polița de asigurare.
            </p>

            <p className="text-gray-700 leading-relaxed">
              O astfel de poliță oferă protecție prin asigurare atât în cazul
              persoanelor, cât și al bagajelor nominalizate în contractul de
              asigurare. Este important de reținut că o asigurare accidente
              călători se adresează atât persoanelor fizice, cât și celor
              juridice. De exemplu, poți beneficia de o astfel de poliță în
              cazul în care călătorești cu mașina personală în drum spre
              serviciu sau într-o delegație ori dacă lucrezi în sistemul de
              transport de tip ridesharing. Totodată, este important de reținut
              că sunt acoperite atât evenimentele care se produc în timpul
              deplasării în sine, cât și pe perioada staționării.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            Citește mai multe și despre{' '}
            <Link
              href="https://www.asigurari.ro/asigurare/accidents_taxi"
              target="_blank"
              className="text-blue-700 md:hover:underline font-bold"
              rel="noopener"
            >
              asigurarea de accidente pentru pasageri taxi
            </Link>
            .
          </p>
        </div>

        <div
          id="vs-medicala"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Asigurarea pentru accidente călători vs asigurarea medicală de
                călătorie
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Dacă te întrebi care sunt diferențele dintre o asigurare de
              accidente călători și o{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/travel"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurare medicala de calatorie
              </Link>
              , trebuie să știi că este vorba despre două instrumente financiare
              de protecție în cazul unor evenimente neprevăzute, care nu se
              exclud unul pe altul, ci se pot completa.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faPlane}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Asigurare medicală de călătorie
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Astfel, așa cum îi spune și numele, o poliță medicală de
                  călătorie va acoperi cheltuielile în cazul unor evenimente
                  medicale care pot să survină în timpul unei deplasări în
                  străinătate, atâta vreme cât acestea nu sunt din vina ta.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCar}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Asigurare de accidente călători
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  În schimb, o asigurare călători este un instrument de
                  protecție în cazul unor accidente rutiere produse în România
                  și în care ai fost implicat. O astfel de poliță poate fi
                  extinsă, dacă dorești, și pentru accidente rutiere în
                  străinătate, contra unor costuri suplimentare.
                </p>
              </div>
            </div>
          </div>
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
              <strong>Ce acoperă asigurarea de accidente a călătorilor</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pe piață sunt multe oferte de polițe de asigurare pentru accidente
            cu pasageri și bagaje, fiecare dintre ele având beneficii diferite.
            Totuși, în general, o astfel de poliță acoperă riscuri generate de
            un eventual accident rutier, cum ar fi:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">decesul</span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                invaliditatea permanentă, totală sau parțială
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                spitalizarea
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                deteriorarea bagajelor deținute de asigurat
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                distrugerea bagajelor asiguratului aflat în autovehiculul
                menționat în poliță
              </span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            Acoperirea cheltuielilor în astfel de situații se face în limita
            sumei asigurate prin contract și reprezintă maximul răspunderii
            asiguratorului, în cazul în care se produc exclusiv evenimente
            asigurate prin poliță.
          </p>
        </div>

        <div
          id="ce-nu-acopera"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce nu acoperă o poliță de asigurare pentru accidente călători
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Printr-o asigurare pentru accidente călători și bagaje nu se acordă
            despăgubiri, dacă:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul rutier este o consecință a unui conflict militar,
                război civil, a unei revolte sau a unui act de terorism
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul rutier s-a produs în urma unei explozii atomice, a
                contaminării radioactive ori a radiațiilor
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asiguratul suferea de anumite afecțiuni medicale înainte de
                încheierea poliței de asigurare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                există recidive sau convalescențe ale unor afecțiuni
                neconsolidate
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentul s-a produs pe fondul consumului de alcool, droguri,
                medicamente fără prescripție medicală sau al consumului excesiv
                de medicamente
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                există dovada de automultilare voluntară, sinucidere, tentativă
                de suicid
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                bagajele sunt pierdute sau furate
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                bagajele au fost deteriorate sau distruse, cu intenție, din vina
                asiguratului
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asiguratul a participat sau a condus autovehiculul menționat în
                polița de asigurare, în orice fel de cursă, test de rezistență
                sau competiție
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Bunuri pentru care nu se acordă despăgubiri:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  acte, manuscrise, bilete de călătorie
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  cecuri, obligațiuni, titluri, hârtii de valoare
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  obiecte de artă sau realizate din metale ori pietre prețioase
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  îmbrăcăminte de mare valoare: de colecție, din blană naturală
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="valabilitate"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Care este valabilitatea unei polițe de asigurare pentru
                accidente cu pasageri
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Valabilitatea unei polițe de asigurare pentru accidente cu
              pasageri și bagaje este menționată în contract. De obicei, o
              astfel de asigurare se încheie pe o durată de 12 luni. Dacă la
              sfârșitul perioadei contractuale dorești să prelungești
              valabilitatea poliței, o poți face în aceleași condiții sau cu
              modificări ale primei de asigurare ori alte schimbări care răspund
              mai bine nevoilor tale. Împreună cu un consultant, poți opta
              pentru varianta potrivită.
            </p>
          </div>
        </div>

        <div
          id="alte-beneficii"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce alte beneficii oferă asigurarea de accidente a călătorilor
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Dincolo de riscurile acoperite, o poliță de asigurare accidente
            călători oferă și alte beneficii, care diferă, în funcție de oferta
            fiecărui asigurator. Cele mai importante dintre acestea și regăsite
            în majoritatea ofertelor asiguratorilor sunt:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Flexibilitatea
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  poți adăuga extinderea valabilității poliței și în afara
                  țării, ai posibilitatea de a opta pentru o altă frecvență a
                  plății de asigurare (lunară, trimestrială etc.). Toate
                  modificările pot fi făcute cu respectarea condițiilor
                  contractuale.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Protecție
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  beneficiezi de protecție prin asigurare în condițiile
                  prevăzute în contractul de asigurare, în timpul deplasărilor
                  în interes de serviciu, de la domiciliu la locul de muncă, în
                  timp ce îți îndeplinești sarcinile de serviciu etc.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Personalizare
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  în funcție de oferta și de condițiile asiguratorului, îți poți
                  personaliza polița de asigurare, cu ajutorul unui consultant,
                  astfel încât aceasta să răspundă mai bine nevoilor tale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="cum-inchei"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Cum poți încheia o asigurare de accidente cu călători și bagaje
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Dacă ești în căutarea unei asigurări de accidente rutiere pasageri
              și bagaje, ai de unde alege. Piața asigurărilor este plină de
              oferte. Însă cum poți fi sigur că opțiunile tale sunt cele mai
              potrivite pentru tine și cei dragi? Răspunsul este simplu: cu
              ajutorul unui partener de nădejde, cu experiență în domeniu, care
              să-ți ofere consultanța de care ai nevoie pentru a face alegeri
              inspirate.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Din această perspectivă, ai la dispoziție expertiza
              www.asigurari.ro Astfel, vei beneficia de o analiză a ofertelor
              propuse de operatorii de pe piața asigurărilor, în urma căreia
              compania va identifica ce pachete de asigurare accidente călători
              reprezintă soluția cea mai bună pentru tine. Totodată,
              specialiștii www.asigurari.ro îți vor explica tot ce trebuie să
              știi despre drepturile pe care le ai și obligațiile pe care le
              implică fiecare ofertă. Tot acest proces este special conceput
              pentru ca tu să iei decizii în cunoștință de cauză. La final, vei
              primi polița de asigurare pentru accidente călători pe care o
              dorești, în funcție de opțiunile pe care le-ai bifat.
            </p>
          </div>
        </div>

        <div
          id="cost-timp"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCalculator}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Cât costă asigurarea de accidente a călătorilor și în cât timp o
                obții
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Dacă te gândești la un proces complicat și de durată, când vine
              vorba despre încheierea unei polițe de asigurare accidente
              călători, află că am conceput special pentru tine un sistem
              inteligent și rapid. Concret, alături de noi, câștigi timp prețios
              și faci alegeri inspirate. Pe www.asigurari.ro îți punem la
              dispoziție un comparator de prețuri online, pentru a vedea
              prețurile diverselor oferte de asigurare. Nu ai nevoie decât de
              cinci minute, ca să afli tot ce ai nevoie despre costurile unei
              astfel de polițe.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Odată ce ai ales o asigurare, ai posibilitatea de a plăti fie prin
              transfer bancar, fie cu un card VISA, VISA Electron, MASTERCARD
              sau Maestro. Pe www.asigurari.ro folosim protocoale de securitate
              moderne și sigure, adaptate la legislația în vigoare, pentru ca tu
              să poți încheia polița de asigurare dorită, fără grijă. Și pentru
              că îți suntem alături până la capăt, îți livrăm polița de
              asigurare de accidente călători aproape instant, pe e-mail, fără
              costuri suplimentare.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed italic">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            Dacă ești în căutarea unei oferte complete pentru o asigurare de
            accidente călători și vrei să faci alegeri inspirate, ești la locul
            potrivit. Informațiile explicate mai sus îți vor fi de folos ca să
            iei decizii în cunoștință de cauză. Totodată, beneficiezi de
            sprijinul unui aliat puternic, cu vastă experiență în domeniu:
            www.asigurari.ro Drumul tău printre opțiunile de pe piață va fi unul
            ghidat inteligent, pentru ca tu să alegi ofertele ce răspund cel mai
            bine nu doar nevoilor, ci și aspirațiilor tale.
          </p>
        </div>
      </div>
    </>
  )
}
