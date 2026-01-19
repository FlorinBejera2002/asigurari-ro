import {
  faCalculator,
  faCheck,
  faEdit,
  faEuroSign,
  faInfoCircle,
  faLaptop,
  faList,
  faShieldAlt,
  faTimes,
  faTimesCircle,
  faUmbrella,
  faUserNurse
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerRCP from '@/components/banners/banner-rcp'

export const metadata: Metadata = {
  title: 'Asigurare RCP - Răspundere Civilă Profesională | Asigurari.ro',
  description:
    'Asigurare de răspundere civilă profesională pentru protecția activității tale. Acoperire pentru erori și omisiuni profesionale.'
}

export default function RCPLandingPage() {
  return (
    <>
      <BannerRCP />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare Malpraxis - Calculator asigurare malpraxis si raspundere
              civila
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Definit conform Legii 95/2006, privind reforma în domeniul
              sănătății, malpraxisul reprezintă{' '}
              <span className="italic">
                {' '}
                „eroarea profesională săvârșită în exercitarea actului medical
                sau medico-farmaceutic, generatoare de prejudicii asupra
                pacientului, implicând răspunderea civilă a personalului medical
                și a furnizorului de produse și servicii medicale, sanitare și
                farmaceutice"
              </span>
              .
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="flex items-start gap-2 mb-6">
            <FontAwesomeIcon
              icon={faList}
              className="text-blue-700 text-lg md:text-2xl"
            />
            <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link
              href="#protectie-financiara"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Protecție financiară pentru profesioniști</strong>
              </span>
            </Link>

            <Link
              href="#asigurare-online"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faLaptop} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurare malpraxis online</strong>
              </span>
            </Link>

            <Link
              href="#tot-ce-trebuie-sa-stii"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong> Tot ce trebuie să știi</strong>
              </span>
            </Link>

            <Link
              href="#ce-este-malpraxis"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce este asigurarea de malpraxis</strong>
              </span>
            </Link>

            <Link
              href="#limite-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEuroSign} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Limite ale asigurării</strong>
              </span>
            </Link>

            <Link
              href="#riscuri-acoperite"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce riscuri asigură polița</strong>
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
                <strong>Ce nu acoperă asigurarea</strong>
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
              href="#costuri-asigurare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faCalculator} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cât costă asigurarea</strong>
              </span>
            </Link>

            <Link
              href="#asistent-medical"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUserNurse} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurare pentru asistenți medicali</strong>
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
                Asigurare malpraxis - protecție financiară pentru profesioniștii
                expuși riscurilor de a greși în activitatea lor
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea medicală malpraxis oferă despăgubiri pentru
              prejudiciile cauzate pe durata exercitării profesiei. Asigurarea
              de răspundere civilă profesională Malpraxis Medical se adresează
              asistenților, medicilor, farmaciștilor, dar și altor persoane care
              lucrează în domeniul medical și au ca obiectiv principal
              prejudiciile pentru care ar putea răspunde aceștia. Astfel, dacă
              ești medic rezident, asistent medical sau farmacist, de exemplu,
              poți să te bucuri din plin de avantajele oferite de asigurarea de
              malpraxis:{' '}
            </p>
          </div>

          <div className="mt-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  protecție financiară
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  reducerea stresului
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  acoperire pentru eventuale erori și omisiuni
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  credibilitate (menținerea reputației)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  conformitate cu standardele impuse de lege
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="asigurare-online"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h3 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faLaptop}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Asigurare malpraxis online - cum poți încheia o astfel de
                poliță?
              </strong>
            </h3>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pe lângă asigurarea de malpraxis online, printre produsele puse la
              dispoziție de asigurari.ro se numără și{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/rca"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurarea RCA
              </Link>
              , care acoperă daunele provocate de un vehicul asigurat către o
              terță parte,{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/casco"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurarea CASCO
              </Link>
              , care asigură vehiculul în fața daunelor pe care le-ar putea avea
              cu sau fără implicarea șoferului, și{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/home"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurarea pentru locuință
              </Link>
              , care pune la adăpost casa împotriva diferitelor tipuri de
              riscuri. Asigurarea de Malpraxis Medical se încheie online în doar
              câteva minute, iar plata o faci securizat, prin transfer bancar
              sau card. Livrarea poliței de asigurare de malpraxis se face
              instantaneu, prin intermediul e-mailului.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Așadar, asigurarea de malpraxis îți protejează cariera. Cu
              ajutorul ei, vei putea face față mult mai liniștit potențialelor
              reclamații și, în acest mod, vei putea să te concentrezi mai bine
              asupra carierei tale.
            </p>
          </div>
        </div>

        <div
          id="tot-ce-trebuie-sa-stii"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />

              <strong>
                Tot ce trebuie să știi despre Asigurarea de Răspundere Civilă
                Profesională - Malpraxis Medical
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Gândită special pentru acest tip de scenarii nefaste, Asigurarea
              de Răspundere Civilă Profesională - Malpraxis Medical acordă
              despăgubiri pentru prejudiciile cauzate pacienților, pe durata
              exercitării profesiei de catre cadrele medicale.{' '}
            </p>
          </div>
        </div>

        <div
          id="ce-este-malpraxis"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />

              <strong>
                Ce este Asigurarea de Răspundere Civilă Profesională - Malpraxis
                Medical
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea de Răspundere Civilă Profesională - Malpraxis Medical
              este un produs adresat unor categorii profesionale precum
              asistenții medicali, medici, farmacisti, si alte categorii din
              domeniul medical. Această asigurare garantează acordarea
              despăgubirilor aferente prejudiciilor de care asigurații răspund
              față de pacienți, în cazul în care se constată că au fost supuși
              unui act de malpraxis medical. Asigurarea despăgubește, de
              asemenea, cheltuielile de judecată ale persoanei prejudiciate prin
              actul medical.
            </p>
          </div>
        </div>

        <div
          id="limite-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEuroSign}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Limitele asigurării de malpraxis medical</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Conform legii, există limite ale asigurării de malpraxis medical, în
            funcție de profesie, după cum urmează:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-pills text-green-500"></i>
                <span className="font-bold text-gray-800">2.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru asistenți de farmacie
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-user-nurse text-green-500"></i>
                <span className="font-bold text-gray-800">4.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru asistenţi medicali şi moaşe care îşi desfăşoară
                activitatea în medicina primară, ambulatorii, cabinete medicale
                individuale;
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-prescription-bottle text-green-500"></i>
                <span className="font-bold text-gray-800">5.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru farmaciști (circuit deschis și închis)
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-hospital text-green-500"></i>
                <span className="font-bold text-gray-800">10.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru asistenți medicali și moașe (unități sanitare cu paturi)
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-user-md text-green-500"></i>
                <span className="font-bold text-gray-800">12.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru medici de familie și medicină generală
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-flask text-green-500"></i>
                <span className="font-bold text-gray-800">20.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru biochimişti, biologi și medici specialişti (specialităţi
                paraclinice)
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-stethoscope text-green-500"></i>
                <span className="font-bold text-gray-800">37.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru medici specialişti (specialităţi medicale) și medici
                dentişti
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-cut text-green-500"></i>
                <span className="font-bold text-gray-800">62.000 euro</span>
              </div>
              <p className="text-gray-700 text-sm">
                pentru medici specialişti (specialităţi chirurgicale)
              </p>
            </div>
          </div>
        </div>

        <div
          id="riscuri-acoperite"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-umbrella text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>

              <strong>Ce riscuri asigură polița</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea de Răspundere Civilă Profesională - Malpraxis Medical
              are ca obiectiv principal prejudiciile pentru care cadrele
              medicale ar putea răspunde, conform legii, în fața pacienților sau
              a unor terțe persoane, în cazul în care se constată comiterea unui
              act de malpraxis medical. Prin prejudicii, se înțelege cauzarea
              unor vătămări corporale sau chiar survenirea decesului, în cazul
              unora dintre pacienți. Printre riscurile acoperite de o astfel de
              asigurare se numără:{' '}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="fas fa-hand text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Prejudicii cauzate prin acțiune directă
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prejudiciile cauzate de personalul medical, prin acțiunea lor
                  directă asupra pacienților, ca urmare a unor fapte săvârșite
                  în mod eronat, fie din imprudență, fie din neglijență.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-procedures text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Acte individuale în proceduri medicale
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prejudiciile aduse prin săvârșirea unor acte individuale de-a
                  lungul procedurilor de diagnosticare, de prevenție sau de
                  tratament, prin care cadrele medicale pot fi considerate
                  răspunzătoare, în raport cu legislația în vigoare și cu
                  normele din statutul profesiei, regulile de conduită, etica și
                  deontologia profesională;{' '}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-gavel text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Cheltuieli de judecată ale reclamantului
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cheltuielile de judecată efectuate de reclamant pentru
                  îndeplinirea formalităților legale ce au ca scop obligarea
                  asiguratului la plata despăgubirilor, în cazul în care
                  asiguratul a fost obligat la a le achita, prin hotărâre
                  judecătorească;{' '}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-balance-scale text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Cheltuieli de judecată ale asiguratului
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cheltuielile de judecată efectuate de asigurat în cadrul
                  procesului civil, în cazul în care acesta a fost obligat la
                  repararea prejudiciului, inclusiv în cazul în care acţiunea
                  penală declanșată nu mai este pe rol, iar acţiunea civilă
                  rămâne de competenţa instanţelor penale.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="ce-nu-acopera"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-times-circle text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Ce nu acoperă această asigurare</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              La fel ca în cazul oricărui tip de asigurare, și cea pentru
              malpraxis medical este caracterizată de câteva excepții. Printre
              acestea se numără aplicarea unor restricții de acoperire în
              privința asiguraților care nu au domiciliul sau rezidența în
              România. De asemenea, nu pot beneficia de acest tip de poliță
              asigurații care nu dețin autorizație de liberă practică medicală.
              În privința prejudiciilor care nu sunt asigurate prin intermediul
              acestui tip de poliță, printre acestea pot figura:{' '}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                vătămările suferite de asigurat, precum și pagubele survenite
                asupra bunurilor personale
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                pretențiile financiare care nu au legătură directă cu vătămarea
                corporală survenită, precum și pierderile financiare cauzate
                unei terțe persoane, cu excepția succesorilor legali ai
                persoanei prejudiciate;
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                pretențiile financiare formulate de clienți după momentul
                expirării poliței de asigurare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                solicitările de despăgubiri pentru prejudicii cauzate
                pacienților prin acțiunea personalului medical ce fac obiectul
                unor plângeri, reclamații sau litigii, aflate în curs de
                soluționare în momentul încheierii poliței de asigurare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                cererile de despăgubiri aflate în legatură cu anumite
                circumstanțe cunoscute de asigurat la data încheierii poliței de
                asigurare, chiar dacă acestea au fost sau nu declarate
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                solicitările de despăgubire în contul unor prejudicii aduse
                pacienților cu cetățenie canadiană, americană sau australiană;
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                cererile de despăgubire frauduloase sau bazate pe declarații
                false
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                prejudiciile sau efectele adverse cauzate de condiţiile de
                lucru, de dotarea deficitară cu echipament pentru diagnostic şi
                tratament, de infecţiile nosocomiale, de complicaţiile şi de
                riscurile general acceptate ale metodelor de investigaţie şi de
                tratament, de materialele sanitare, echipamentele, dispozitivele
                medicale și substanţele medicale cu vicii ascunse
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                plângerile cauzate de comunicarea deficitară dintre pacient și
                medic, asupra anumitor aspecte referitoare la starea de sănătate
                a acestuia, de natură să genereze efecte negative asupra actului
                medical sau chiar sistarea procedurii
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                pretenţiile care au fost formulate împotriva asiguratului cu
                privire la prejudiciile cauzate persoanei vătămate sau decedate
                din cauze medicale diferite decât cele ce rezultă din actele
                medicale
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
                Cum poți încheia o poliță de asigurare pentru malpraxis medical
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pentru încheierea unei polițe de Asigurare de Răspundere Civilă
              Profesională - Malpraxis Medical, ai la dispoziție serviciile
              www.asigurari.ro Brokerul se va ocupa de găsirea celor mai bune
              oferte dintre cele disponibile pe piață. De asemenea,
              www.asigurari.ro îți va oferi informații cu privire la drepturile
              și obligațiile aferente fiecărei oferte în parte, iar la final, va
              elibera polița, conform opțiunilor bifate de tine pe site. Site-ul
              www.asigurari.ro îți pune la dispoziție un comparator de prețuri
              online de la asiguratori de top, care îți permite să achiziționezi
              Asigurarea de Răspundere Civilă Profesională - Malpraxis Medical
              în mai puțin de cinci minute. Plata se poate face în mod
              securizat, fie prin transfer bancar, fie cu cardul VISA, VISA
              Electron, MASTERCARD sau Maestro. Site-ul folosește protocoale de
              securitate moderne și sigure, adaptate legislației în vigoare.
              Livrarea polițelor de asigurare se face instantaneu, prin
              intermediul e-mail-ului, fără costuri suplimentare, in momentul
              platii. Acum știi mai multe despre Asigurarea de Răspundere Civilă
              Profesională - Malpraxis Medical. Consilierea și facilitățile puse
              la dispoziție de www.asigurari.ro te vor ajuta să rezolvi rapid
              toate formalitățile necesare încheierii poliței. parte, iar la
              final, va elibera polița, conform opțiunilor bifate de tine.{' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-search text-green-500 text-2xl mb-3"></i>
              <h3 className="font-bold text-gray-800 mb-2">Comparare oferte</h3>
              <p className="text-gray-700 text-sm">
                Găsirea celor mai bune oferte de pe piață
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-clock text-green-500 text-2xl mb-3"></i>
              <h3 className="font-bold text-gray-800 mb-2">Sub 5 minute</h3>
              <p className="text-gray-700 text-sm">
                Achiziționarea rapidă online
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-shield text-green-500 text-2xl mb-3"></i>
              <h3 className="font-bold text-gray-800 mb-2">Plată securizată</h3>
              <p className="text-gray-700 text-sm">
                Transfer bancar sau card VISA/Mastercard
              </p>
            </div>
          </div>
        </div>

        <div
          id="costuri-asigurare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-calculator text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Cât costă asigurarea de malpraxis?</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Asigurarea de malpraxis</strong> este o protecție
              esențială pentru profesioniștii din domeniul medical și
              farmaceutic. Costul acestei asigurări variază în funcție de
              categoria profesională asigurată, dar prin încheierea online a
              poliței pe platforma noastră, vă garantăm obținerea celor mai mici
              prețuri de pe piață. Astfel, în medie, prețurile la{' '}
              <strong> asigurarea de malpraxis</strong>, în funcție de categoria
              profesională, sunt următoarele:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-user-md text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 11 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">Medici de familie</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-stethoscope text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 22 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Medici specialiști (specialități medicale)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-cut text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 56 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Medici specialiști (specialități chirurgicale)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-tooth text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 30 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">Medici dentiști</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-prescription-bottle text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 10 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">Farmaciști</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-hospital text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 10 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Asistenți medicali și moașe (spitale)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-user-nurse text-green-500"></i>
                <span className="font-bold text-gray-800">de la 4 euro/an</span>
              </div>
              <p className="text-gray-700 text-sm">
                Asistenți medicali și moașe (cabinete)
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-pills text-green-500"></i>
                <span className="font-bold text-gray-800">de la 4 euro/an</span>
              </div>
              <p className="text-gray-700 text-sm">Asistenți de farmacie</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-flask text-green-500"></i>
                <span className="font-bold text-gray-800">
                  de la 30 euro/an
                </span>
              </div>
              <p className="text-gray-700 text-sm">Biochimiști și biologi</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed pt-4">
            Este important de menționat că prețurile pot varia în funcție de
            societatea de asigurări aleasă, însă indiferent de asigurator, veți
            plăti mult mai puțin pentru asigurarea de răspundere civilă
            profesională în comparație cu prejudiciile eventuale pe care le-ați
            putea suporta în cazul producerii unui incident. Investiția într-o
            astfel de asigurare vă oferă liniștea că sunteți protejat și că
            puteți desfășura activitatea profesională în mod responsabil și în
            interesul pacienților.
          </p>
        </div>

        <div
          id="asistent-medical"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-user-nurse text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>

              <strong>
                Asigurare malpraxis asistent medical: ce presupune și ce costuri
                implică?
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Asigurarea de malpraxis</strong> pentru asistenții
              medicali este o componentă esențială a practicii profesionale.
              Această asigurare oferă o protecție financiară în cazul în care se
              produce un incident nefericit care rezultă în daune materiale sau
              vătămări corporale ale pacienților.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full">
            <div className="p-6 rounded-2xl border border-gray-200">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
                  <i className="fas fa-hospital text-blue-700 text-xl"></i>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Activitate în spital
                </h3>
                <span className="text-2xl font-bold text-green-900">
                  de la 10 euro/an
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  Pentru asistenți medicali cu activitate în unități sanitare cu
                  paturi
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
                  <i className="fas fa-clinic-medical text-blue-700 text-xl"></i>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Activitate în cabinete
                </h3>
                <span className="text-2xl font-bold text-green-900">
                  de la 4 euro/an
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  Pentru asistenți medicali cu activitate în cabinete medicale
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="fas fa-shield text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Protecție împotriva reclamațiilor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prin încheierea unei astfel de asigurări, asistenții medicali
                  se protejează împotriva potențialelor reclamații pentru
                  neglijență medicală sau alte prejudicii cauzate pacienților.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-gavel text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Acoperire completă
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Polița de <strong>asigurare de malpraxis</strong> acoperă, de
                  obicei, costurile de apărare legală, despăgubiri financiare
                  acordate pacienților și alte cheltuieli legate de procesele de
                  reclamație.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-user-check text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Semn de profesionalism
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Investiția într-o astfel de asigurare este un semn al
                  responsabilității și profesionalismului în exercitarea
                  meseriei, contribuind la siguranța pacienților și la
                  menținerea încrederii în sistemul medical.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-gray-700 leading-relaxed">
              Este recomandat să comparați ofertele disponibile pe piață pentru
              a găsi cea mai bună soluție în funcție de nevoile și bugetul
              personal. Încheierea unei astfel de asigurări pentru asistenții
              medicali este un pas important pentru a-ți proteja cariera și a-ți
              oferi liniștea că vei putea face față potențialelor reclamații.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
