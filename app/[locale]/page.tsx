import { faArrowUp } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import InsurerLogos from '@/components/insurance/InsurerLogos'
import AllInsuranceSection from '@/components/sections/AllInsuranceSection'
import ArticleSection from '@/components/sections/ArticleSection'
import HeroSection from '@/components/sections/HeroSection'
import OurStorySection from '@/components/sections/OurStorySection'
import OurSystemSection from '@/components/sections/OurSystemSection'
import ProductsSection from '@/components/sections/ProductsSection'

export default async function HomePage() {
  const t = await getTranslations('home')

  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <AllInsuranceSection />
      <OurSystemSection />
      <OurStorySection />

      {/* <h2 className="sr-only">{t('meta.h2')}</h2>
      <h3 className="sr-only">{t('meta.h3')}</h3> */}

      <ArticleSection />

      <div className="flex justify-center mx-auto">
        <Link
          href="#asigurari"
          className="!no-underline shadow-md group inline-flex items-center gap-2 px-8 py-3 text-gray-800 rounded-md text-base bg-white font-semibold hover:!bg-gray-50 hover:!text-gray-700 focus:!outline-none focus:!ring-0 focus:!shadow-none transition-all duration-200"
        >
          {t('hero.cta_all')}
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-sm transition-transform duration-200 group-hover:-translate-y-1"
          />
        </Link>
      </div>

      <InsurerLogos />
    </main>
  )
}
