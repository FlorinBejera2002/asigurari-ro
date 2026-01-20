import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faDollarSign,
  faList,
  faListAlt,
  faSearch,
  faShieldAlt,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TravelCountries from '@/app/[locale]/asigurari/travel/components/TravelCountries'
import BannerTravel from '@/components/banners/banner-travel'
import { TravelCountryConfig } from '@/types/travel'

interface TravelPageLayoutProps {
  config: TravelCountryConfig
  excludeCountry: string
}

const iconMap: Record<string, IconDefinition> = {
  'fa-shield-alt': faShieldAlt,
  'fa-umbrella': faUmbrella,
  'fa-dollar-sign': faDollarSign,
  'fa-search': faSearch,
  'fa-list-alt': faListAlt,
  'fa-list': faList,
  'fa-check-circle': faCheckCircle
}

export default function TravelPageLayout({
  config,
  excludeCountry
}: TravelPageLayoutProps) {
  return (
    <>
      <BannerTravel />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>{config.title || config.country}</strong>
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed">{config.intro_text}</p>
          </div>
        </div>

        {config.sections.length > 0 && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
            <div className="flex items-start gap-3 mb-6">
              <FontAwesomeIcon
                icon={faList}
                className="text-blue-700 text-lg md:text-2xl"
              />
              <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {config.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
                >
                  <FontAwesomeIcon
                    icon={iconMap[section.icon] || faList}
                    className="text-green-500 mt-1"
                  />
                  <span className="font-semibold text-gray-800">
                    <strong>{section.toc_title || section.title}</strong>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {config.sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className={`bg-white rounded-xl p-4 md:p-6 shadow-sm ${
              index < config.sections.length - 1 ? 'mb-8' : ''
            } w-full`}
          >
            <div className="flex items-start gap-3 mb-6">
              <h2 className="text-lg md:text-2xl font-bold">
                <FontAwesomeIcon
                  icon={iconMap[section.icon] || faList}
                  className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
                />
                <strong>{section.title}</strong>
              </h2>
            </div>

            {section.type === 'simple' && (
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            )}

            {section.type === 'with_list' && (
              <>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.list_items && section.list_items.length > 0 && (
                  <ul className="space-y-3 mb-4">
                    {section.list_items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mt-1 text-sm"
                        />
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.content_after && (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content_after}
                  </p>
                )}
              </>
            )}

            {section.type === 'list_only' && (
              <>
                {section.content && (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}
                {section.list_items && section.list_items.length > 0 && (
                  <ul className="space-y-3">
                    {section.list_items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 mt-1 text-sm"
                        />
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.content_after && (
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {section.content_after}
                  </p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <TravelCountries excludeCountry={excludeCountry} />
    </>
  )
}
