import type { Metadata } from 'next'
import SuggestionsForm from '@/components/forms/SuggestionsForm'

export const metadata: Metadata = {
  title: 'Petiții, Sugestii și Reclamații | Asigurari.ro',
  description:
    'Trimiteți-ne petițiile, sugestiile sau reclamațiile dumneavoastră. Suntem aici pentru a vă asculta și îmbunătăți serviciile.'
}

export default function SuggestionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-3xl mx-auto overflow-hidden p-4 md:p-6">
          <div className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <i
                className="fas fa-comments text-blue-700 text-3xl"
                aria-hidden="true"
              />
              <h2 className="text-xl font-bold text-gray-800">
                Petiții, Sugestii și Reclamații
              </h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Vă mulțumim pentru interesul acordat serviciilor noastre. Dacă
              aveți o petiție, sugestie sau reclamație, vă rugăm să completați
              formularul de mai jos. De asemenea, puteți depune petiții direct
              la{' '}
              <b>
                <Link
                  href="https://asfromania.ro/consumatori/protectia-consumatorului/petitii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 md:hover:text-blue-800 underline transition-colors duration-200"
                >
                  Autoritatea de Supraveghere Financiară (ASF)
                </Link>
              </b>{' '}
              sau la{' '}
              <b>
                <Link
                  href="https://salfin.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 md:hover:text-blue-800 underline transition-colors duration-200"
                >
                  Serviciul Alternativ de Soluționare a Litigiilor în domeniul
                  Financiar (SAL-FIN)
                </Link>
              </b>
              .
            </p>
          </div>

          <div className="py-4">
            <SuggestionsForm />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 flex flex-col w-full">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-question-circle text-blue-700 text-3xl" />
              <h3 className="text-xl font-semibold text-gray-900">
                Întrebări frecvente
              </h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-start gap-3 mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Cât timp durează procesarea unei reclamații?
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  De obicei, reclamațiile sunt procesate în termen de 5-10 zile
                  lucrătoare.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-start gap-3 mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Cum pot urmări statusul cererii mele?
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Veți primi un email de confirmare cu un număr de referință
                  pentru urmărire.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-start gap-3 mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Ce informații trebuie să includ?
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Includeți cât mai multe detalii despre problema întâmpinată
                  pentru o rezolvare rapidă.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-lightbulb text-blue-700 text-3xl" />
              <h3 className="text-xl font-semibold text-gray-900">
                Sfaturi utile
              </h3>
            </div>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-pen text-green-500 text-lg mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Descrieți problema cât mai detaliat posibil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-file-lines text-green-500 text-lg mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Includeți numărul poliței dacă este relevant
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-green-500 text-lg mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Verificați că datele de contact sunt corecte
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
