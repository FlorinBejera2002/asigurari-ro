import {
  faBriefcase,
  faCheck,
  faCheckCircle,
  faCircleInfo,
  faClipboardList,
  faClock,
  faEdit,
  faGraduationCap,
  faHammer,
  faInfoCircle,
  faList,
  faMapMarkerAlt,
  faPlane,
  faPlusCircle,
  faShieldAlt,
  faTimes,
  faTimesCircle,
  faUmbrella,
  faUserCheck
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerTravel from '@/components/banners/banner-travel'

export const metadata: Metadata = {
  title:
    'Asigurare de Călătorie Online - Protecție Medicală în Străinătate | Asigurari.ro',
  description:
    'Asigurare de călătorie pentru toată familia. Acoperire medicală completă în străinătate, asistență 24/7 și prețuri avantajoase.'
}

export default function TravelLandingPage() {
  return (
    <>
      <BannerTravel />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare medicală de călătorie Online si Comparator de Asigurare
              medicală de călătorie
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Cu toții visăm la o vacanță în care să ne relaxăm pe deplin, să
              lăsăm deoparte grijile de peste an și să ne bucurăm de compania
              celor dragi. De toate acestea se ocupă agenția de turism, prin
              pachetul de servicii pe care ni-l propune.
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
              href="#protectie-financiara"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Protecție financiară și asistență</strong>
              </span>
            </Link>

            <Link
              href="#riscuri-asigurate"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Riscuri asigurate și detalii</strong>
              </span>
            </Link>

            <Link
              href="#tot-ce-trebuie-sa-stii"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faCircleInfo} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Tot ce trebuie să știi</strong>
              </span>
            </Link>

            <Link
              href="#ce-este-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce este asigurarea de călătorie</strong>
              </span>
            </Link>

            <Link
              href="#riscuri-acoperite"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Care sunt riscurile asigurate</strong>
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
                <strong>Ce riscuri nu sunt acoperite</strong>
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
              href="#unde-fac-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Unde fac asigurare medicală</strong>
              </span>
            </Link>

            <Link
              href="#pasi-utilizare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Pașii pentru utilizarea poliței</strong>
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
          id="protectie-financiara"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Asigurare călătorie - protecție financiară și servicii de
                asistență în caz de incidente neprevăzute
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea de călătorie este un instrument ideal pentru a
              desfășura călătorii liniștite, gândită special pentru momentele în
              care neprevăzutul poate afecta starea de bine a oamenilor. Tip de
              poliță facultativă, asigurarea medicală de călătorie permite
              alegerea riscurilor acoperite, are o durată minimă de trei zile și
              poate ajunge până la un an calendaristic. O asigurare de călătorie
              online este valabilă pentru:{' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 w-full">
            <div className="p-4 rounded-lg text-center border border-gray-200">
              <FontAwesomeIcon
                icon={faPlane}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Turism</h3>
              <p className="text-gray-700 text-sm">
                Călătorii în scop turistic
              </p>
            </div>

            <div className="p-4 rounded-lg text-center border border-gray-200">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Afaceri</h3>
              <p className="text-gray-700 text-sm">Călătorii de business</p>
            </div>

            <div className="p-4 rounded-lg text-center border border-gray-200">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Studii</h3>
              <p className="text-gray-700 text-sm">Efectuarea studiilor</p>
            </div>

            <div className="p-4 rounded-lg text-center border border-gray-200">
              <FontAwesomeIcon
                icon={faHammer}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Muncă</h3>
              <p className="text-gray-700 text-sm">
                Onorarea contractului de muncă
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Pentru a încheia o poliță de călătorie în străinătate, o{' '}
            <Link
              href="https://www.asigurari.ro/asigurare/rca"
              target="_blank"
              className="text-blue-700 md:hover:underline font-bold"
              rel="noopener"
            >
              asigurare RCA
            </Link>
            , o asigurare de{' '}
            <Link
              href="https://www.asigurari.ro/asigurare/breakdown"
              target="_blank"
              className="text-blue-700 md:hover:underline font-bold"
              rel="noopener"
            >
              asistență rutieră
            </Link>{' '}
            sau alte tipuri de astfel de produse, apelează cu încredere la
            serviciile online puse la dispoziție pe{' '}
            <Link
              href="https://www.asigurari.ro"
              target="_blank"
              className="text-blue-700 md:hover:underline font-bold"
              rel="noopener"
            >
              {' '}
              asigurari.ro
            </Link>
            !
          </p>
        </div>

        <div
          id="riscuri-asigurate"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faUmbrella}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>
                Asigurare de călătorie - riscuri asigurate și alte detalii utile
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea de sănătate pentru călătorie include două riscuri de
              bază, de îmbolnăvire și de accident, la care se adaugă și altele
              suplimentare, precum storno pentru anularea călătoriei cu avionul,
              storno pentru biletele de avion, pierderea sau furtul unor
              documente, întreruperea călătoriei, refuzul companiei aeriene de a
              realiza îmbarcarea, cheltuieli medicale de urgență sau întârzierea
              bagajelor pentru mai mult de 12 ore. Polița de asigurări de
              călătorie în străinătate poate fi încheiată de cetățeni români și
              cetățeni străini care au rezidență în România, cu anumite limite
              de vârstă. O asigurare medicală de călătorie online poate fi
              obținută în câteva minute, plata realizându-se în mod securizat,
              iar livrarea ei se face aproape instantaneu, fără costuri
              suplimentare.{' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  className="text-green-500 text-xl"
                />
                <h3 className="font-bold text-gray-800">Eligibilitate</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Cetățeni români și cetățeni străini cu rezidență în România, cu
                anumite limite de vârstă
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-green-500 text-xl"
                />
                <h3 className="font-bold text-gray-800">Proces rapid</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Asigurare online în câteva minute, plată securizată, livrare
                instantanee prin email
              </p>
            </div>
          </div>
        </div>

        <div
          id="tot-ce-trebuie-sa-stii"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea de călătorie
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Odată ce destinația aleasă este pe placul întregii familii, iar
              condițiile de cazare îi fac pe toți cei dragi să se simtă ca
              acasă, nimic nu poate decurge altfel decât conform planului, nu-i
              așa? Ei bine, asigurarea medicală de călătorie este gândită tocmai
              pentru momentele în care neprevăzutul ar putea afecta bucuria unor
              momente dedicate relaxării. În plus, pentru mai multă liniște
              sufletească poți încheia și asigurare călătorie storno; astfel,
              dacă din diverse motive nu mai pleci în vacanță cheltuielile
              pentru voiaj îți sunt returnate. Dacă vrei un sejur fără stres,
              poți lua în considerare avantajele prezentate mai jos pentru
              asigurare vacanta
            </p>
          </div>
        </div>

        <div
          id="ce-este-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-info-circle text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>
                Ce este asigurarea medicală de călătorie în străinătate?
              </strong>
            </h2>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed space-y-4 border-l-4 pl-4 border-green-500">
            <p>
              Acest tip de poliță este unul facultativ și se adresează
              clienților interesați de protecție financiară pe perioada
              deplasărilor în afara granițelor țării. Dacă decizi să închei
              această asigurare calatorie ieftina, te vei bucura de
              posibilitatea de a alege riscurile acoperite, în funcție de scopul
              călătoriei, iar în cazul producerii unui eveniment neprevăzut, nu
              vei achita cheltuieli suplimentare. Suma asigurată este de maximum
              50.000 de euro, în funcție de țara în care alegi să călătorești.
            </p>

            <p>
              Durata minimă pentru care poate fi încheiată o astfel de poliță
              este de trei zile, iar intervalul maxim ajunge chiar și până la un
              an calendaristic. În cazuri excepționale, asiguratul poate
              beneficia de o extindere a perioadei de asigurare de sanatate de
              calatorie cu 30 de zile. Pentru aceasta, este nevoie ca asiguratul
              să solicite în scris prelungirea valabilității poliței și să
              declare existența daunelor survenite până la data solicitării.
            </p>

            <p>
              Înștiințarea asiguratorului se va face cu minimum 72 ore înaintea
              expirării valabilității poliței, pentru ca acesta să-și exprime
              acordul de prelungire prin emiterea unui act declarativ.
              Încheierea poliței se face, în mod obligatoriu, pe teritoriul
              României, anterior începerii călătoriei în străinătate. Acoperirea
              riscurilor cuprinse în poliță depinde de îndeplinirea cumulativă a
              unor condiții specifice. Astfel, producerea unor evenimente
              neprevăzute trebuie să fie independentă de voința asiguratului,
              iar acesta trebuie să nu aibă interdicția de a părăsi România sau
              de a intra pe teritoriul altei țări.
            </p>

            <p>
              De asemenea, este necesar ca asiguratul să aibă asupra sa, de-a
              lungul deplasării, documentele de identitate și de călătorie
              specifice (pașaport cu viză valabilă, asigurare medicală, precum
              și dovada plății taxelor aferente deplasării). Asigurare medicală
              străinătate este valabilă pentru deplasări în străinătate în scop
              turistic, în vederea realizării unor demersuri de business, în
              vederea efectuării studiilor sau pentru onorarea unui contract de
              muncă. Unele companii oferă inclusiv asigurare medicală călătorie
              copil.
            </p>

            <p>
              Asigurarea nu este valabilă în țările în care asiguratul deține un
              domiciliu stabil sau rezidență, respectiv cetățenie. Polița nu
              poate fi încheiată pentru deplasări în țări ca Irak, Iran,
              Afganistan, Siria, Liban, Coreea de Nord, Regiunea Crimeea sau
              Venezuela. Restricțiile de acoperire se aplică și în cazurile de
              graviditate pentru sarcinile de peste 26 de săptămâni, pentru
              situațiile de naștere, de acord terapeutic sau pentru tratamentul
              afecțiunilor neoplazice.
            </p>

            <p>
              Bolile cu transmitere sexuală sau vaccinările de orice fel nu
              intră nici ele în aria de acoperire a acestei polițe, ceea ce este
              valabil și în cazul operațiilor estetice sau al celor
              stomatologice. Prin asigurarea medicală de călătorie nu pot fi
              decontate serviciile medicale utilizate fără consimțământul
              prealabil al companiei de asigurări, prin intermediul companiei de
              asistență. Protecția financiară este condiționată de plata
              anticipată și integrală a primei de asigurare, precum și de
              comunicarea evenimentului către compania de asigurări în cel mai
              scurt timp, anterior prestării serviciilor medicale.
            </p>
          </div>
        </div>

        <div
          id="riscuri-acoperite"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-check-circle text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Care sunt riscurile asigurate</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Cele două riscuri de bază, incluse în această poliță, sunt
              reprezentate de îmbolnăvire și de accident. La ele se adaugă
              riscurile disponibile opțional, în funcție de pachetul pentru care
              optează fiecare client. Printre beneficiile de care te poți bucura
              suplimentar se numără cele de mai jos, fără ca lista să fie
              limitată la acestea:{' '}
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="border border-gray-200 p-4 rounded-xl w-full">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="text-blue-700"
                />
                Beneficii
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Storno pentru anularea călătoriei în străinătate
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Storno pentru bilete de avion
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Răspundere civilă privată în străinătate
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Pierderea sau furtul unor documente
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Întreruperea călătoriei
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Anularea călătoriei pe motiv de faliment al companiei
                    aeriene
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Refuzul companiei aeriene de a realiza îmbarcarea
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Cheltuieli medicale de urgență
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Întârzierea mijlocului de transport peste 12 ore
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Furtul, pierderea sau distrugerea bagajelor
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Întârzierea bagajelor pentru mai mult de 12 ore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="riscuri-neacoperite"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-times-circle text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>
                Ce riscuri nu sunt acoperite de asigurarea medicală de călătorie
                în străinătate?
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-red-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Există și evenimente care nu sunt asigurate cu ajutorul acestei
              polițe, indiferent de clauzele contractului, de oferta obținută
              sau de beneficiile incluse. Dintre acestea fac parte următoarele:
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                tentativa de sinucidere sau sinuciderea
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                evenimentele cauzate de consumul de alcool, droguri, abuz de
                medicamente sau stupefiante
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                conducerea unui vehicul fără permis de conducere
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                evenimentele puse în legătură cu epidemiile sau pandemiile
                declarate de autoritățile naționale și internaționale
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                evenimentele petrecute în timpul practicării de activități cu
                grad ridicat de periculozitate
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                evenimentele petrecute în țările de domiciliu
              </span>
            </div>
          </div>
        </div>

        <div
          id="cum-inchei-polita"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-edit text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>
                Cum poți încheia o poliță de asigurare de sănătate de călătorie?
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pentru încheierea unei polițe de asigurare medicală de călătorie,
              poți apela oricând la serviciile www.asigurari.ro Compania
              identifică, pentru tine, cele mai bune oferte dintre cele
              disponibile pe piață. De asemenea, www.asigurari.ro îți oferă
              informații cu privire la drepturile și obligațiile aferente
              fiecărei oferte în parte. În momentul în care procesul ajunge la
              final, www.asigurari.ro eliberează polița, conform opțiunilor
              bifate de tine.{' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-search text-blue-500 text-2xl mb-3"></i>
              <h3 className="font-bold text-gray-800 mb-2">
                Identificare oferte
              </h3>
              <p className="text-gray-700 text-sm">
                Găsirea celor mai bune oferte de pe piață
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-info text-blue-500 text-2xl mb-3"></i>
              <h3 className="font-bold text-gray-800 mb-2">
                Informații complete
              </h3>
              <p className="text-gray-700 text-sm">
                Drepturi și obligații pentru fiecare ofertă
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-file-contract text-blue-500 text-2xl mb-3"></i>
              <h3 className="font-bold text-gray-800 mb-2">Eliberare poliță</h3>
              <p className="text-gray-700 text-sm">
                Conform opțiunilor alese de tine
              </p>
            </div>
          </div>
        </div>

        <div
          id="unde-fac-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-map-marker-alt text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Unde fac asigurare medicală de călătorie?</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pe www.asigurari.ro ai la dispoziție un comparator de prețuri
              online de la asiguratori de top, care îți permite să achiziționezi
              polița în mai puțin de cinci minute. Plata se poate face în mod
              securizat, fie prin transfer bancar, fie cu cardul VISA, VISA
              Electron, MASTERCARD sau Maestro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <i className="fas fa-clock text-blue-600 text-2xl mb-3"></i>
              <h3 className="font-bold text-blue-700 mb-2">Sub 5 minute</h3>
              <p className="text-gray-700 text-sm">
                Achiziționare rapidă online
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <i className="fas fa-shield text-blue-600 text-2xl mb-3"></i>
              <h3 className="font-bold text-blue-700 mb-2">Plată securizată</h3>
              <p className="text-gray-700 text-sm">
                Transfer bancar sau carduri VISA/Mastercard
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <i className="fas fa-envelope text-blue-600 text-2xl mb-3"></i>
              <h3 className="font-bold text-blue-700 mb-2">
                Livrare instantanee
              </h3>
              <p className="text-gray-700 text-sm">
                Pe email, fără costuri suplimentare
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Site-ul folosește protocoale de securitate moderne și sigure,
            adaptate legislației în vigoare. Livrarea polițelor de asigurare se
            face aproape instantaneu, pe e-mail, fără costuri suplimentare.
          </p>
        </div>

        <div
          id="pasi-utilizare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-clipboard-list text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>
                Care sunt pașii de urmat în cazul în care aveți nevoie să
                folosiți polița de asigurare?
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Când vă confruntați cu nevoia de a folosi polița de asigurare pentru
            un eveniment asigurat, este important să urmați cu atenție pașii
            potriviți pentru a asigura un proces eficient și a obține
            despăgubirea cuvenită. Iată o descriere detaliată a acestor pași:{' '}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-white rounded-full w-full max-w-6 h-6 flex items-center justify-center font-bold text-sm bg-green-500">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Contactare imediată a asiguratorului
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Primul pas crucial este să luați legătura imediat cu
                  asiguratorul. În polița de asigurare veți găsi informațiile de
                  contact ale asiguratorului, inclusiv un număr de telefon sau
                  un call-center disponibil 24/7. Este important să contactați
                  asiguratorul cât mai repede posibil pentru a raporta
                  evenimentul.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white bg-green-500 rounded-full w-full max-w-6 h-6 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Furnizarea detaliilor complete
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Este necesar să oferiți toate detaliile relevante despre
                  incident, precum locul, data și circumstanțele în care s-a
                  produs. Comunicarea rapidă și completă îi va permite să
                  înceapă procesarea cererii de despăgubire într-un timp cât mai
                  scurt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white bg-green-500 rounded-full w-full max-w-6 h-6 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Contact BAAR (pentru evenimente auto internaționale)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  În cazul în care <strong>evenimentul asigurat</strong> implică
                  mașini înmatriculate într-un alt stat, va trebui să contactați
                  Biroul Asigurătorilor de Autovehicule din România (BAAR).
                  Această instituție vă va ajuta să identificați asiguratorul
                  omolog din celălalt stat care va gestiona daunele în numele
                  asiguratorului relevant. BAAR poate furniza informații
                  suplimentare și asistență pe parcursul întregului proces,
                  asigurându-se că aveți acces la despăgubirea cuvenită conform
                  legislației și acordurilor internaționale.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <i className="fas fa-lightbulb text-yellow-500"></i>
                Serviciul de decontare directă RCA
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dacă ați încheiat o poliță RCA care include serviciul de
                decontare directă, aveți posibilitatea să beneficiați de o
                rezolvare mai rapidă a daunelor. Pentru ca acest serviciu să fie
                aplicabil, trebuie să îndepliniți cumulativ următoarele
                condiții:
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 text-sm">
                    accidentul auto să se fi produs pe teritoriul României
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 text-sm">
                    vehiculele implicate să fie înmatriculate sau înregistrate
                    în România
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 text-sm">
                    prejudiciile să fie produse exclusiv vehiculelor și să nu
                    implice vatămări corporale
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 text-sm">
                    ambele vehicule să aibă polițe RCA valabile la data
                    evenimentului
                  </span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                Dacă îndepliniți aceste condiții, puteți beneficia de decontare
                directă prin propriul asigurator RCA, ceea ce înseamnă că ne vom
                ocupa de rezolvarea daunelor în numele dumneavoastră, fără să
                fiți nevoit să plătiți inițial din propriul buzunar.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white bg-green-500 rounded-full w-full max-w-6 h-6 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Furnizarea documentelor necesare
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  La momentul contactării asiguratorului, vi se vor solicita
                  anumite documente pentru procesarea cererii de despăgubire.
                  Aceste documente pot include:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-file-alt text-green-500 mt-1 text-sm"></i>
                    <span className="text-gray-700 text-sm">
                      un formular de daună completat
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-id-card text-green-500 mt-1 text-sm"></i>
                    <span className="text-gray-700 text-sm">
                      copii ale permisului de conducere
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-file-contract text-green-500 mt-1 text-sm"></i>
                    <span className="text-gray-700 text-sm">
                      polița de asigurare și orice alte dovezi relevante
                      solicitate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white bg-green-500 rounded-full w-full max-w-6 h-6 flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Colaborare și urmărire
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ste important să furnizați aceste documente în timp util și
                  conform instrucțiunilor primite pentru a asigura o procesare
                  eficientă a cererii. Colaborarea cu asiguratorul pe parcursul
                  întregului proces este esențială. Asiguratorul vă va oferi
                  instrucțiuni clare cu privire la pașii următori și va răspunde
                  la întrebările și nelămuririle pe care le aveți. Este
                  important să păstrați o comunicare deschisă și să furnizați
                  orice informații suplimentare solicitate în timp util. Este
                  recomandat să păstrați toate înregistrările și corespondența
                  cu asiguratorul, inclusiv numerele de referință și
                  confirmările primite. Aceste informații vor fi utile în cazul
                  în care aveți nevoie să faceți referire la ele ulterior sau să
                  urmăriți stadiul procesului de despăgubire.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-gray-700 leading-relaxed">
              În concluzie, atunci când vă confruntați cu necesitatea de a
              utiliza polița de asigurare pentru un{' '}
              <strong>eveniment asigurat</strong>, este important să acționați
              prompt și să urmați pașii menționați mai sus. Contactarea imediată
              a asiguratorului, furnizarea documentelor necesare și colaborarea
              strânsă cu aceștia vor contribui la un proces de despăgubire
              eficient și la obținerea despăgubirii cuvenite.
            </p>
          </div>
        </div>

        <div
          id="alte-asigurari"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-link text-blue-700 text-2xl  text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Alte tipuri de asigurări ce te-ar putea interesa</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Link
              href="https://www.asigurari.ro/asigurare/life"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fa-solid fa-house w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">Asigurare de Viață</strong>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/accidents_traveler"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fa-solid fa-solar-panel w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">
                Asigurare de Accidente Călători
              </strong>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/accidents"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fa-solid fa-hammer w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">Asigurare de Accidente</strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
