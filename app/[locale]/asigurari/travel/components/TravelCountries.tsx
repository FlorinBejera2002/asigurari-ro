'use client'

import { faPlane } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import ReactCountryFlag from 'react-country-flag'

interface Country {
  name: string
  code: string
  slug: string
}

const countries: Country[] = [
  { name: 'Albania', code: 'AL', slug: 'albania' },
  { name: 'Austria', code: 'AT', slug: 'austria' },
  { name: 'Bulgaria', code: 'BG', slug: 'bulgaria' },
  { name: 'Cehia', code: 'CZ', slug: 'cehia' },
  { name: 'Cipru', code: 'CY', slug: 'cipru' },
  { name: 'Croatia', code: 'HR', slug: 'croatia' },
  { name: 'Cuba', code: 'CU', slug: 'cuba' },
  { name: 'Danemarca', code: 'DK', slug: 'danemarca' },
  { name: 'Dubai', code: 'AE', slug: 'dubai' },
  { name: 'Egipt', code: 'EG', slug: 'egipt' },
  { name: 'Elvetia', code: 'CH', slug: 'elvetia' },
  { name: 'Franta', code: 'FR', slug: 'franta' },
  { name: 'Germania', code: 'DE', slug: 'germania' },
  { name: 'Grecia', code: 'GR', slug: 'grecia' },
  { name: 'Groenlanda', code: 'GL', slug: 'groenlanda' },
  { name: 'Iordania', code: 'JO', slug: 'iordania' },
  { name: 'Irlanda', code: 'IE', slug: 'irlanda' },
  { name: 'Israel', code: 'IL', slug: 'israel' },
  { name: 'Italia', code: 'IT', slug: 'italia' },
  { name: 'Macedonia', code: 'MK', slug: 'macedonia' },
  { name: 'Maldive', code: 'MV', slug: 'maldive' },
  { name: 'Malta', code: 'MT', slug: 'malta' },
  { name: 'Marea Britanie', code: 'GB', slug: 'marea_britanie' },
  { name: 'Maroc', code: 'MA', slug: 'maroc' },
  { name: 'Mauritius', code: 'MU', slug: 'mauritius' },
  { name: 'Mexic', code: 'MX', slug: 'mexic' },
  { name: 'Olanda', code: 'NL', slug: 'olanda' },
  { name: 'Polonia', code: 'PL', slug: 'polonia' },
  { name: 'Portugalia', code: 'PT', slug: 'portugalia' },
  { name: 'Republica Dominicana', code: 'DO', slug: 'republica_dominicana' },
  { name: 'Republica Moldova', code: 'MD', slug: 'republica_moldova' },
  { name: 'Serbia', code: 'RS', slug: 'serbia' },
  { name: 'Slovacia', code: 'SK', slug: 'slovacia' },
  { name: 'Spania', code: 'ES', slug: 'spania' },
  { name: 'Statele Unite', code: 'US', slug: 'statele_unite' },
  { name: 'Suedia', code: 'SE', slug: 'suedia' },
  { name: 'Thailanda', code: 'TH', slug: 'thailanda' },
  { name: 'Tunisia', code: 'TN', slug: 'tunisia' },
  { name: 'Turcia', code: 'TR', slug: 'turcia' },
  { name: 'Ucraina', code: 'UA', slug: 'ucraina' },
  { name: 'Ungaria', code: 'HU', slug: 'ungaria' },
  { name: 'Zanzibar', code: 'TZ', slug: 'zanzibar' }
]

interface TravelCountriesProps {
  excludeCountry?: string
}

export default function TravelCountries({
  excludeCountry
}: TravelCountriesProps) {
  const _t = useTranslations()

  const filteredCountries = excludeCountry
    ? countries.filter((country) => country.slug !== excludeCountry)
    : countries

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 md:pb-16">
      <div className="bg-white rounded-xl shadow-sm">
        <h2 className="flex items-center text-lg md:text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-200 px-4 md:px-6 py-4">
          <FontAwesomeIcon icon={faPlane} className="text-blue-700 mr-3" />
          Asigurare Călătorie
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-4 md:p-6">
          {filteredCountries.map((country) => (
            <Link
              key={country.slug}
              href={`/asigurari/travel/country/${country.slug}`}
              className="flex items-center gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-700 flex-shrink-0">
                <ReactCountryFlag
                  countryCode={country.code}
                  svg={true}
                  style={{
                    width: '30px',
                    height: '20px',
                    borderRadius: '5px'
                  }}
                  title={country.code}
                />
              </span>
              <span className="font-semibold text-gray-800">
                {country.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
