// import { useTranslations } from 'next-intl'

export default function OurStorySection() {
  // const _t = useTranslations()

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 md:pt-8 md:pb-8">
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 my-8">
        {/* <h3
          style={{
            padding: 0,
            margin: 0,
            fontSize: 0,
            textIndent: '-999999px'
          }}
        >
          {t('ourStory.h3_tag')}
        </h3> */}
        <h3 className="text-xl font-bold text-black mb-6">
          Despre Asigurari.ro
        </h3>
        <div className="space-y-4">
          <p className="text-gray-700 text-base leading-relaxed">
            Site-ul Asigurari.ro își propune să modernizeze piața asigurărilor
            online din România prin oferirea unor soluții tehnologice moderne,
            atât clienților noștri, care vor beneficia de comparatoare online
            cât și partenerilor noștri, asistenți în brokeraj, care vor
            beneficia de instrumente informatice foarte eficiente (incluzând
            site web cu comparator online), astfel încât să se poată ocupa cât
            mai mult de dezvoltarea afacerii proprii.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Avem parteneriate cu asiguratorii de top din România, oferind
            servicii de cea mai bună calitate clienților noștri.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Achiziția polițelor se poate face simplu, rapid și sigur, completând
            formularul online specific produsului de asigurare, comparând
            ofertele și plătind cu cardul bancar. Totul durează câteva minute.
          </p>
        </div>
      </div>
    </div>
  )
}
