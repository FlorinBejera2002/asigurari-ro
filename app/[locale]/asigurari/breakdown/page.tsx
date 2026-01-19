import {
  faCheck,
  faEdit,
  faInfoCircle,
  faList,
  faPlusCircle,
  faRoad,
  faTimes,
  faTimesCircle,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerBreakdown from '@/components/banners/banner-breakdown'

export const metadata: Metadata = {
  title:
    'Asigurare Asistență Rutieră - Ajutor Rapid în Caz de Pană | Asigurari.ro',
  description:
    'Asigurare asistență rutieră 24/7. Tractare, depanare, mașină de înlocuire și asistență tehnică în toată țara.'
}

export default function BreakdownLandingPage() {
  return (
    <>
      <BannerBreakdown />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare de Asistență Rutieră Online (Breakdown) - Calculator de
              Asigurare de Asistență Rutieră
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Văzută drept un partener de nădejde, la drumurile lungi, de
              vacanță, asigurarea de Asistență Rutieră este utilă indiferent de
              scenariul care intervine asupra deplasărilor tale. Acest tip de
              poliță este complementar asigurării CASCO sau RCA și se adresează
              atât persoanelor fizice, cât și persoanelor juridice.
              Aplicabilitatea asigurării de asistență rutieră este valabilă pe
              toate drumurile publice aflate pe teritoriul României.
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
                <strong>Tot despre asistența rutieră</strong>
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
                <strong>Ce nu este acoperit</strong>
              </span>
            </Link>

            <Link
              href="#avantaje-conexe"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Avantaje conexe</strong>
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
                icon={faRoad}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea de Asistență Rutieră
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Poți încheia acest tip de poliță numai dacă ai un vehicul cu masa
              autorizată mai mică sau egală cu 3,5 tone. De asemenea, serviciile
              care fac obiectul acoperirii nu se aplică mașinilor care participă
              la competiții sportive, precum și celor folosite la activități de
              taximetrie, respectiv de închirieri auto. Nu vei putea opta pentru
              Asigurarea de Asistență Rutieră nici în cazul mașinilor de la
              școala de șoferi sau al celor folosite pentru transportul
              mărfurilor. Polița este valabilă în urma evenimentelor care
              cauzează imposibilitatea de deplasare a mașinii, iar serviciile
              incluse în poliță sunt disponibile 24 de ore din 24.
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
              <strong>Ce acoperă asigurarea de Asistență Rutieră</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Gândită special pentru accidentele rutiere, dar și pentru momentele
            în care se ivesc defecțiuni tehnice, această poliță acoperă o gamă
            largă de riscuri. Odată ce ai ales-o, vei avea acoperire pentru
            următoarele scenarii:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentele produse în trafic
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                defecțiunile instalației electrice
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                defecțiunile mecanice
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                penele de combustibil
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                alimentarea cu combustibilul nepotrivit
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                penele de baterie
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                penele de cauciuc
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                actele de vandalism
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                pierderea cheilor sau încuierea lor în mașină
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                tractarea mașinii avariate, depanarea ei la fața locului sau
                oferirea unei mașini de schimb
              </span>
            </div>
          </div>
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
                Ce nu este acoperit de o asigurare de Asistență Rutieră
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            La fel ca orice altă poliță de asigurare, și una destinată
            asistenței rutiere are o aplicabilitate ce depinde de mai mulți
            factori. Astfel, potrivit condițiilor aplicate de cele mai multe
            dintre companiile de asigurare, nu vei putea beneficia de acoperire
            pentru evenimente ca:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                defecțiunile care nu au legătură cu o situație de urgență
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                accidentele care au loc în afara drumurilor publice
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                pagubele rezultate ca urmare a unor dezastre naturale
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                prejudiciile cauzate de război, terorism sau atacuri nucleare
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                daunele rezultate din acțiunile voluntare ale proprietarului
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                acoperirea taxelor de drum, a celor de pod, a celor de
                autostradă, precum și a tarifelor aplicate în parcările private
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                contravaloarea benzinei sau motorinei
              </span>
            </div>
          </div>
        </div>

        <div
          id="avantaje-conexe"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Care sunt avantajele conexe unei polițe de Asistență Rutieră
              </strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Odată ce vei încheia o asigurare pentru Asistență Rutieră, te vei
            bucura de mai mult decât de simpla acoperire a riscurilor specifice
            unei astfel de polițe. Astfel, vei mai beneficia de:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                valabilitate în România (în cazul asocierii cu o asigurare CASCO
                de tip premium)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                acces non-stop la call center
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                tractarea vehiculului și transportul pasagerilor
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">depanare</span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                vehicul la schimb
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
              <strong>Cum poți încheia o asigurare de Asistență Rutieră</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              În cazul în care vrei să beneficiezi de serviciile unei asigurări
              de Asistență Rutieră, ai la dispoziție expertiza www.asigurari.ro
              Compania va identifica pentru tine cele mai bune pachete propuse
              de operatorii de pe piața asigurărilor. De asemenea,
              www.asigurari.ro îți va furniza informații cu privire la
              drepturile și obligațiile aferente fiecărei oferte în parte, iar
              la final va elibera polița, conform opțiunilor bifate de tine.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pe www.asigurari.ro ai la dispoziție un comparator de prețuri
              online, de la cele mai bune companii de asigurări de top, care îți
              permite să achiziționezi polița în mai puțin de cinci minute.
              Plata se poate face în mod securizat, fie prin transfer bancar,
              fie cu cardul VISA, VISA Electron, MASTERCARD sau Maestro. Site-ul
              folosește protocoale de securitate moderne și sigure, adaptate
              legislației în vigoare. Livrarea polițelor de asigurare de viață
              se face aproape instantaneu, pe e-mail, fără costuri suplimentare.
            </p>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg">
            <p className="text-gray-700 leading-relaxed italic">
              Cu informațiile prezentate mai sus, știi cu exactitate care sunt
              avantajele pe care le oferă o poliță Casco Econom. Insurance
              Broker îți vine în sprijin cu oferte croite după nevoile tale.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
