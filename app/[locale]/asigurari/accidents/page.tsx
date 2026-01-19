import {
  faCheck,
  faEdit,
  faInfoCircle,
  faList,
  faPlusCircle,
  faQuestionCircle,
  faTimes,
  faUmbrella,
  faUserShield
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerAccidents from '@/components/banners/banner-accidents'

export const metadata: Metadata = {
  title: 'Asigurare de Accidente Personale - Protecție 24/7 | Asigurari.ro',
  description:
    'Asigurare de accidente personale cu acoperire 24/7. Compensații pentru vătămări, invaliditate și deces cauzate de accidente.'
}

export default function AccidentsLandingPage() {
  return (
    <>
      <BannerAccidents />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare de Accidente Online si Calculator de Asigurare de
              Accidente
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              În momentele în care neprevăzutul se suprapune cu o stare
              financiară nefavorabilă, ai nevoie de un instrument de protecție
              financiară care să facă diferența dintre incertitudine și
              siguranță.
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
                <strong>Tot despre asigurarea de accidente</strong>
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
                <strong>Ce este asigurarea de accidente</strong>
              </span>
            </Link>

            <Link
              href="#ce-acopera"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce acoperă această poliță</strong>
              </span>
            </Link>

            <Link
              href="#beneficii-suplimentare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Beneficii suplimentare</strong>
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
                icon={faUserShield}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea de accidente de
                persoane
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              În funcție de pachetul ales, poți beneficia de asigurare în
              situații diverse, de la diverse incidente la intervenții
              chirurgicale. În funcție de asiguratorul ales, beneficiezi de
              flexibilitate la alegerea pachetului de beneficii, de varietate,
              în privința pachetului de servicii medicale, precum și de
              posibilitatea de a alege să beneficiezi de protecție în timpul
              îndeplinirii sarcinilor de serviciu, în timpul deplasărilor către
              domiciliu sau în afara orelor de program.
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
              <strong>Ce este asigurarea de accidente de persoane</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea de accidente de persoane reprezintă un sprijin
              financiar necesar în cazul unor evenimente soldate cu deces sau cu
              invaliditate permanentă, totală sau parțială. Prima de asigurare
              aferentă acestui tip de poliță poate fi achitată printr-o plată
              unică sau eșalonat (semestrial, trimestrial sau lunar), în funcție
              de condițiile oferite de fiecare companie în parte. În funcție de
              ocupație, fiecare asigurat este încadrat într-o categorie, în
              funcție de gradul de risc asociat acestuia, de la gradul scăzut
              până la gradul mare de risc. De asemenea, ai posibilitatea de a
              alege beneficiarul, suma asigurată sau durata pe care se întinde
              contractul. Suma asigurată este garantată, iar polița poate avea
              acoperire la nivel individual sau familial.
            </p>
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
              <strong>Ce acoperă această poliță</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Printre riscurile pe care le poți micșora cu ajutorul unei asemenea
            polițe de asigurare se numără:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentele în care sunt implicate mijloacele de transport de pe
                uscat, din apă sau din aer
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                insolaţiile, degerăturile, colaps cauzat de căldură sau de frig,
                pe fondul unui accident deja asigurat
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                intoxicaţia acută involuntară sau asfixierea
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                survenirea înecului
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                producerea de explozii, de alunecări de teren, fulgere,
                electrocutări
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                lovirile, căderile, înţepăturile, tăieturile, arsurile
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                consecințele unei boli infecţioase acute posttraumatice
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                consecințele efortului fizic excesiv şi subit, determinat de
                cauze de forţă majoră pentru salvarea vieţii
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentele din timpul funcţionării utilajelor, aparatelor sau
                uneltelor
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentele din timpul utilizării armelor de foc, cu respectarea
                legislaţiei în vigoare privind regimul armelor şi muniţiilor
              </span>
            </div>
          </div>
        </div>

        <div
          id="beneficii-suplimentare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce beneficii suplimentare poți adăuga la asigurare
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            În funcție de oferta obținută cu ajutorul brokerului, poți adăuga la
            această poliță componente importante, ce se aplică sau nu în cazuri
            de forță majoră. Printre acestea se numără:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                indemnizația zilnică în caz de spitalizare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asigurarea unor intervenții chirurgicale
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asigurarea cazurilor de arsuri grave
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asigurare pentru fracturi
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asigurarea riscului de invaliditate permanentă
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                asigurare în cazul decesului
              </span>
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
                Cum poți încheia o poliță de asigurare de accidente de persoane
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Pentru încheierea unei asigurări de accidente de persoane, ai la
              dispoziție serviciile www.asigurari.ro Brokerul se va ocupa de
              găsirea celor mai bune oferte dintre cele disponibile pe piață. De
              asemenea, www.asigurari.ro îți va oferi informații cu privire la
              drepturile și obligațiile aferente fiecărei oferte în parte, iar
              la final, va elibera polița, conform opțiunilor bifate de tine.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pe www.asigurari.ro ai la dispoziție un comparator de prețuri
              online de la asiguratori de top, care îți permite să achiziționezi
              asigurarea în aproximativ 3-4 minute. Poți face plata în mod
              securizat, fie prin transfer bancar, fie cu cardul VISA, VISA
              Electron, MASTERCARD sau Maestro. Site-ul folosește protocoale de
              securitate moderne și sigure, adaptate legislației în vigoare.
              Livrarea poliței se face instant, prin intermediul e-mailului,
              fără costuri suplimentare.
            </p>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Informațiile de mai sus te pot ajuta să închei o asigurare de
              accidente de persoane în cunoștință de cauză, cu garanția că vei
              obține o ofertă convenabilă. Cu ajutorul www.asigurari.ro vei
              rezolva această formalitate rapid și fără costuri inutile.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
