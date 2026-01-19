import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Întrebări Frecvente | Asigurari.ro',
  description:
    'Răspunsuri la cele mai frecvente întrebări despre asigurări RCA, CASCO, locuință, călătorie și altele.'
}

export default function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">Întrebări Frecvente</h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8">
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Găsiți răspunsuri la cele mai frecvente întrebări despre asigurările
          noastre.
        </p>
      </div>

      <div className="space-y-4">
        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Ce este asigurarea RCA?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Asigurarea RCA (Răspundere Civilă Auto) este obligatorie pentru
              toți proprietarii de autovehicule din România. Aceasta acoperă
              daunele materiale și corporale cauzate terților în urma unui
              accident de circulație.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Cum pot obține o ofertă de asigurare?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Puteți obține o ofertă completând formularul online de pe site-ul
              nostru. Veți primi mai multe oferte de la diferiți asigurători, pe
              care le puteți compara și alege pe cea mai avantajoasă.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Cât timp durează emiterea poliței?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Polița de asigurare este emisă imediat după finalizarea plății.
              Veți primi polița în format electronic pe adresa de email
              furnizată.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Ce metode de plată acceptați?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Acceptăm plăți cu cardul bancar (Visa, Mastercard), transfer
              bancar și plata în rate pentru anumite tipuri de asigurări.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Pot anula polița de asigurare?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Da, puteți anula polița de asigurare conform condițiilor generale
              ale asiguratorului. În general, dacă polița nu a fost utilizată,
              puteți primi o rambursare proporțională cu perioada nefolosită.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Ce este asigurarea CASCO?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Asigurarea CASCO este o asigurare facultativă care acoperă daunele
              aduse propriului autovehicul în urma unui accident, furt, incendiu
              sau alte evenimente asigurate. Spre deosebire de RCA, CASCO
              protejează mașina ta, nu pe a altora.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-800">
            <span className="flex items-center gap-3">
              <i className="fas fa-question-circle text-green-500" />
              <span>Cum depun o cerere de daună?</span>
            </span>
            <i className="fas fa-chevron-right text-gray-500 transition-transform duration-300 group-open:rotate-90" />
          </summary>
          <div className="mt-4 pl-8 text-gray-700 leading-relaxed">
            <p>
              Pentru a depune o cerere de daună, contactați-ne la adresa
              suport@asigurari.ro sau sunați la +40 314 257 000. Vă vom ghida
              prin întregul proces și vă vom ajuta să obțineți despăgubirea
              cuvenită.
            </p>
          </div>
        </details>
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <i className="fas fa-info-circle text-blue-700 text-2xl flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Nu ați găsit răspunsul?
            </h3>
            <p className="text-blue-800 mb-4">
              Dacă nu ați găsit răspunsul la întrebarea dumneavoastră, nu
              ezitați să ne contactați. Echipa noastră este disponibilă să vă
              ajute.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              <span>Contactează-ne</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
