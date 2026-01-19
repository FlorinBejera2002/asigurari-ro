import {
  faCheck,
  faEdit,
  faFileContract,
  faHandPointRight,
  faList,
  faQuestionCircle,
  faShieldAlt,
  faTimes,
  faTruck,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Metadata } from 'next'
import Link from 'next/link'
import BannerCMR from '@/components/banners/banner-cmr'

export const metadata: Metadata = {
  title: 'Asigurare CMR - Transport Internațional de Mărfuri | Asigurari.ro',
  description:
    'Asigurare CMR pentru transport internațional de mărfuri. Protecție completă conform Convenției CMR.'
}

export default function CMRLandingPage() {
  return (
    <>
      <BannerCMR />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>
              Asigurarea CMR: asigurarea de Răspundere a Transportatorului în
              Calitate de Cărăuș
            </strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Asigurarea CMR vine în ajutorul antreprenorilor care planifică
              transporturi de marfă. Deși unele persoane se întreabă dacă CMR
              este obligatorie, de fapt, ea este facultativă însă recomandată
              mai ales pentru protecția financiară a mărfurilor transportate și
              a afacerii.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Investind în acest tip de asigurare facultativă, vei crește
              șansele de reușită a afacerii deoarece o asigurare CMR poate face
              diferența în competiția cu alți transportatori. În continuare poți
              afla ce este asigurarea CMR, ce se asigură și ce nu, ce riscuri
              sunt acoperite, care este suma maximă asigurată, cât costă o
              asigurare CMR, precum și alte informații utile dacă afacerea ta
              implică transportul de mărfuri.
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
              href="#ce-inseamna-asigurarea-cmr"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Ce înseamnă asigurarea CMR</strong>
              </span>
            </Link>

            <Link
              href="#ce-daune-acopera-asigurarea-cmr"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Ce daune acoperă o asigurare CMR</strong>
              </span>
            </Link>

            <Link
              href="#cum-poti-incheia-o-polita-cmr"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon icon={faEdit} className="text-green-500" />
              <span className="font-semibold text-gray-800">
                <strong>Cum poți încheia o poliță CMR</strong>
              </span>
            </Link>

            <Link
              href="#din-ce-este-formata-polita-cmr"
              className="flex items-center gap-2 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
            >
              <FontAwesomeIcon
                icon={faFileContract}
                className="text-green-500"
              />
              <span className="font-semibold text-gray-800">
                <strong>Din ce este formată o poliță de asigurare CMR</strong>
              </span>
            </Link>
          </div>
        </div>

        <div
          id="ce-inseamna-asigurarea-cmr"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce înseamnă asigurarea CMR</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Dacă vrei să îți deschizi un business care are drept obiect de
              activitate transportul de marfă, probabil că ești interesat și de
              asigurare CMR definiție.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea CMR este o asigurare de răspundere a transportatorului
              pentru marfa transportată. Acest tip de poliță se încheie mai ales
              cu acele companii care au obiect de activitate transportul de
              marfă în țară și/sau în străinătate.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Să spunem că ai câteva mașini și transporți diverse mărfuri cu
              ele. Din diverse motive, la un moment dat, această marfă se
              deteriorează. Cauzele pot fi diferite; de exemplu, un accident de
              mașină, răsturnarea vehiculului, furtul etc. Având în vedere că
              marfa s-a deteriorat în timp ce se afla în mașina ta, poți fi
              făcut responsabil.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Mergem și mai departe și spunem că mărfurile transportare au o
              valoare mare. În unele cazuri, deteriorarea mărfii poate duce
              chiar la închiderea afacerii, mai ales pentru antreprenorii aflați
              la început de drum și care poate nu își permit să plătească
              despăgubirile.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Conform legii, proprietarul mărfii are dreptul de a-ți cere
              despăgubiri. Pentru a evita să plătești aceste cheltuieli, poți
              opta să închei o asigurare CMR pentru transportul mărfii. În cazul
              apariției unui incident, firma de asigurare preia riscurile
              asociate deteriorării mărfurilor. Acest lucru se întâmplă în cazul
              în care nu apar alte probleme sau există limitări ce țin de
              asigurarea CMR (vezi mai jos).
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              <strong>Cadru legal</strong>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Asigurarea CMR sau asigurarea de răspundere a transportatorului
                în calitate de cărăuș se bazează pe prevederile Convenției de la
                Geneva din 19 mai 1956 referitoare la contractul de transport
                internaţional de mărfuri pe şosele la care România a aderat în
                anul 1972 prin decretul nr. 451/1972.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Potrivit acestui document se acoperă culpa transportatorului ca
                urmare a pierderii parțiale sau totale a mărfurilor sau
                avarierii mărfurilor. De asemenea, sunt acoperite taxele de
                transport, taxele vamale, alte cheltuieli apărute ca urmare a
                transportului mărfurilor și prejudicii cauzate de întârziere în
                eliberare.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed italic">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            <strong>
              Dorești să preîntâmpini cheltuielile aferente unui accident auto?
              Poți încheia o{' '}
              <Link
                href="https://www.asigurari.ro/asigurare/breakdown"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurare de asistență rutieră
              </Link>
              . Aceasta acoperă accidentele din trafic, actele de vandalism,
              tractarea mașinii avariate și multe altele.
            </strong>
          </p>
        </div>

        <div
          id="ce-daune-acopera-asigurarea-cmr"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Ce daune acoperă o asigurare CMR</strong>
            </h2>
          </div>

          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Asigurarea CMR standard asigură majoritatea mărfurilor
              transportate cu vehicule, cu excepția unora care necesită condiții
              speciale. În general, include marfa transportată cu vehicule
              înmatriculate în România (însă nu întotdeauna), pe șoselele țării
              și care sunt transportate pe baza unui contract de transport.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              În general, se acoperă pierderea parțială sau totală a mărfurilor
              care au loc pe durata transportului. Asigurarea CMR poate fi
              valabilă, dacă se verifică asiguratorul și dacă locul de încărcare
              sau cel de descărcare este o țară semnatară a Convenției de la
              Geneva (documentul a fost semnat de peste 40 de țări din Europa).
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed italic mb-4">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            <strong>
              Vrei să închei o{' '}
              <Link
                href="{{ path('app_broker_handle_quote_forms',{'system':'cmr', 'pageName':'insured'}) }}"
                target="_blank"
                className="text-blue-700 md:hover:underline font-bold"
                rel="noopener"
              >
                asigurare CMR
              </Link>{' '}
              de răspundere a transportului? În doar câteva minute poți afla ce
              asigurări CMR se potrivesc nevoilor tale!
            </strong>
          </p>

          <div className="space-y-6 border-t border-gray-200 pt-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                <strong>Ce tipuri de mărfuri sunt asigurate</strong>
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Uneori, există clauze speciale pentru transportul unor mărfuri
                  perisabile, caz în care este necesară dotarea cu instalații
                  frigorifice. De asemenea, sunt necesare precauții în cazul
                  unor produse electronice, mărfuri periculoase etc.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Cu excepția mărfurilor uzuale (orice de la șuruburi la mobilă,
                  cărți etc.), dacă alegi să transporți mărfuri ce necesită
                  condiții speciale de transport trebuie să existe clauze
                  speciale în contractul pentru asigurarea CMR. Doar așa vei
                  putea primi despăgubirile în cazul unui eveniment nefericit.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                <strong>Ce daune nu acoperă asigurarea CMR</strong>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Există și câteva tipuri de mărfuri care nu se asigură. Acestea
                includ:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Transporturile efectuate pe baza convențiilor poștale
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Transporturile funerare
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Transporturile de mărfuri efectuate cu alte vehicule decât
                    cele menționate în contractul pentru asigurarea CMR
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Absența ambalajului sau o ambalare
                    incorectă/insuficientă/necorespunzătoare a mărfii de către
                    expeditor
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Fixarea/ancorarea, manipularea sau încărcarea/descărcarea
                    mărfii în autovehicul
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Daune provocate de către anumite mărfuri altor mărfuri din
                    vehicul
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Daune provocate intenționat de asigurat sau angajați ai
                    acestuia
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Lipsa certificatului de înmatriculare valabil în momentul
                    apariției incidentului
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="cum-poti-incheia-o-polita-cmr"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Cum poți încheia o poliță CMR</strong>
            </h2>
          </div>

          <div className="space-y-4 border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Pentru a face lua cea mai bună decizie pentru afacerea ta este
              important să te asiguri că firma de asigurări este autorizată ASF
              (Autoritatea de Supraveghere Financiară), intrând pe lista de
              asiguratori de pe site-ul autorității.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Întregul proces decurge fără probleme dacă soliciți ajutorul
              www.asigurari.ro care te va ajuta să descoperi cele mai bune
              oferte de asigurări CMR de pe piață. Tot aici vei descoperi care
              sunt drepturile și obligațiile fiecărei oferte, la final putând
              obține polița potrivit opțiunilor bifate de tine.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Încheierea unei polițe CMR online vine cu mai multe avantaje: vezi
              ofertele disponibile la un click distanță, primești consultanță
              gratuită și poți afla tariful aferent asigurării rapid. De
              asemenea, polița este livrată imediat, pe email iar plata se poate
              realiza prin transfer bancar sau online, fără costuri
              suplimentare.
            </p>
          </div>
        </div>

        <div
          id="din-ce-este-formata-polita-cmr"
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
        >
          <div className="flex items-start gap-2 mb-6">
            <h2 className="text-lg md:text-2xl font-bold">
              <FontAwesomeIcon
                icon={faFileContract}
                className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
              />
              <strong>Din ce este formată o poliță de asigurare CMR</strong>
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            După alegerea unei oferte, firma de asigurări emite polița CMR.
            Pentru a fi valid, contractul de asigurare CMR trebuie să conțină:
          </p>

          <div className="border border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-xl">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Riscurile asigurare
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Excluderile
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Informații despre teritorialitate
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Perioda de valabilitate
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Date referitoare la plata primei
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Condiții pentru încetarea asigurări
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Limita răspunderii
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Obligațiile asiguratorului
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Obligațiile asiguratului
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Informații privind constatarea și evaluarea daunelor precum și
                  plata despăgubirilor
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 mt-1 text-sm"
                />
                <span className="text-gray-700 leading-relaxed">
                  Alte informații care țin de fiecare asigurator în parte
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
