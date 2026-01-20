import { faCalculator } from '@fortawesome/pro-solid-svg-icons/faCalculator'
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck'
import { faEdit } from '@fortawesome/pro-solid-svg-icons/faEdit'
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons/faInfoCircle'
import { faLink } from '@fortawesome/pro-solid-svg-icons/faLink'
import { faList } from '@fortawesome/pro-solid-svg-icons/faList'
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons/faQuestionCircle'
import { faSearch } from '@fortawesome/pro-solid-svg-icons/faSearch'
import { faShield } from '@fortawesome/pro-solid-svg-icons/faShield'
import { faShieldAlt } from '@fortawesome/pro-solid-svg-icons/faShieldAlt'
import { faThumbsUp } from '@fortawesome/pro-solid-svg-icons/faThumbsUp'
import { faTruck } from '@fortawesome/pro-solid-svg-icons/faTruck'
import { faUmbrella } from '@fortawesome/pro-solid-svg-icons/faUmbrella'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Asigurare CASCO Online - Compară Prețuri și Cumpără | Asigurari.ro',
  description:
    'Compară oferte CASCO de la toți asigurătorii din România. Protecție completă pentru vehiculul tău. Prețuri avantajoase și asistență 24/7.'
}

export default function CASCOLandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          <strong>
            Asigurare CASCO Online și Calculator de Asigurare CASCO Auto
          </strong>
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            Când circuli pe drumurile publice, îți asumi riscurile aferente unui
            accident rutier, a cărui vină ai putea să o porți. Ce este de făcut,
            însă, în situația în care nu te afli în circulație sau în cazul în
            care te confrunți cu o daună care nu a fost cauzată, neapărat, de un
            alt șofer? Pentru orice alt scenariu nefast, asiguratorii au
            conceput polița CASCO.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon
            icon={faList}
            className="text-blue-700 text-lg md:text-2xl mr-2"
          />
          <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Link
            href="#casco-instrument-necesar"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>CASCO - instrument necesar</strong>
            </span>
          </Link>

          <Link
            href="#casco-auto-ieftine"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faCalculator} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>CASCO auto ieftine cu calculatorul</strong>
            </span>
          </Link>

          <Link
            href="#tot-despre-casco"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>Tot despre asigurarea CASCO</strong>
            </span>
          </Link>

          <Link
            href="#ce-inseamna-casco"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-green-500"
            />
            <span className="font-semibold text-gray-800">
              <strong>Ce înseamnă asigurarea CASCO</strong>
            </span>
          </Link>

          <Link
            href="#daune-acoperite"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>Daunele acoperite de CASCO</strong>
            </span>
          </Link>

          <Link
            href="#cum-inchei-polita"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faEdit} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>Cum închei o poliță CASCO</strong>
            </span>
          </Link>

          <Link
            href="#avantajele-casco"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faThumbsUp} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>Avantajele asigurării CASCO</strong>
            </span>
          </Link>

          <Link
            href="#inspectia-risc"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faSearch} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>Inspecția de risc</strong>
            </span>
          </Link>

          <Link
            href="#tractarea-vehiculului"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faTruck} className="text-green-500" />
            <span className="font-semibold text-gray-800">
              <strong>Tractarea vehiculului</strong>
            </span>
          </Link>

          <Link
            href="#alte-tipuri"
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
        id="casco-instrument-necesar"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              CASCO - instrument necesar pentru orice scenariu nefast pe
              drumurile publice
            </strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            Asigurarea CASCO este o poliță facultativă pentru autovehicule, ce
            protejează proprietarul împotriva unor riscuri variate. Spre
            deosebire de{' '}
            <Link
              href="https://www.asigurari.ro/asigurare/rca"
              target="_blank"
              className="text-blue-700 md:hover:underline font-bold"
              rel="noopener"
            >
              asigurarea RCA
            </Link>
            , polița aceasta nu este obligatorie și nu va fi solicitată de
            agentul de la circulație. Printre avantajele sale pot fi amintite
            acoperirea extinsă, reparațiile sau înlocuirea pieselor afectate,
            protecția împotriva furtului, asistența rutieră, flexibilitatea în
            alegerea acoperirii, protecția financiară, siguranța. Pentru a
            reduce impactul financiar al unor evenimente neprevăzute și pentru a
            avea libertatea de a desfășura călătorii în siguranță, asigurari.ro
            îți pune la dispoziție o ofertă bogată de polițe ce se pot încheia
            online, printre care pot fi amintite asigurarea obligatorie RCA,{' '}
            <Link
              href="https://www.asigurari.ro/asigurare/breakdown"
              target="_blank"
              className="text-blue-700 md:hover:underline font-bold"
              rel="noopener"
            >
              asigurarea de asistență rutieră
            </Link>{' '}
            și asigurarea CASCO.
          </p>
        </div>
      </div>

      <div
        id="casco-auto-ieftine"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faCalculator}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              CASCO auto ieftine și avantajoase - încheierea poliței online cu
              ajutorul calculatorului
            </strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            Cu ajutorul unei simulări pe calculator se poate găsi cea mai bună
            ofertă de asigurări CASCO, astfel încât pachetul ales să se muleze
            pe necesități și buget. Oferta este trimisă cu rapiditate și se
            poate accesa consultanță gratuită pentru alegerea soluției potrivite
            în funcție de situație. După ce a fost încheiată, asigurarea auto
            CASCO va fi livrată instant. Pentru persoanele care vor să se bucure
            de siguranță totală, inclusiv pentru evenimentele auto din afara
            țării, este important să ia în considerare polița de asigurare full
            CASCO. Printre daunele acoperite de o astfel de poliță pot fi
            amintite: avariile parțiale sau totale ale mașinii, furtul parțial
            sau total, fenomenele atmosferice (furtună sau grindină) sau actele
            de vandalism.
          </p>
        </div>
      </div>

      <div
        id="tot-despre-casco"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>Tot ce trebuie să știi despre asigurarea CASCO</strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            Spre deosebire de polița RCA, aceasta nu este obligatorie, deci nu
            va fi solicitată de agentul de poliție, la un eventual control. În
            rândurile de mai jos, analizăm în detaliu care sunt avantajele și
            particularitățile acestui tip de asigurare.
          </p>
        </div>
      </div>

      <div
        id="ce-inseamna-casco"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>Ce înseamnă asigurarea CASCO</strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Sub acronimul compus din traducerea englezească a cuvintelor
            accident și coliziune, găsim o asigurare opțională, pentru
            autovehicul. Asigurarea CASCO este un tip de poliță care se încheie
            cu scopul de a asigura vehiculul în fața daunelor pe care le-ar
            putea avea cu sau fără implicarea șoferului. Există situații în care
            asigurarea CASCO, deși are un caracter fundamental facultativ, este
            impusă. Vorbim, aici, despre achizițiile unui automobil în leasing,
            ce sunt condiționate, de societățile care acordă finanțarea, de
            încheierea unei polițe CASCO. Pentru a putea beneficia de o
            asigurare CASCO, o mașină trebuie să aibă o vechime de maximum 10
            ani, dar există și cazuri în care aceasta poate avea chiar și o
            vechime de 15 ani.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-700 leading-relaxed">
            Valoarea la care se asigură vehiculul este cea de la momentul
            achiziției, în cazul exemplarelor noi, în timp ce, pentru cele cu o
            oarecare vechime, aceasta va fi calculată prin scăderea valorii de
            uzură. Asiguratul poate scădea costul poliței prin utilizarea
            franșizei, ce este stabilită de compania de asigurări. Aceasta este
            complementară asigurării și variază între 100 și 500 de euro, sumă
            ce va fi achitată de asigurat, când va utiliza polița CASCO. În
            acest fel, prețul asigurării este mai mic. Există și contracte ce
            stabilesc franșiza la o valoare de 1% din valoarea mașinii și chiar
            la 10% din valoarea acesteia, în cazul în care avem de-a face cu o
            daună totală. De asemenea, pentru unele modele premium, asiguratorii
            pot impune o anumită franșiză la momentul semnării poliței.
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
            <strong>Care sunt daunele acoperite de o asigurare CASCO</strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Acest capitol marchează o altă diferență majoră a asigurării CASCO,
            față de asigurarea RCA. În funcție de compania emitentă, polița
            CASCO poate acoperi o gamă diversă de daune. Astfel, te poți pune la
            adăpost, cu o asemenea poliță, de daunele survenite în urma unui
            accident rutier, a unui act de vandalism, a unui fenomen natural sau
            chiar a unui furt. Mai exact, repartizarea riscurilor acoperite se
            face după cum urmează:
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              avarii parțiale sau totale (ciocniri, loviri, zgârieturi);
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              furt parțial sau total;
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              fenomene atmosferice (furtună sau grindină);
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              acte de vandalism.
            </span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Dacă asigurarea de bază este valabilă pentru un număr limitat de
          scenarii, cea de tip full CASCO vine cu niște costuri suplimentare,
          iar aplicabilitatea ei în afara teritoriului țării diferă, în funcție
          de clauzele fiecărui contract în parte. De asemenea, în funcție de
          tipul de asigurare pe care îl închei, poți avea parte de despăgubiri
          și în cazul în care mașina este condusă de un alt șofer sau atunci
          când au fost afectate doar jantele, respectiv anvelopele. Este
          important ca, în cazul unui eveniment, să te asiguri că service-ul la
          care apelezi colaborează cu asiguratorul care ți-a eliberat polița. În
          caz contrar, vei plăti contravaloarea reparației. Ulterior, vei
          trimite documentația necesară, pentru a atesta plata lucrărilor
          efectuate.
        </p>
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
            <strong>Cum poți încheia o poliță CASCO</strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Când cauți cel mai bun preț pentru o poliță CASCO, ai nevoie de
            sprijinul lui www.asigurari.ro. Primul pas va fi acela de a obține o
            cotație online, pentru care va trebui să completezi un formular ce
            nu îți va lua mai mult de cinci minute. Vei introduce, așadar,
            numărul de înmatriculare, seria de șasiu, tipul automobilului și al
            combustibilului, marca, tipul caroseriei, transmisia, culoarea,
            seria CIV, anul fabricației și specificațiile tehnice.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Oferta este transmisă online cu mare rapiditate, cu multiple
            variante, din partea societăților de asigurări din România. Ai parte
            de consultanță gratuită în alegerea unor soluții de asigurare
            potrivite, în funcție de valoarea poliței, respectiv a franșizei pe
            care ești dispus să o achiți. După încheiere, polița este livrată
            instant, prin e-mail, iar plata asigurării se face securizat, prin
            card sau prin transfer bancar, fără costuri suplimentare.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Informațiile de mai sus te pot ajuta să închei o poliță CASCO în
            cele mai avantajoase condiții. Cu ajutorul www.asigurari.ro și a
            soluțiilor tehnologice moderne, vei rezolva rapid orice eventuală
            daună.
          </p>
        </div>
      </div>

      <div
        id="avantajele-casco"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>Care sunt avantajele asigurării CASCO?</strong>
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Asigurarea CASCO</strong> (asigurarea auto pentru daune
          accidentale) oferă proprietarilor de vehicule numeroase avantaje și
          protecție financiară în cazul unor evenimente neprevăzute. Iată câteva
          dintre avantajele asigurării CASCO:
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faShield}
              className="text-green-500 w-5 leading-none pt-[5px]"
            />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Acoperire extinsă
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Asigurarea CASCO</strong> acoperă daunele produse
                vehiculului dumneavoastră ca urmare a unor accidente rutiere,
                furt, vandalism, incendiu, calamități naturale și alte
                evenimente neprevăzute.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="fas fa-tools text-green-500 w-5 leading-none pt-[5px]"></i>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Reparație și înlocuire
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dacă vehiculul dumneavoastră suferă daune, această asigurare vă
                permite să solicitați reparații sau înlocuirea pieselor
                afectate, inclusiv costurile de manoperă și piese de schimb.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="fas fa-lock text-green-500 w-5 leading-none pt-[5px]"></i>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Protecție împotriva furtului
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Asigurarea vă protejează în cazul în care vehiculul
                dumneavoastră este furat sau suferă daune în urma unei tentative
                de furt.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="fas fa-wrench text-green-500 w-5 leading-none pt-[5px]"></i>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Asistență rutieră
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Multe polițe CASCO includ și servicii de asistență rutieră, cum
                ar fi tractarea vehiculului, furnizarea de combustibil sau
                deschiderea ușilor în caz de blocare.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="fas fa-sliders-h text-green-500 w-5 leading-none pt-[5px]"></i>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Flexibilitate în alegerea acoperirii
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Acest tip de asigurare oferă opțiuni suplimentare de acoperire,
                cum ar fi asigurarea pentru lunetă, acoperirea pentru bunurile
                transportate în vehicul sau asigurarea pentru daune provocate de
                animale.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="fas fa-euro-sign text-green-500 w-5 leading-none pt-[5px]"></i>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Protecție financiară
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Polița CASCO vă oferă o protecție financiară semnificativă,
                întrucât costurile reparațiilor sau înlocuirii vehiculului pot
                fi foarte mari. Aceasta vă ajută să evitați cheltuieli
                neprevăzute și să vă protejați investiția.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="fas fa-heart text-green-500 w-5 leading-none pt-[5px]"></i>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Siguranță</h3>
              <p className="text-gray-700 leading-relaxed">
                Asigurarea vă oferă siguranța de a ști că sunteți protejat în
                cazul unor evenimente nefericite. Indiferent de circumstanțe,
                puteți avea încredere că veți primi asistența necesară și că
                daunele vor fi acoperite.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            <strong>Asigurarea CASCO</strong> oferă siguranță și protecție
            pentru proprietarii de vehicule, reducând impactul financiar al unor
            evenimente neprevăzute și oferindu-vă libertatea de a vă bucura de
            călătorii în siguranță.
          </p>
        </div>
      </div>

      <div
        id="inspectia-risc"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              Ce înseamnă inspecția de risc, ce presupune și cine o face?
            </strong>
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Inspecția de risc</strong> reprezintă un proces important în
          domeniul asigurărilor, având scopul de a evalua și identifica
          riscurile asociate unui obiect asigurat, cum ar fi o proprietate sau
          un vehicul. Această evaluare este realizată de un inspector de risc,
          care poate fi un reprezentant al companiei de asigurare sau o persoană
          specializată în analiza riscurilor. Inspecția de risc presupune o
          examinare detaliată a obiectului asigurat pentru a identifica
          potențialele pericole sau vulnerabilități care pot duce la daune sau
          incidente. Inspectorul de risc va evalua aspecte precum:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              structura și starea fizică a obiectului;
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              măsuri de siguranță implementate;
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              eventuale deficiențe sau factori de risc specifici.
            </span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Această evaluare are rolul de a determina nivelul de risc al
          obiectului și de a ajuta compania de asigurare să stabilească nivelul
          de asigurare adecvat. De asemenea, poate fi folosită pentru a
          recomanda măsuri suplimentare de prevenire sau protecție pentru a
          minimiza riscurile identificate. Inspectorii de risc pot avea
          expertiză în domenii precum asigurări de proprietate, asigurări auto
          sau asigurări industriale. Aceștia vor utiliza cunoștințele și
          experiența lor pentru a analiza în profunzime obiectul asigurat și a
          oferi recomandări în vederea gestionării riscurilor. Prin intermediul{' '}
          <strong>inspecției de risc</strong>, companiile de asigurare se
          asigură că primesc informațiile necesare pentru a evalua și subscrie
          riscurile în mod corect și pentru a stabili primele de asigurare
          corespunzătoare. De asemenea, această evaluare contribuie la
          promovarea prevenției și a siguranței, încurajând implementarea
          măsurilor adecvate pentru minimizarea riscurilor și protecția
          asiguratului.
        </p>
      </div>

      <div
        id="tractarea-vehiculului"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              Asigurarea CASCO de pe www.asigurari.ro acoperă tractarea
              vehiculului avariat?
            </strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            <strong>Asigurarea CASCO</strong> oferită de www.asigurari.ro poate
            include acoperirea pentru tractarea vehiculului avariat, în funcție
            de pachetul și opțiunile select oferită de www.asigurari.ro poate
            include acoperirea pentru tractarea vehiculului avariat, în funcție
            de pachetul și opțiunile selectate. Tractarea vehiculului avariat
            este considerată adesea o asistență rutieră și poate fi inclusă în
            pachetul de bază al asigurării CASCO de la anumiți asiguratori.
            Totuși, este important de menționat că asigurarea de asistență
            rutieră pe teritoriul național este o asigurare separată și poate fi
            achiziționată independent de asigurarea CASCO. Această asigurare de
            asistență rutieră poate oferi servicii precum tractarea vehiculului
            avariat, furnizarea de combustibil, deschiderea ușilor în caz de
            blocare și altele. Prin intermediul www.asigurari.ro puteți explora
            și compara opțiunile disponibile pentru asigurarea CASCO și
            asigurarea de asistență rutieră, astfel încât să puteți alege
            pachetul care să se potrivească cel mai bine nevoilor și bugetului
            dvs. Este important să verificați detaliile și să citiți cu atenție
            condițiile și acoperirile oferite de fiecare asigurător pentru a lua
            decizia informată în privința poliței CASCO și a serviciilor de
            asistență rutieră.
          </p>
        </div>
      </div>

      <div
        id="alte-tipuri"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
      >
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faLink}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>Alte tipuri de asigurări ce te-ar putea interesa</strong>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Link
            href="https://www.asigurari.ro/asigurare/rca"
            target="_blank"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
            rel="noopener"
          >
            <i className="fa-solid fa-house w-6 h-6 text-blue-700 mt-1"></i>
            <strong className="text-gray-800">Asigurare RCA Online</strong>
          </Link>

          <Link
            href="https://www.asigurari.ro/asigurare/accidents"
            target="_blank"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
            rel="noopener"
          >
            <i className="fa-solid fa-solar-panel w-6 h-6 text-blue-700 mt-1"></i>
            <strong className="text-gray-800">Asigurare de Accidente</strong>
          </Link>

          <Link
            href="https://www.asigurari.ro/asigurare/breakdown"
            target="_blank"
            className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
            rel="noopener"
          >
            <i className="fa-solid fa-hammer w-6 h-6 text-blue-700 mt-1"></i>
            <strong className="text-gray-800">
              Asigurare Asistență Rutieră
            </strong>
          </Link>
        </div>
      </div>
    </div>
  )
}
