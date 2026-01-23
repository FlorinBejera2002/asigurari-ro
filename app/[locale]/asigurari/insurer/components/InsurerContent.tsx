'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { InsurerArticle } from '@/data/insurer/articles'

interface InsurerContentProps {
  articles: InsurerArticle[]
}

const ARTICLES_PER_PAGE = 9

const categories = [
  { id: 'toate', label: 'Toate' },
  { id: 'accidents', label: 'Accidente' },
  { id: 'accidents_taxi', label: 'Accidente Taxi' },
  { id: 'accidents_traveler', label: 'Accidente Calatori' },
  { id: 'breakdown', label: 'Asistenta Rutiera' },
  { id: 'casco', label: 'CASCO' },
  { id: 'cmr', label: 'CMR' },
  { id: 'common', label: 'Common' },
  { id: 'health', label: 'Sanatate' },
  { id: 'home', label: 'Locuinta' },
  { id: 'life', label: 'Viata' },
  { id: 'pad', label: 'PAD' },
  { id: 'rca', label: 'RCA' },
  { id: 'rcp', label: 'RCP' },
  { id: 'travel', label: 'Calatorie' }
]

const insurerLogos: Record<string, { src: string; alt: string }> = {
  allianz: {
    src: '/images/asigurari/insurers/allianz/allianz.webp',
    alt: 'Allianz'
  },
  allianzunit: {
    src: '/images/asigurari/insurers/allianzunit/allianzunit.webp',
    alt: 'Allianz Unit'
  },
  anytime: {
    src: '/images/asigurari/insurers/anytime/anytime.webp',
    alt: 'Anytime'
  },
  asirom: {
    src: '/images/asigurari/insurers/asirom/asirom.webp',
    alt: 'Asirom'
  },
  axa: {
    src: '/images/asigurari/insurers/axa/axa.webp',
    alt: 'AXA'
  },
  axeriaiard: {
    src: '/images/asigurari/insurers/axeriaiard/axeriaiard.webp',
    alt: 'Axeria Iard'
  },
  eazyinsure: {
    src: '/images/asigurari/insurers/eazyinsure/eazyinsure.webp',
    alt: 'Eazy Insure'
  },
  euroins: {
    src: '/images/asigurari/insurers/euroins/euroins.webp',
    alt: 'Euroins'
  },
  eurolife: {
    src: '/images/asigurari/insurers/eurolife/eurolife.webp',
    alt: 'Eurolife'
  },
  generali: {
    src: '/images/asigurari/insurers/generali/generali.webp',
    alt: 'Generali'
  },
  grawe: {
    src: '/images/asigurari/insurers/grawe/grawe.webp',
    alt: 'Grawe'
  },
  groupama: {
    src: '/images/asigurari/insurers/groupama/groupama.webp',
    alt: 'Groupama'
  },
  hellasdirect: {
    src: '/images/asigurari/insurers/hellasdirect/hellasdirect_original.webp',
    alt: 'Hellas Direct'
  },
  mondial: {
    src: '/images/asigurari/insurers/mondial/mondial.webp',
    alt: 'Mondial'
  },
  omniasig: {
    src: '/images/asigurari/insurers/omniasig/omniasig.webp',
    alt: 'Omniasig'
  },
  paid: {
    src: '/images/asigurari/insurers/paid/paid.webp',
    alt: 'PAID'
  },
  signaliduna: {
    src: '/images/asigurari/insurers/signaliduna/signaliduna.webp',
    alt: 'Signal Iduna'
  },
  uniqa: {
    src: '/images/asigurari/insurers/uniqa/uniqa.webp',
    alt: 'Uniqa'
  }
}

const slugOverrides: Record<string, string> = {
  'axeria-iard': 'axeriaiard',
  'eazy-insure': 'eazyinsure',
  'hellas-direct': 'hellasdirect'
}

const fallbackLogo = {
  src: '/images/asigurari/logo.svg',
  alt: 'Asigurari'
}

const getInsurerLogo = (slug: string) => {
  const normalizedSlug = slugOverrides[slug] ?? slug.split('-')[0]
  return insurerLogos[normalizedSlug] ?? fallbackLogo
}

export default function InsurerContent({ articles }: InsurerContentProps) {
  const [currentCategory, setCurrentCategory] = useState('toate')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredArticles = useMemo(() => {
    if (currentCategory === 'toate') {
      return articles
    }
    return articles.filter((article) => article.category === currentCategory)
  }, [articles, currentCategory])

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = Math.min(
    startIndex + ARTICLES_PER_PAGE,
    filteredArticles.length
  )
  const articlesToShow = filteredArticles.slice(startIndex, endIndex)

  const handleCategoryChange = (categoryId: string) => {
    setCurrentCategory(categoryId)
    setCurrentPage(1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 md:mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">Categorii</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variant={currentCategory === category.id ? 'default' : 'outline'}
              className={`h-auto p-3 ${
                currentCategory === category.id
                  ? 'bg-blue-700 hover:bg-blue-800 text-white border-blue-700'
                  : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-100'
              }`}
            >
              <span>{category.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">Asiguratori</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {articlesToShow.map((article) => {
            const logo = getInsurerLogo(article.slug)
            return (
              <article
                key={`${article.category}-${article.slug}`}
                className="bg-white rounded-xl shadow-sm overflow-hidden md:hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-4 md:p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <Link
                    href={article.path}
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold md:hover:text-blue-800 transition-colors"
                  >
                    <span>Vezi pagina</span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                variant="outline"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Inapoi
              </Button>
              <div className="px-6 py-2 text-gray-700 font-semibold">
                {currentPage} / {totalPages}
              </div>
              <Button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                variant="outline"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Inainte
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
