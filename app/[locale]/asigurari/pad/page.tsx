import {
  faBan,
  faEdit,
  faExclamationTriangle,
  faHome,
  faInfoCircle,
  faList,
  faQuestionCircle,
  faThumbsUp,
  faTimes
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerPAD from '@/components/banners/banner-pad'

export const metadata: Metadata = {
  title:
    'Asigurare PAD - Protecție pentru Accidente de Circulație | Asigurari.ro',
  description:
    'Asigurare PAD pentru protecție în caz de accidente de circulație. Compensații pentru vătămări corporale și deces.'
}

export default function PADLandingPage() {
  return (
    <>
      <BannerPAD />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare PAD - Asigurare obligatorie a locuinței & Calculator
              Poliță PAD
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Siguranța familiei și a celor dragi reprezintă o preocupare
              firească, încă din cele mai vechi timpuri, așa că instinctul de a
              ne pune casa la adăpost este unul elementar.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="flex items-start gap-3 mb-6">
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
              href="#tot-despre-pad"
              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Tot despre asigurarea PAD</strong>
              </span>
            </Link>

            <Link
              href="#ce-este-pad"
              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Ce este asigurarea obligatorie</strong>
              </span>
            </Link>

            <Link
              href="#tipuri-pad"
              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faHome} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Tipuri de asigurare PAD</strong>
              </span>
            </Link>

            <Link
              href="#ce-nu-acopera"
              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faBan} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce NU acoperă polița PAD</strong>
              </span>
            </Link>

            <Link
              href="#de-ce-asigurari-ro"
              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faThumbsUp} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>De ce să alegi asigurari.ro</strong>
              </span>
            </Link>

            <Link
              href="#cum-inchei"
              className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEdit} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cum închei o poliță PAD</strong>
              </span>
            </Link>
          </div>
        </div>

        <div
          id="tot-despre-pad"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea obligatorie PAD a
                locuinței
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Indiferent de trăinicia construcției și de grija pe care o acordăm
              factorilor de risc de zi cu zi, există amenințări ce ne pot
              surprinde tocmai când ne-am aștepta mai puțin. Din fericire,
              astăzi, ai la dispoziție instrumente financiare moderne, gândite
              pornind de la scenarii dintre cele mai imprevizibile. În această
              pagină vei afla tot ce trebuie să știi despre asigurarea
              obligatorie PAD a locuinței.
            </p>
          </div>
        </div>

        <div
          id="ce-este-pad"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce este asigurarea obligatorie a locuinței</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Reglementată potrivit Legii nr. 260/2008, această asigurare
              reprezintă un demers elementar prin care îți poți pune la adăpost
              locuința. Aceasta este încheiată de Pool-ul de Asigurare Împotriva
              Dezastrelor Naturale (PAID), o societate de asigurare-reasigurare
              care s-a fondat prin demersul comun al societăților de asigurare
              cu capital privat. În PAID sunt membre 12 societăți, cu rol de
              acționar, iar printre acestea se numără companiile ABC Asigurări,
              Allianz-Țiriac, Generali, Grawe România, Groupama România, Signal
              Iduna Asigurare Reasigurare SA sau Uniqa Asigurări.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea obligatorie a locuinței protejează persoanele împotriva
              dezastrelor sau ca efect direct, respectiv indirect, al acestora.
              Prin dezastre naturale, înțelegem evenimente precum cutremurele,
              alunecările de teren şi inundaţiile. Locuințele eligibile pentru
              acest tip de poliță sunt numai cele situate pe teritoriul
              României, în mediul rural sau urban și care sunt deținute de
              persoane fizice ori juridice. Potrivit legii în vigoare, casele
              sau apartamentele trebuie să fie înregistrate în evidența
              autorităților fiscale. Mai mult, nerespectarea obligației de a
              asigura locuința constituie contravenție și expune persoanele
              fizice sau juridice riscului de a fi sancționate cu o amendă cu
              valoarea cuprinsă între 100 și 500 lei.
            </p>
          </div>
        </div>

        <div
          id="tipuri-pad"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faHome}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Câte tipuri de asigurare PAD sunt disponibile</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              În funcție de tipul clădirii, putem determina și natura asigurării
              PAD. Tipurile de locuințe se împart în următoarele două
              subcategorii:
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full w-full max-w-6 h-6 flex items-center justify-center text-sm font-bold">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Locuință de tip A
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Construcția ce are o structură de rezistență realizată din
                    beton armat, metal sau lemn, cu pereți exteriori din piatră,
                    cărămidă arsă sau alte materiale tratate termic/chimic.{' '}
                    <strong>Suma asigurată: 100.000 LEI.</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full w-full max-w-6 h-6 flex items-center justify-center text-sm font-bold">
                  B
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Locuință de tip B
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Construcția cu pereți exteriori realizați din cărămidă
                    nearsă sau alte materiale netratate termic/chimic.{' '}
                    <strong>Suma asigurată: 50.000 LEI.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="ce-nu-acopera"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faBan}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce NU acoperă polița PAD</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Există categorii de imobile care nu pot face obiectul unei
              asigurări PAD:
            </p>
          </div>

          <div className="mb-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Locuințele din clădiri expertizate și încadrate în clasa I de
                  risc seismic;
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Anexele sau dependințele care nu fac parte din structura
                  clădirii;
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-red-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Bunurile aflate în interiorul locuinței.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="text-red-600 mt-1"
              />
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> Persoanele care nu își asigură
                locuințele prin PAD nu vor beneficia de despăgubiri în cazul
                prejudiciilor produse de dezastrele naturale.
              </p>
            </div>
          </div>
        </div>

        <div
          id="de-ce-asigurari-ro"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>De ce să alegi asigurarea PAD de pe asigurari.ro</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Platforma www.asigurari.ro este cea mai mare soluție digitală cu
              cele mai multe produse disponibile online pentru achiziționarea
              rapidă și sigură de polițe de asigurare din România. Cu un sistem
              automatizat, intuitiv și accesibil de pe orice dispozitiv, poți
              obține în câteva minute polița PAD, fără deplasări, fără cozi și
              fără documente tipărite. Totul se face 100% online, cu plata
              securizată și livrarea instant a documentelor pe email.
            </p>
          </div>
        </div>

        <div
          id="cum-inchei"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-3 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Cum poți încheia o poliță PAD</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Pe asigurari.ro ai la dispoziție un comparator de prețuri online
              de la asiguratori de top, care îți permite să achiziționezi
              asigurarea de locuință PAD în aproximativ 3-4 minute. Poți face
              plata în mod securizat, fie prin transfer bancar, fie cu cardul
              VISA, VISA Electron, MASTERCARD sau Maestro. Site-ul folosește
              protocoale de securitate moderne și sigure, adaptate legislației
              în vigoare. Livrarea polițelor de asigurare obligatorie PAD a
              locuinței se face instant, prin intermediul e-mail-ului, fără
              costuri suplimentare.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
