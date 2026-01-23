import { insurerArticles } from '@/data/insurer/articles'
import InsurerContent from './components/InsurerContent'

export async function generateMetadata() {
  return {
    title:
      'Asiguratori - Oferte si informatii pentru toate tipurile de asigurari | asigurari.ro',
    description:
      'Descopera paginile asiguratorilor pentru RCA, CASCO, sanatate, viata, calatorie, CMR si multe altele. Filtreaza rapid si gaseste informatiile de care ai nevoie.'
  }
}

export default function InsurerPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:pt-16">
      <div className="flex items-center gap-4 mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          <strong>Asiguratori</strong>
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed mb-4">
            Aici gasesti paginile asiguratorilor pentru toate categoriile de
            asigurari. Foloseste filtrarea pe categorii si paginarea pentru a
            ajunge rapid la informatiile dorite.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fie ca ai nevoie de RCA, CASCO, asigurari de viata, sanatate,
            calatorie sau alte produse, ai toate paginile centralizate intr-un
            singur loc.
          </p>
        </div>
      </div>

      <InsurerContent articles={insurerArticles} />
    </main>
  )
}
