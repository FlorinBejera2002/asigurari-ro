import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function ArticleSection() {
  const t = await getTranslations('home')
  const blogArticles = [
    {
      image:
        '/images/asigurari/blog/rca/mainile-unui-barbat-inconjurand-o-macheta-de-autoturism-pe-un-birou.webp',
      title: 'RCA vs CASCO - Ghidul tău către o asigurare auto',
      description:
        'Diferențele esențiale între cele două tipuri de asigurări auto',
      href: '/blog/rca/rca-vs-casco-ghidul-tau-catre-o-asigurare-auto-de-incredere'
    },
    {
      image: '/images/asigurari/blog/casco/mecanic-verificand-masina.webp',
      title: '5 lucruri surprinzătoare despre asigurarea CASCO',
      description:
        'Descoperă beneficiile mai puțin cunoscute ale poliței CASCO',
      href: '/blog/casco/5-lucruri-surprinzatoare-pe-care-nu-le-stiai-despre-asigurarea-casco'
    },
    {
      image: '/images/asigurari/blog/travel/femeie-cu-geamantan.webp',
      title: 'Asigurarea de călătorie - Cum alegi pachetul ideal',
      description:
        'Ghid complet pentru alegerea asigurării potrivite pentru vacanța ta',
      href: '/blog/travel/asigurarea-de-calatorie-cum-alegi-pachetul-ideal-pentru-vacanta-ta'
    },
    {
      image: '/images/asigurari/blog/home/acoperis-la-apus.webp',
      title: 'Asigurarea facultativă - Beneficii pe lângă PAD',
      description: 'Protecție completă pentru casa ta și bunurile din interior',
      href: '/blog/home/asigurarea-facultativa-de-locuinta-ce-beneficii-aduce-pe-langa-asigurarea-obligatorie-pad'
    }
  ]

  return (
    <section className="blog-section pb-8 md:pb-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-bold text-black">{t('blog.title')}</h2>
          <Link
            href="/blog"
            className="hidden md:flex inline-block px-4 py-2 bg-blue-700 text-white text-sm rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            {t('blog.view_all')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blogArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3 overflow-hidden">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="group inline-flex items-center gap-2 text-blue-700 font-semibold md:hover:text-blue-800 transition-colors"
                >
                  <span className="text-sm">{t('blog.read_article')}</span>
                  <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-200"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="md:hidden flex justify-center w-full mt-6">
          <Link
            href="/blog"
            className="px-4 py-2 bg-blue-700 text-white text-sm rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            {t('blog.view_all')}
          </Link>
        </div>
      </div>
    </section>
  )
}
