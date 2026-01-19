import {
  faBalanceScale,
  faCalculator,
  faCalendarAlt,
  faCheck,
  faEdit,
  faEuroSign,
  faHeartbeat,
  faInfoCircle,
  faLink,
  faList,
  faPlusCircle,
  faQuestionCircle,
  faSlidersH,
  faTimesCircle,
  faUmbrella,
  faUniversity,
  faUserMd
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerHealth from '@/components/banners/banner-health'

export const metadata: Metadata = {
  title:
    'Asigurare de Sănătate Privată - Acces Rapid la Servicii Medicale | Asigurari.ro',
  description:
    'Asigurare de sănătate privată cu acces rapid la consultații, investigații și tratamente medicale. Rețea largă de clinici și spitale.'
}

export default function HealthLandingPage() {
  return (
    <>
      <BannerHealth />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare sanatate si Calculator de asigurare de sanatate online
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Încerci să ai un stil de viață cât mai sănătos, cu alimentație
              echilibrată, bogată în vitamine, minerale și fibre, faci sport
              regulat, te hidratezi și, în general, păstrezi un echilibru între
              serviciu și timpul liber. Totodată, ai grijă să fii cu analizele
              medicale la zi și știi să-ți asculți corpul. Cu toate astea,
              probleme de sănătate pot să apară oricând.
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
                <strong>Tot despre asigurarea de sănătate</strong>
              </span>
            </Link>

            <Link
              href="#ce-inseamna"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Ce înseamnă asigurarea privată</strong>
              </span>
            </Link>

            <Link
              href="#asigurare-vs-abonament"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Asigurare vs abonament medical</strong>
              </span>
            </Link>

            <Link
              href="#ce-acopera"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce acoperă polița</strong>
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
              href="#alte-beneficii"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Alte beneficii oferite</strong>
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
              href="#cat-costa"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faCalculator} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cât costă asigurarea</strong>
              </span>
            </Link>

            <Link
              href="#alte-asigurari"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faLink} className="text-green-500" />
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
                icon={faHeartbeat}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea de sănătate
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Nu poți controla ce îți rezervă viitorul, dar stă în puterea ta
              să-ți construiești o strategie eficientă. Din această perspectivă,
              o asigurare de sănătate privată este un instrument financiar care
              îți permite acoperirea cheltuielilor de prevenție, diagnostic și
              tratament, astfel încât să poți gestiona situațiile medicale
              neprevăzute fără dezechilibre financiare puternice pentru tine și
              cei dragi. Dacă te întrebi cum te poate ajuta, concret, o poliță
              de asigurare de sănătate și cum poți alege oferta cea mai bună
              pentru nevoile tale, în cele ce urmează vei găsi informații
              detaliate.{' '}
            </p>
          </div>
        </div>

        <div
          id="ce-inseamna"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce înseamnă o asigurare de sănătate privată</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Liniștea ta și a celor dragi este influențată de o mulțime de
              factori, iar sănătatea reprezintă o prioritate. Potrivit Legii
              95/2006, orice cetățean român are acces la anumite servicii
              medicale gratuite, în schimbul unei contribuții lunare la sistemul
              public de asigurări.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faUniversity}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Asigurarea de stat
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Există și categorii de persoane, cum ar fi copiii care au
                  vârsta sub 18 ani, soțul, soția și părinții fără venituri
                  proprii, aflate în întreținerea unei persoane asigurate, care
                  beneficiază de asigurare de sănătate de la stat, fără vreo
                  contribuție lunară. Asigurarea de sănătate de la stat este
                  obligatorie și acoperă cheltuielile pentru o serie de servicii
                  medicale, analize și investigații, în condițiile legii.{' '}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faUserMd}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Asigurarea privată
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sunt însă situații în care cheltuielile pentru prevenire,
                  diagnostic și tratament nu sunt decontate de stat, iar
                  valoarea lor poate depăși cu mult bugetul personal sau
                  familial. Pentru aceste situații, ai la îndemână un instrument
                  financiar eficient atât pentru tine, cât și pentru cei dragi:
                  asigurarea de sănătate privată. Spre deosebire de asigurarea
                  de sănătate din sistemul public, asigurarea medicală privată
                  nu este obligatorie și poate acoperi sume variate, în funcție
                  de posibilitățile financiare ale fiecărui asigurat și de alte
                  condiții stabilite împreună cu asiguratorul.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faEuroSign}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Cost lunar</h3>
              <p className="text-gray-700 text-sm">
                100-150 lei până la câteva sute de lei
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Durată contract</h3>
              <p className="text-gray-700 text-sm">
                12 luni cu posibilitatea prelungirii
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faSlidersH}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Personalizare</h3>
              <p className="text-gray-700 text-sm">
                Poate fi adaptată nevoilor individuale
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Contribuția pentru o astfel de asigurare poate fi lunară,
            trimestrială sau anuală și pornește de la 100-150 de lei, ajungând
            până la câteva sute de lei. Totodată, o asigurare de sănătate
            privată poate fi personalizată, astfel încât să răspundă cât mai
            bine nevoilor celui care încheie o astfel de poliță. Asigurările de
            sănătate se încheie pe o durată de 12 luni, cu posibilitatea
            prelungirii contractului.{' '}
          </p>
        </div>

        <div
          id="asigurare-vs-abonament"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Asigurare de sănătate vs abonament medical - ce diferențe sunt
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Dacă te întrebi care e diferența dintre un abonament medical și o
            asigurare de sănătate, află că este vorba despre două instrumente
            financiare care nu se exclud, ci se pot completa unul pe celălalt.
            Sunt trei diferențe majore între cele două:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-full max-w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Aria de acoperire geografică
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un abonament medical îți oferă acces la servicii medicale în
                  plan național. O asigurare medicală privată îți oferă
                  protecție financiară oriunde, inclusiv în străinătate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-full max-w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Evenimentele și situațiile acoperite
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Abonamentele medicale sunt de mai multe tipuri, la fel ca
                  polițele de asigurare, doar că acoperă servicii medicale și
                  situații limitate. De exemplu, un abonament medical poate
                  include anumite analize de bază, consultații periodice,
                  consultații și investigații de specialitate. O poliță de
                  asigurare acoperă nu doar prevenția și diagnosticul, ci și
                  tratamentul în țară și în străinătate. Concret, un abonament
                  medical nu îți poate acoperi cheltuielile cu spitalizarea, de
                  exemplu, însă o asigurare de sănătate poate.{' '}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-full max-w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Furnizorii de servicii medicale
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un abonament asigură accesul la serviciile unui singur
                  furnizor. Dacă vrei să apelezi la alt furnizor, atunci
                  costurile sunt suportate integral de tine. În schimb, o poliță
                  de asigurare de sănătate îți dă posibilitatea de a alege
                  dintre sute de furnizori de servicii, cheltuielile fiind
                  acoperite, în funcție de suma maximă asigurată și de
                  contribuția/prima pe care o plătești.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-gray-700 leading-relaxed">
              Așadar, pe lângă asigurarea de sănătate de la stat, poți opta
              pentru abonamente medicale și asigurări de sănătate privată. Tu
              stabilești ce strategie este mai eficientă pentru tine și cei
              dragi.
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
              <strong>Ce acoperă o poliță de asigurare de sănătate</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pe piața asigurărilor există o multitudine de tipuri de polițe de
            asigurări medicale, care acoperă o diversitate de servicii și
            situații. În general, o asigurare de sănătate privată oferă
            protecție financiară în cazuri precum:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                intervenție chirurgicală
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">spitalizare</span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                invaliditate permanentă, totală sau parțială, în urma unui
                accident
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                tratament în străinătate
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                servicii medicale extra-spitalicești, la domiciliu sau transport
                cu ambulanța
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                a doua opinie medicală
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                telediagnostic
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                controale medicale preventive, generale și de specialitate
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">naștere</span>
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
              <strong>Ce nu acoperă o poliță de asigurare de sănătate</strong>
            </h2>
          </div>

          <div className="border-l-4 border-red-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Orice asigurare medicală privată oferă protecție financiară
              conform condițiilor contractuale agreate de ambele părți (asigurat
              și asigurator). Cum pachetele de asigurare diferă, există și
              situații/evenimente pe care o poliță de asigurare nu le acoperă.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                afecțiunile medicale preexistente datei de intrare în vigoare a
                poliței de asigurare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                spitalizările sau intervențiile chirurgicale pentru afecțiuni
                apărute în primele 30 de zile de la data intrării în vigoare a
                asigurării
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                anomaliile congenitale, bolile congenitale
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                complicațiile apărute în urma avortului sau a fertilizării in
                vitro
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                accidentele sau afecțiunile provocate intenționat de asigurat,
                inclusiv administrarea de medicamente care nu au fost prescrise
                de medic
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                malpraxisul medical, infecțiile intraspitalicești
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                orice serviciu medical care nu este inclus în lista din pachetul
                de asigurare ales
              </span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-times text-red-500 mt-1 text-sm"></i>
              <span className="text-gray-700 leading-relaxed">
                orice serviciu medical care depășește limitele de acoperire ale
                poliței de asigurare
              </span>
            </div>
          </div>
        </div>

        <div
          id="alte-beneficii"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-plus-circle text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Ce alte beneficii oferă asigurările de sănătate</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pe lângă beneficiul major de a-ți oferi sprijin financiar ție și
            celor dragi, o asigurare de sănătate privată vine cu o mulțime de
            alte avantaje, cum ar fi:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="fas fa-sliders-h text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Flexibilitatea
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pe parcursul derulării contractului, poți schimba valoarea
                  primei de asigurare, poți adăuga sau elimina servicii
                  medicale, poți opta pentru o altă frecvență a plății primei de
                  asigurare. Toate aceste modificări pot fi făcute cu
                  respectarea condițiilor contractuale.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-users text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Protecție financiară pentru cei dragi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tu ești titularul asigurării, dar poți adăuga și alți
                  beneficiari, în funcție de contractul încheiat cu
                  asiguratorul.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-cog text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Personalizarea
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  În funcție de vârstă și de nevoile tale medicale, la
                  reînnoirea poliței, poți opta pentru modificări, astfel încât
                  să beneficiezi de protecție financiară optimă.
                </p>
              </div>
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
                Cum poți încheia o poliță de asigurare de sănătate pe
                www.asigurari.ro
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Piața asigurărilor este plină de oferte, însă, pentru a putea face
              alegeri inspirate pentru tine și cei dragi, ai nevoie de un
              partener de nădejde, care să te ghideze și să te ajute să găsești
              soluția potrivită. Din această perspectivă, ai la dispoziție
              expertiza www.asigurari.ro.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="fas fa-search text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Analiză și identificare
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Compania va analiza ofertele propuse de operatorii de pe piața
                  asigurărilor și va identifica pentru tine cele mai bune
                  pachete de asigurare de sănătate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-info-circle text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Informații complete
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  www.asigurari.ro îți va oferi informațiile necesare despre
                  drepturile pe care le ai și obligațiile pe care le implică
                  fiecare ofertă în parte.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="fas fa-file-contract text-green-500 w-5 leading-none pt-[5px]"></i>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Decizie informată
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Totul, pentru ca tu să alegi în cunoștință de cauză. La final,
                  vei primi polița dorită, conform opțiunilor pe care le-ai
                  bifat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="cat-costa"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-calculator text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              <strong>Cât costă o asigurare de sănătate</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pentru că știm că timpul tău este prețios și nevoile tale sunt o
              prioritate pentru noi, pe www.asigurari.ro îți punem la dispoziție
              un comparator de prețuri online, pentru a afla cât costă o
              asigurare de sănătate rapid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-search text-blue-600 text-2xl mb-3"></i>
              <h3 className="font-bold text-blue-700 mb-2">Comparator rapid</h3>
              <p className="text-gray-700 text-sm">
                Află costul în câteva minute
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-clock text-blue-600 text-2xl mb-3"></i>
              <h3 className="font-bold text-blue-700 mb-2">Sub 5 minute</h3>
              <p className="text-gray-700 text-sm">
                Achiziționare rapidă online
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <i className="fas fa-shield text-blue-600 text-2xl mb-3"></i>
              <h3 className="font-bold text-blue-700 mb-2">Plată securizată</h3>
              <p className="text-gray-700 text-sm">
                Transfer bancar sau carduri VISA/Mastercard
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Poți plăti în condiții de securitate, fie prin transfer bancar, fie
            cu un card VISA, VISA Electron, MASTERCARD sau Maestro. Site-ul
            www.asigurari.ro folosește protocoale de securitate moderne și
            sigure, adaptate la legislația în vigoare. Totodată, livrarea
            poliței de asigurare de sănătate se face aproape instant, pe e-mail,
            fără costuri suplimentare.
          </p>

          <div className="border border-gray-200 p-4 rounded-lg mt-6">
            <p className="text-gray-700 leading-relaxed italic text-center">
              Dacă ești în căutarea unei oferte complete, pentru o asigurare de
              sănătate, ești la locul potrivit. Cu informațiile prezentate și
              explicate mai sus, știi exact care sunt avantajele pe care ți le
              oferă o astfel de poliță. În același timp, poți alege un aliat
              puternic pentru ca deciziile pe care le iei să fie cele mai bune
              pentru tine și cei dragi: Insurance Broker. Compania îți vine în
              sprijin cu oferte care răspund nevoilor tale, iar tu alegi în
              cunoștință de cauză.
            </p>
          </div>
        </div>

        <div
          id="alte-asigurari"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <i className="fas fa-link text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"></i>
              Alte tipuri de asigurări ce te-ar putea interesa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Link
              href="https://www.asigurari.ro/asigurare/life"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fas fa-heart w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">Asigurare de Viață</strong>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/travel"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fas fa-plane w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">
                Asigurare Medicală de Călătorie
              </strong>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/accidents"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fas fa-user-shield w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">Asigurare de Accidente</strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
