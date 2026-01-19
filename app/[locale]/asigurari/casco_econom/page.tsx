import {
  faBuilding,
  faCalendar,
  faCar,
  faCheck,
  faClock,
  faCloudRain,
  faEdit,
  faEuroSign,
  faInfoCircle,
  faList,
  faMoneyBill,
  faNetworkWired,
  faPhone,
  faPlusCircle,
  faSearch,
  faShield,
  faShieldAlt,
  faTimes,
  faTimesCircle,
  faUser,
  faWrench
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import BannerCascoEconom from '@/components/banners/banner-casco-econom'

export default function CascoEconomPage() {
  return (
    <>
      <BannerCascoEconom />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurare CASCO Econom Online si Calculator CASCO Econom Auto
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Dacă legea prevede obligativitatea încheierii unei polițe RCA,
              pentru circulația automobilelor pe drumurile publice, o asigurare
              facultativă Casco va acoperi și alte tipuri de riscuri, printre
              care vandalismul, furtul sau fenomenele naturii. Polița CASCO
              Econom, însă, se adresează automobilelor cu o vechime mai mare de
              zece ani (până la 13 ani sau între 6 și 20 de ani în funcție de
              asigurator) și oferă protecție în cazul daunelor rezultate în urma
              unui accident cu altă mașină, respectiv în cazul daunelor produse
              de fenomene ale naturii.
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
              href="#despre-casco-econom"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Tot despre CASCO Econom</strong>
              </span>
            </Link>

            <Link
              href="#ce-se-asigura"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce se asigură prin această poliță</strong>
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
          </div>
        </div>

        <div
          id="despre-casco-econom"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faCar}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Tot ce trebuie să știi despre asigurarea Casco Econom
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Cu un tarif anual începând de la 500 RON, în funcție de
              asiguratorul ales, acest tip de poliță garantează o sumă asigurată
              de până la 10.000 de euro. Perioada de asigurare a poliței casco
              pentru mașini vechi poate fi de 6 sau de 12 luni, iar prima de
              asigurare se achită integral, în momentul încheierii poliței, fie
              prin virament bancar, fie în numerar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faEuroSign}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Tarif anual</h3>
              <p className="text-gray-700 text-sm">De la 500 RON</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faShield}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Sumă asigurată</h3>
              <p className="text-gray-700 text-sm">Până la 10.000 euro</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 text-center">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Perioadă</h3>
              <p className="text-gray-700 text-sm">6 sau 12 luni</p>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="bg-green-500 w-full max-w-6 h-6 rounded-full flex justify-center items-center text-white text-xl">
              ?
            </span>
            <h3 className="font-bold text-gray-800 mb-4">Cui se adresează</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                <span className="font-bold text-gray-800">Persoane fizice</span>
              </div>
              <p className="text-gray-700 text-sm">
                Cu vârsta de peste 30 de ani
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <FontAwesomeIcon icon={faBuilding} className="text-blue-600" />
                <span className="font-bold text-gray-800">
                  Persoane juridice
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Care dețin autoturisme rulate înmatriculate în România
              </p>
            </div>
          </div>
        </div>

        <div
          id="ce-se-asigura"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>
                Ce se asigură prin acest tip de poliță casco mașini vechi
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Casco Econom oferă atât protecție tipică unei polițe facultative,
              cât și flexibilitatea unei polițe obligatorii. Principalul
              beneficiu al acestui tip de instrument de protecție financiară
              este acela al posibilității de a acoperi distrugerile produse din
              coliziuni cu alte vehicule, chiar și în cazurile în care tu ești
              șoferul vinovat sau în care celălalt șofer nu are asigurare RCA.
              Astfel, odată ce vei încheia o poliță de asigurare Casco Econom,
              vei mai beneficia de protecție pentru următoarele:
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCar}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Autovehicule și modificări
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      autovehicule înmatriculate sau înregistrate în România
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      modificările constructive permanente aduse vehiculului
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      dotările de serie sau cele opționale
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      echipamentele suplimentare
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCloudRain}
                className="text-green-500 w-5 leading-none pt-[5px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 mt-0.5">
                  Fenomene naturale
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      daunele produse de grindină, ploaie torențială, furtună,
                      tornadă, uragan, taifun, ciclon, avalanșă de zăpadă sau
                      prăbușirea unui copac
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mt-1 text-sm"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      daunele produse ca efect indirect al riscurilor de
                      grindină, ploaie torențială, furtună, tornadă, uragan,
                      taifun, ciclon, avalanșă de zăpadă sau prăbușirea unui
                      copac, dar care pot fi atribuite acestor riscuri drept
                      cauze active și dominante
                    </span>
                  </div>
                </div>
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
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce nu acoperă asigurarea Casco Econom</strong>
            </h2>
          </div>

          <div className="border-l-4 border-red-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Polița Casco Econom nu acoperă coliziunile cauzate de conducătorul
              unui autovehicul identificat, ce are o asigurare obligatorie
              pentru răspunderea civilă auto (RCA), și nici daunele cauzate de
              război, de acte de terorism sau de reacții nucleare. Nu vor putea
              fi despăgubite de această poliță casco mașini vechi avariile
              survenite ca urmare a defecțiunilor mecanice, electrice sau
              electronice, rezultate ca urmare a lipsei inspecției tehnice
              periodice. De asemenea, nu poți beneficia de protecția poliței
              Casco Econom în cazul faptelor săvârșite cu intenție sau din culpă
              gravă, cum ar fi conducerea fără un permis de conducere valabil.
              Printre obiectele care nu se asigură, prin intermediul acestei
              polițe, se mai numără:{' '}
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="border border-gray-200 p-4 rounded-xl w-full">
              <h3 className="font-bold text-gray-800 mb-4">
                Situații neacoperite
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    avariile survenite ca urmare a defecțiunilor mecanice,
                    electrice sau electronice
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    rezultate ca urmare a lipsei inspecției tehnice periodice
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    faptele săvârșite cu intenție sau din culpă gravă
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    conducerea fără un permis de conducere valabil
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-4 rounded-xl w-full">
              <h3 className="font-bold text-gray-800 mb-4">
                Obiecte neacoperite
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    dispozitivele care nu sunt fixate pe automobil: GPS-uri,
                    stații de emisie/recepție sau camere video
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    husele scaunelor
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    piesele de schimb de rezervă
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    bunurile de uz personal: banii, bijuteriile, bagajele,
                    telefoanele sau articolele vestimentare
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    combustibilul
                  </span>
                </div>
              </div>
            </div>
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
                Ce alte beneficii oferă o asigurare casco mașini vechi
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Există și alte motive pentru care ai putea considera necesară
              încheierea unei asigurări casco mașini mai vechi de 10 ani,
              dincolo de riscurile acoperite și de protecția financiară în sine.
              Avantajele poliței țin de ușurința cu care poți avea parte de
              asistență, de despăgubire și de reparații, în cel mai scurt timp
              posibil și în cele mai bune condiții. Astfel, în funcție de oferta
              obținută de broker, poți face uz de următoarele beneficii:{' '}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faWrench}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                servicii de asistență rutieră, în cazul autoturismelor cu o
                vechime de până la 10 ani
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faNetworkWired}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                rețea de service-uri partenere extinsă la nivel național
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                număr de telefon pentru asistență la locul producerii
                incidentului
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                număr de telefon disponibil pentru informații legate de dosarul
                de daună
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="text-green-500 mt-1 text-sm"
              />
              <span className="text-gray-700 leading-relaxed">
                plata despăgubirilor se poate face și în regie proprie, direct
                către asigurat
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
                Cum poți încheia o poliță casco la mașini mai vechi de 10 ani
              </strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Dacă ești în căutarea unei oferte complete, pentru o asigurare
              casco mașini vechi, poți apela oricând la serviciile
              www.asigurari.ro Compania va identifica pentru tine cele mai bune
              pachete propuse de operatorii de pe piața asigurărilor. De
              asemenea, www.asigurari.ro îți va furniza informații cu privire la
              drepturile și obligațiile aferente fiecărei oferte în parte, iar
              la final, va elibera polița, conform opțiunilor bifate de tine.{' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">
                Identificare pachete
              </h3>
              <p className="text-gray-700 text-sm">
                Cele mai bune oferte de pe piața asigurărilor
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Sub 5 minute</h3>
              <p className="text-gray-700 text-sm">
                Achiziționarea rapidă online
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faShield}
                className="text-blue-600 text-2xl mb-3"
              />
              <h3 className="font-bold text-blue-700 mb-2">Plată securizată</h3>
              <p className="text-gray-700 text-sm">
                Transfer bancar sau carduri VISA/Mastercard
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Pe www.asigurari.ro ai la dispoziție un comparator de prețuri
            online, chiar și pentru casco masini mai vechi de 12 ani, de la
            asiguratori de top, care îți permite să achiziționezi polița în mai
            puțin de cinci minute. Plata se poate face în mod securizat, fie
            prin transfer bancar, fie cu cardul VISA, VISA Electron, MASTERCARD
            sau Maestro. Site-ul folosește protocoale de securitate moderne și
            sigure, adaptate legislației în vigoare. Livrarea polițelor de
            asigurare CASCO Econom se face aproape instantaneu, pe e-mail, fără
            costuri suplimentare{' '}
          </p>

          <div className="border border-gray-200 p-4 rounded-lg mt-6">
            <p className="text-gray-700 leading-relaxed italic text-center">
              Cu informațiile prezentate mai sus, știi cu exactitate care sunt
              avantajele pe care le oferă o poliță Casco Econom.
              www.asigurari.ro îți vine în sprijin cu oferte croite după nevoile
              tale.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
