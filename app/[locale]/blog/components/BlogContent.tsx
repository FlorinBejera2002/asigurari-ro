'use client'

import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faFilter,
  faHeart,
  faHeartbeat,
  faHome,
  faNewspaper,
  faPlane,
  faShieldAlt,
  faTh,
  faTruck,
  faUserMd,
  faWrench
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { BlogArticle } from '@/data/blog/articles'

interface BlogContentProps {
  articles: BlogArticle[]
}

const ARTICLES_PER_PAGE = 9

const categories = [
  { id: 'toate', label: 'Toate', icon: faTh },
  { id: 'casco', label: 'CASCO', icon: faShieldAlt },
  { id: 'life', label: 'Viață', icon: faHeart },
  { id: 'health', label: 'Sănătate', icon: faHeartbeat },
  { id: 'travel', label: 'Călătorie', icon: faPlane },
  { id: 'home', label: 'Locuință', icon: faHome },
  { id: 'malpraxis', label: 'Malpraxis', icon: faUserMd },
  { id: 'cmr', label: 'CMR', icon: faTruck },
  { id: 'breakdown', label: 'Asistență rutieră', icon: faWrench }
]

export default function BlogContent({ articles }: BlogContentProps) {
  const [currentCategory, setCurrentCategory] = useState('toate')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredArticles = useMemo(() => {
    if (currentCategory === 'toate') {
      return articles
    }
    return articles.filter((article) => article.system === currentCategory)
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
          <FontAwesomeIcon
            icon={faFilter}
            className="text-blue-700 text-lg md:text-2xl"
          />
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
              <FontAwesomeIcon icon={category.icon} className="w-4 h-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="text-blue-700 text-lg md:text-2xl"
          />
          <h2 className="text-lg md:text-2xl font-bold">Articole</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {articlesToShow.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl shadow-sm overflow-hidden md:hover:shadow-md transition-shadow duration-200"
            >
              {article.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill={true}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.system}/${article.slug}`}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold md:hover:text-blue-800 transition-colors"
                >
                  <span>Citește articolul</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
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
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="hidden md:inline"
                />
                Înapoi
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
                Înainte
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-2 hidden md:inline"
                />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
