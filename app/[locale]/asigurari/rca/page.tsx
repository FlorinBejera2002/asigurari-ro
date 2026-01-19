import {
  faCalculator,
  faCheck,
  faComputer,
  faEuroSign,
  faExchangeAlt,
  faInfoCircle,
  faList,
  faShieldAlt,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerRCA from '@/components/banners/banner-rca'
import InternalLinksRCA from '@/components/internal-links/InternalLinksRCA'

export const metadata: Metadata = {
  title: 'Asigurare RCA Online - Compară Prețuri și Cumpără RCA | Asigurari.ro',
  description:
    'Compară oferte RCA de la toți asigurătorii din România. Cumpără asigurare RCA online rapid și simplu. Prețuri avantajoase și livrare gratuită.'
}

export default function RCALandingPage() {
  return (
    <>
      <BannerRCA />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare RCA Online și Calculator de Asigurare RCA Auto
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Circulația unui automobil pe drumurile publice este condiționată
              de încheierea unei asigurări de răspundere civilă auto.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <FontAwesomeIcon
              icon={faList}
              className="text-blue-700 text-lg md:text-2xl"
            />
            <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link
              href="#rca-romania"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>RCA în România</strong>
              </span>
            </Link>

            <Link
              href="#rca-ieftin-online"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faCalculator} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>RCA ieftin online cu calculatorul</strong>
              </span>
            </Link>

            <Link
              href="#ce-inseamna-rca"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce înseamnă RCA</strong>
              </span>
            </Link>

            <Link
              href="#daune-acoperite"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce daune acoperă RCA</strong>
              </span>
            </Link>

            <Link
              href="#decontare-directa"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Decontarea directă</strong>
              </span>
            </Link>

            <Link
              href="#cum-inchei-rca"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faComputer} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cum închei un RCA ieftin</strong>
              </span>
            </Link>

            <Link
              href="#limite-despagubire"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEuroSign} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Limitele de despăgubire</strong>
              </span>
            </Link>
          </div>
        </div>

        <div
          id="rca-romania"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                RCA în România - asigurarea de răspundere civilă auto
                obligatorie, responsabilă de protejarea șoferilor și victimelor
                accidentelor
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              RCA este o asigurare auto necesară și obligatorie în România, spre
              deosebire de{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/casco"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurarea CASCO
              </Link>
              , care despăgubește conducătorii auto pentru daune materiale,
              deces și vătămări corporale ivite din vina titularului poliței.
              Valabilă pe teritoriul României, în statele UE, dar și în alte
              zone, asigurarea RCA se poate încheia online, pe asigurari.ro,
              broker ce pune la dispoziție diferite informații utile cu privire
              la drepturile și obligațiile aferente fiecărei oferte în parte și
              care, la final, eliberează polița. Printre oferte se numără și
              încheierea{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/breakdown"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurării de asistență rutieră
              </Link>
              , partener de nădejde la drumuri lungi, ce se adresează atât
              persoanelor fizice, cât și celor juridice.
            </p>
          </div>
        </div>

        <div
          id="rca-ieftin-online"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCalculator}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                RCA ieftin online, cu ajutorul calculatorului - calcule precise
                și rapide pentru cea mai bună ofertă
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pentru a găsi asigurarea auto RCA potrivită pentru fiecare, este
              important să se utilizeze calculatorul online. Se accesează
              opțiunea „calculează RCA online", se introduc informațiile
              necesare și se afișează o listă de polițe RCA disponibile. Printre
              avantajele unei astfel de polițe auto încheiate online se numără
              calcularea rapidă a prețurilor RCA, economisind timp și efort,
              păstrarea confidențialității datelor personale și financiare,
              opțiuni de plată flexibile, consultanță gratuită pentru a lua
              decizia corectă și informată.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea auto RCA se poate încheia pe o perioadă între o lună și
              douăsprezece luni și se încasează direct de service-ul care
              realizează reparația sau prin plătirea de către asigurator a unei
              sume de bani ulterior folosită în acest sens de către titular.
            </p>
          </div>
        </div>

        <div
          id="ce-inseamna-rca"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce înseamnă RCA – cele mai importante lucruri pe care trebuie să
                le știi
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Polița RCA îți asigură liniștea financiară atunci când provoci un
              accident: acoperă daunele materiale, vătămările corporale sau
              decesul victimei, indiferent unde te afli în România, în UE, în
              Spațiul Economic European sau în țările din sistemul Carte Verde.
              Fără o asigurare RCA valabilă, riști amenzi, reținerea
              certificatului de înmatriculare și să fii tras la răspundere în
              instanță pentru despăgubiri.
            </p>
          </div>
        </div>

        <div
          id="daune-acoperite"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faUmbrella}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce daune acoperă o asigurare RCA auto obligatorie</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Autoritatea de Supraveghere Financiară prevede că o poliță RCA
            acoperă strict prejudiciile produse terțelor persoane de vehiculul
            asigurat, atâta vreme cât incidentul s-a produs în perioada de
            valabilitate a poliței și nu depășește limitele contractului. Prin
            asigurare RCA se plătesc compensații pentru:
          </p>

          <div className="">
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  vătămări corporale sau deces;
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  prejudicii nepatrimoniale;
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  pagube materiale;
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  pierderea utilității vehiculului avariat;
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  cheltuieli de judecată ale victimei.
                </span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Astfel, o poliță RCA oferă protecție financiară atât pentru
              șoferul vinovat, cât și pentru cei afectați.
            </p>
          </div>
        </div>

        <div
          id="decontare-directa"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce înseamnă decontarea directă?</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Este serviciul auxiliar de gestionare a daunelor de către
              asigurătorii RCA a propriilor asigurați, care se ofertează
              obligatoriu de către asigurator, iar achiziția acestuia de către
              asigurat este opțională.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Cu alte cuvinte, în cazul achiziționării serviciului de decontare
              directă, dacă accidentul se produce pe teritoriul României,
              vehiculele implicate în accident sunt înmatriculate/înregistrate
              în România, prejudiciile sunt produse exclusiv vehiculelor și
              ambele vehicule dețin asigurare RCA valabilă la data
              evenimentului, atunci persoana prejudiciată își poate deschide și
              administra dosarul de daună prin propriul asigurator RCA.
            </p>
          </div>
        </div>

        <div
          id="cum-inchei-rca"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faComputer}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Cum poți încheia un RCA ieftin?</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Pe asigurari.ro – cea mai mare platformă digitală de asigurări
              online din România – găsești în câteva minute cele mai bune oferte
              de RCA. Comisionul perceput de noi este, de regulă, mai mic decât
              cel maximal, prețul final al poliței poate fi, astfel, mai
              avantajos pentru tine.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Ai acces la tarife actualizate, informații complete despre
              drepturile și obligațiile tale, iar polița o primești instant prin
              e-mail. Plata este 100% sigură, cu cardul sau prin transfer
              bancar, fără costuri suplimentare.
            </p>
          </div>
        </div>

        <div
          id="limite-despagubire"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEuroSign}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce limite de despăgubire sunt acordate prin asigurarea RCA în
                cazul unui accident în România?
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              În conformitate cu legea 132/2017 și regulile ASF, o poliță RCA
              oferă cel puțin 1.220.000 EURO pentru pagube materiale și
              6.070.000 EURO pentru vătămări corporale și decese. Aceste
              plafoane garantează că persoanele prejudiciate primesc compensații
              adecvate, indiferent de situația financiară a celui vinovat, iar
              asigurarea RCA îți oferă protecție reală împotriva costurilor
              ridicate generate de accidente.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Cu www.asigurari.ro, procesul de ofertare online pentru o poliță
              RCA potrivită nevoilor tale este simplu și rapid. Site-ul îți
              securizează datele personale și financiare și îți oferă opțiuni
              flexibile de plată. Echipa de consultanță gratuită te ajută să
              alegi varianta optimă, iar gama variată de polițe RCA la prețuri
              competitive îți asigură soluții ieftine și eficiente pentru
              protecția în trafic.
            </p>
          </div>
        </div>
      </div>

      <InternalLinksRCA />
    </>
  )
}
