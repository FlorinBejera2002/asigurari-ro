'use client'

import {
  faCar,
  faChevronCircleRight,
  faCog,
  faHandPointRight,
  faList,
  faRoad,
  faShoppingCart
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BannerRCA from '@/components/banners/banner-rca'
import { RCAVehicleConfig } from '@/types/rca'
import InternalLinksRCA from './InternalLinksRCA'

// biome-ignore lint/suspicious/noExplicitAny: false positive
const iconMap: Record<string, any> = {
  road: faRoad,
  'chevron-circle-right': faChevronCircleRight,
  'shopping-cart': faShoppingCart,
  car: faCar,
  list: faList,
  cog: faCog
}

export default function RCAVehiclePageLayout({
  config
}: {
  config: RCAVehicleConfig
}) {
  return (
    <>
      <BannerRCA />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:pt-16">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            {config.vehicle_name}
          </h1>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              {config.intro_content}
            </p>
          </div>

          <p className="text-gray-700 font-semibold mb-4">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            <span dangerouslySetInnerHTML={{ __html: config.cta_text }} />
          </p>

          <div className="flex flex-col md:flex-row md:justify-start items-stretch gap-4 md:gap-6 w-full max-w-2xl">
            {config.buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full md:w-auto text-center ${button.class} px-6 py-3 rounded-lg text-base md:text-lg font-semibold md:${button.hover_class} focus:ring-2 ${button.focus_class} transition-all duration-200 shadow-md`}
              >
                {button.text}
                <FontAwesomeIcon
                  icon={iconMap[button.icon] || faCar}
                  className="ml-2"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-6">
            <FontAwesomeIcon
              icon={faList}
              className="text-blue-700 text-lg md:text-2xl"
            />
            <h2 className="text-lg md:text-2xl font-bold">
              {config.toc_title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {config.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
              >
                <FontAwesomeIcon
                  icon={iconMap[section.icon] || faCar}
                  className="text-green-500 mt-1"
                />
                <span className="font-semibold text-gray-800">
                  <strong>{section.title}</strong>
                </span>
              </a>
            ))}
          </div>
        </div>

        {config.sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8"
          >
            <div className="flex items-start gap-3 mb-6">
              <FontAwesomeIcon
                icon={iconMap[section.icon] || faCar}
                className="text-blue-700 text-2xl"
              />
              <h2 className="text-lg md:text-2xl font-bold">{section.title}</h2>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                {section.content}
              </p>
            </div>
          </div>
        ))}

        {config.specifications && config.specifications.length > 0 && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
            <div className="flex items-start gap-3 mb-6">
              <FontAwesomeIcon
                icon={faCog}
                className="text-blue-700 text-2xl"
              />
              <h2 className="text-lg md:text-2xl font-bold">
                {config.spec_title}
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    {config.table_headers.map((header, index) => (
                      <th
                        key={index}
                        className={`border border-gray-300 px-4 py-2 ${header.align} font-semibold`}
                      >
                        {header.text}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-start font-medium">
                        {spec.model}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {spec.version}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {spec.cc}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {spec.kw}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {spec.cp}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {spec.fuel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {config.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4"
                >
                  <h3 className="font-bold text-lg mb-3">{spec.model}</h3>
                  <div className="space-y-2">
                    {config.mobile_labels.map((label, labelIndex) => {
                      const key = label.toLowerCase().replace(/ /g, '_')
                      let value = ''
                      if (key === 'versiune') value = spec.version
                      else if (key === 'cc') value = spec.cc
                      else if (key === 'kw') value = spec.kw
                      else if (key === 'cp') value = spec.cp
                      else if (key === 'combustibil') value = spec.fuel

                      return (
                        <div key={labelIndex} className="flex justify-between">
                          <span className="font-medium">{label}:</span>
                          <span>{value}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
          <p className="text-gray-700 font-semibold">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-green-500 mr-2"
            />
            <span
              dangerouslySetInnerHTML={{ __html: config.purchase_cta_text }}
            />
          </p>
        </div>
      </div>

      <InternalLinksRCA />
    </>
  )
}
