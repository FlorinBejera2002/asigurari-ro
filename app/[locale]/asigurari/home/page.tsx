import {
  faBan,
  faComputer,
  faEdit,
  faHome,
  faLink,
  faList,
  faPlusCircle,
  faQuestionCircle,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerHome from '@/components/banners/banner-home'

export const metadata: Metadata = {
  title: 'Asigurare Locuință - Protejează-ți Casa și Bunurile | Asigurari.ro',
  description:
    'Asigurare locuință împotriva incendiilor, inundațiilor și furturilor. Protecție completă pentru casa ta și bunurile din interior.'
}

export default function HomeLandingPage() {
  return (
    <>
      <BannerHome />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare locuință - Calculator de asigurare pentru locuință
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
          <div className="flex items-start gap-2 mb-6">
            <FontAwesomeIcon
              icon={faList}
              className="text-blue-700 text-lg md:text-2xl mr-2"
            />
            <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link
              href="#asigurarea-locuintei"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faHome} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurarea locuinței</strong>
              </span>
            </Link>

            <Link
              href="#asigurare-online"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faComputer} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Asigurare online pentru locuință</strong>
              </span>
            </Link>

            <Link
              href="#de-ce-facultativa"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>De ce asigurare facultativă</strong>
              </span>
            </Link>

            <Link
              href="#ce-acopera"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce acoperă asigurarea facultativă</strong>
              </span>
            </Link>

            <Link
              href="#clauze-suplimentare"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Clauze suplimentare</strong>
              </span>
            </Link>

            <Link
              href="#locuinte-excluse"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faBan} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Locuințe care nu pot fi asigurate</strong>
              </span>
            </Link>

            <Link
              href="#cum-inchei"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEdit} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cum închei rapid o asigurare</strong>
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
          id="asigurarea-locuintei"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold ">
              <FontAwesomeIcon
                icon={faHome}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>
                Asigurarea locuinței - instrumentul perfect prin care se poate
                pune casa la adăpost
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea locuinței este acea poliță cu ajutorul căreia sunt
              protejați proprietarii și chiriașii de eventualitatea unor
              pierderi financiare, în cazul unor daune sau distrugeri ale
              locuinței sau bunurilor din interior. Acest tip de asigurare se
              poate încheia online, alături de alte instrumente utile, cum ar fi{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/rca"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurarea RCA
              </Link>{' '}
              sau{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/breakdown"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurarea de asistență rutieră
              </Link>
              . Există două tipuri de polițe pentru protejarea casei: asigurarea
              obligatorie pentru locuință (PAD), care protejează împotriva
              dezastrelor (cutremure, alunecări de teren, inundații) și
              asigurarea facultativă, ce acoperă și riscurile ce nu sunt
              cuprinse în PAD. Ambele tipuri de asigurări pentru imobile se pot
              încheia la asigurari.ro, echipa noastră ocupându-se de găsirea
              celor mai bune oferte existente pe piață.
            </p>
          </div>
        </div>

        <div
          id="asigurare-online"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faComputer}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>
                Asigurarea pentru locuință - avantaje numeroase la încheierea
                online a poliței
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea pentru casă online se poate încheia pentru locuință de
              tip A (cu structură din beton, lemn, metal, cu pereți exteriori
              din piatră etc.), dar și pentru locuințe de tip B (cu pereți
              exteriori din alte materiale nesupuse unui tratament termic sau
              chimic). Asigurarea facultativă pentru casă poate avea atașată și
              clauze opționale cu privire la asigurarea centralelor termice, a
              instalațiilor de încălzire și climatizare, a aparatelor electrice,
              electronice, electrocasnice, a bunurilor casabile sau a celor de
              valoare. Asigurările obligatorii pe casă sau apartament
              obligatorii (PAD) sau cele de tip facultativ sunt instrumente
              financiare moderne, cu ajutorul cărora se pun la adăpost clădirile
              imobiliare împotriva numeroaselor riscuri, putând să se
              achiziționeze online doar în câteva minute. Plata se face în mod
              securizat, iar livrarea asigurărilor pentru locuință se face
              instant și fără costuri suplimentare. Asigurările pentru locuință
              oferite de noi sunt ieftine și avantajoase, așa că nu ezita să ne
              contactezi pentru a stabili condițiile cele mai favorabile pentru
              tine!
            </p>
          </div>
        </div>

        <div
          id="de-ce-facultativa"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>
                De ce ai nevoie de o asigurare facultativă a locuinței
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Chiar dacă ai deja o asigurare obligatorie PAD, trebuie să știi că
              aceasta acoperă doar riscurile de cutremur, alunecări de teren și
              inundații naturale. Este un minim impus prin lege, dar realitatea
              din teren arată că amenințările asupra unei locuințe sunt mult mai
              variate. De la incendii și furtuni violente până la defecțiuni
              accidentale ale instalațiilor interioare sau daune produse de
              vecini, toate pot afecta structura sau conținutul casei tale. În
              fața acestor riscuri, o poliță PAD nu este suficientă.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea facultativă a locuinței este soluția care îți permite
              să mergi mai departe de protecția minimală. Ea este o formă de
              acoperire extinsă, care te ajută să gestionezi financiar urmările
              unor evenimente neașteptate, fără să fii nevoit să suporți
              costurile din buzunarul propriu. Mai mult, ea îți oferă libertatea
              de a asigura nu doar pereții casei, ci și tot ce înseamnă
              confortul din interiorul ei: mobilier, electrocasnice,
              electronice, obiecte de valoare sau chiar finisajele decorative.
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
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Ce acoperă asigurarea facultativă</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Polița facultativă este creată pentru a acoperi riscurile reale la
              care o locuință poate fi expusă. Printre cele mai frecvente
              evenimente pentru care asiguratorii oferă despăgubiri se numără
              incendiile, trăsnetele directe, exploziile de gaz sau de
              instalații, furtunile puternice, ploile torențiale, căderile de
              grindină, dar și daunele provocate de greutatea zăpezii sau de
              avalanșe.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Totodată, pot fi acoperite daunele provocate de căderea
              accidentală a unor corpuri – arbori, stâlpi sau antene – precum și
              efectele undelor de șoc provocate de avioane. Alte evenimente cu
              potențial distructiv, cum ar fi inundațiile cauzate de avarii ale
              instalațiilor interioare, scurgerile de apă sau infiltrațiile, pot
              fi și ele incluse în poliță, în funcție de condițiile oferite de
              asigurator.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este important de știut că, spre deosebire de polița PAD, care
              asigură doar structura de rezistență a locuinței, o asigurare
              facultativă poate acoperi și bunurile din interior. În acest sens,
              asiguratul are posibilitatea de a include în contract mobilierul,
              aparatura electronică sau electrocasnică, obiectele casabile,
              covoarele, perdelele, ba chiar și obiectele de artă sau
              bijuteriile, în limitele și condițiile stabilite în polița de
              asigurare.
            </p>
          </div>
        </div>

        <div
          id="clauze-suplimentare"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>
                Clauze suplimentare pentru un grad mai mare de protecție
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Unul dintre avantajele semnificative ale asigurării facultative
              este flexibilitatea. Polița poate fi personalizată în funcție de
              tipul locuinței, de valoarea bunurilor din interior și de
              riscurile specifice zonei geografice. Astfel, dacă locuiești
              într-o zonă frecvent afectată de furtuni, poți opta pentru
              acoperirea pagubelor produse de vijelii. Dacă locuința este
              mobilată complet, poți adăuga în poliță o clauză specială pentru
              conținutul casei.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              De asemenea, asigurarea facultativă îți permite atașarea unor
              clauze utile, cum ar fi cea pentru rambursarea cheltuielilor de
              cazare temporară, în cazul în care locuința ta devine nelocuibilă.
              Alte clauze pot acoperi daunele provocate terților – de exemplu,
              dacă o inundație din apartamentul tău afectează locuința vecinului
              de dedesubt – sau pot asigura sistemele de încălzire, panourile
              solare ori instalațiile de climatizare.
            </p>
          </div>
        </div>

        <div
          id="locuinte-excluse"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faBan}
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Locuințele care nu pot fi asigurate facultativ</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Există, însă, și situații în care nu poate fi emisă o poliță
              facultativă. Conform prevederilor legale, clădirile aflate în
              stare avansată de degradare, cele părăsite, neutilizate pe durata
              întregii perioade de asigurare sau cele construite provizoriu, în
              afara perimetrului construibil, nu sunt eligibile pentru această
              formă de asigurare. De asemenea, sunt excluse clădirile fără
              tâmplărie, fără uși sau ferestre, precum și cele încadrate în
              clasa I de risc seismic.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Este important ca înainte de semnarea poliței, locuința să fie
              evaluată corect, iar proprietarul să declare informațiile reale
              privind starea clădirii și utilizarea acesteia.
            </p>
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
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Cum poți încheia rapid o asigurare facultativă</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Procesul de achiziție al unei polițe facultative este simplu,
              rapid și complet digitalizat. Prin intermediul platformei
              www.asigurari.ro, poți compara în doar câteva minute ofertele
              celor mai importanți asiguratori din România, alegând varianta
              care corespunde cel mai bine nevoilor tale. După selectarea
              ofertei plata se va realiza securizat, cu cardul sau prin transfer
              bancar.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Polița este emisă imediat și trimisă pe e-mail, fără a fi necesară
              deplasarea la un sediu fizic. Nu există costuri suplimentare, iar
              tot procesul durează, în medie, 3-4 minute. În plus, poți
              beneficia de asistență gratuită din partea unui broker
              specializat, care îți va explica toate detaliile contractuale.
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
                className="text-blue-700 text-lg md:text-2xl mr-2"
              />
              <strong>Alte tipuri de asigurări ce te-ar putea interesa</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Link
              href="https://www.asigurari.ro/asigurare/pad"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fa-solid fa-house w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">Asigurare PAD</strong>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/centrale-fotovoltaice"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fa-solid fa-solar-panel w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">
                Asigurare centrale fotovoltaice
              </strong>
            </Link>

            <Link
              href="https://www.asigurari.ro/asigurare/lucrari-constructii"
              target="_blank"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
              rel="noopener"
            >
              <i className="fa-solid fa-hammer w-6 h-6 text-blue-700 mt-1"></i>
              <strong className="text-gray-800">
                Asigurare lucrări construcții
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
