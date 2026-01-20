'use client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BannerRCA from '@/components/banners/banner-rca'
import { RCACityConfig, RCACityMetadata } from '@/types/rca'
import InternalLinksRCA from './InternalLinksRCA'

library.add(fas)

interface RCACityPageLayoutProps {
  config: RCACityConfig
  metadata: RCACityMetadata
}

export default function RCACityPageLayout({ config }: RCACityPageLayoutProps) {
  return (
    <>
      <BannerRCA />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            RCA {config.city_name}
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="space-y-8">
            {config.sections.map((section, index) => (
              <section
                key={index}
                className={index > 0 ? 'pt-4 border-t border-gray-200' : ''}
              >
                <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-6">
                  <FontAwesomeIcon
                    // biome-ignore lint/suspicious/noExplicitAny: false positive
                    icon={['fas', section.icon as any]}
                    className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
                  />
                  {section.title}
                </h2>
                <p
                  className="text-gray-700 leading-relaxed text-base border-l-4 border-green-500 pl-4"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>
        </div>
      </div>

      <InternalLinksRCA />
    </>
  )
}
