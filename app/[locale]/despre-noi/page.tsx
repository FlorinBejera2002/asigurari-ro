import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('asigurari.page.about_us.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default function AboutUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <h1 className="sr-only">Despre Asigurari.ro - Wilson Insurance Broker</h1>

      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">
          Wilson Insurance Broker SRL
        </h2>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 text-md md:text-lg">
            <strong>
              Asigurari.ro este un site online care emite polițe în numele
              societăților de asigurare prin intermediul Wilson Insurance Broker
              SRL
            </strong>{' '}
            (denumită în continuare WIB), societate înscrisă în Registrul
            Brokerilor sub numărul: RBK - 790/29.09.2017 - autorizată de către
            Autoritatea de Supraveghere Financiară – ASF, prin decizia:
            1367/29.09.2017 și are ca obiect principal de activitate
            intermedierea de asigurări (Cod CAEN 6622).
          </p>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            WIB este societate cu răspundere limitată, înmatriculată la
            Registrul Comerțului sub Număr de Ordine: J35/722/13.03.2017 și
            având Cod Unic de Înregistrare: 37193806 și capital social: 150.000
            lei. Adresa: Strada Coriolan Brediceanu 10, Cladire B, Mezanin,
            Timișoara 300011, România și reprezintă întotdeauna interesul
            clienților.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex items-start gap-3 mb-6">
          <i className="fas fa-list text-blue-700 text-lg md:text-2xl" />
          <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Link
            href="#cine-suntem"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <i className="fas fa-question-circle text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Cine suntem?</strong>
            </span>
          </Link>

          <Link
            href="#ce-facem"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <i className="fas fa-clipboard-list text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Ce facem?</strong>
            </span>
          </Link>

          <Link
            href="#misiunea-noastra"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <i className="fas fa-clock text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Misiunea noastră</strong>
            </span>
          </Link>

          <Link
            href="#valorile-companiei"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <i className="fas fa-map-marker-alt text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Valorile companiei</strong>
            </span>
          </Link>

          <Link
            href="#asiguratorii-parteneri"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <i className="fas fa-folder-open text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Asiguratorii parteneri</strong>
            </span>
          </Link>
        </div>
      </div>

      <div
        id="cine-suntem"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-start gap-3 mb-6">
          <h3 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-question-circle text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Cine suntem?
          </h3>
        </div>
        <p className="text-gray-700 text-md md:text-lg">
          Site-ul Asigurari.ro a fost lansat în anul 2018 în parteneriat cu
          compania Seopa Holdings LTD, o companie care încorporează peste 15 ani
          de experiență realizați în piața asigurărilor din Marea Britanie.
        </p>
      </div>

      <div
        id="ce-facem"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-start gap-3 mb-6">
          <h3 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-clipboard-list text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Ce facem?
          </h3>
        </div>
        <p className="text-gray-700 mb-4 text-md md:text-lg">
          Asigurari.ro oferă servicii de intermediere și consultanță în domeniul
          asigurărilor generale și de viață.
        </p>
        <p className="text-gray-700 text-md md:text-lg">
          Viteza remarcabilă cu care se schimbă societatea noastră, în mod
          special prin fenomenul extinderii digitalizării în aproape toate
          industriile, ne-a determinat să începem această afacere, sesizând
          oportunitatea dezvoltării pieței online în domeniul asigurărilor.
        </p>
      </div>

      <div
        id="misiunea-noastra"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-start gap-3 mb-6">
          <h3 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-clock text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Misiunea noastră
          </h3>
        </div>
        <p className="text-gray-700 mb-4 text-md md:text-lg">
          Dorim să dezvoltăm în special zona comparativă a cotațiilor, oferind
          clienților noștri nu numai o listă de prețuri ale produselor de
          asigurare, ci și toate celelalte informații necesare luării unei
          decizii optime în ceea ce privește produsul de asigurare dorit.
        </p>
        <p className="text-gray-700 text-md md:text-lg">
          Acest fapt ne oferă șansa de a fi cu adevărat consultanți
          profesioniști ai clienților noștri, nefavorizând niciuna dintre
          companiile partenere (asigurători), punând la dispoziția
          beneficiarilor polițelor de asigurare strict criteriile tehnice ale
          produselor și serviciilor oferite de către partenerii asigurători.
        </p>
      </div>

      <div
        id="valorile-companiei"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-start gap-3 mb-6">
          <h3 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-map-marker-alt text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Valorile companiei
          </h3>
        </div>
        <p className="text-gray-700 mb-6 text-md md:text-lg">
          Asigurari.ro se ghidează după un set simplu de valori:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
            <i className="fas fa-bolt text-green-500" />
            <span className="font-semibold text-gray-800">Eficiență</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
            <i className="fas fa-handshake text-green-500" />
            <span className="font-semibold text-gray-800">Onestitate</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
            <i className="fas fa-eye text-green-500" />
            <span className="font-semibold text-gray-800">Transparență</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
            <i className="fas fa-user-friends text-green-500" />
            <span className="font-semibold text-gray-800">Respect</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
            <i className="fas fa-lightbulb text-green-500" />
            <span className="font-semibold text-gray-800">Inovație</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
            <i className="fas fa-sync-alt text-green-500" />
            <span className="font-semibold text-gray-800">Adaptabilitate</span>
          </div>
        </div>
      </div>

      <div
        id="asiguratorii-parteneri"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-start gap-3 mb-6">
          <h3 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-folder-open text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Asiguratorii parteneri
          </h3>
        </div>
        <p className="text-gray-700 mb-6 text-md md:text-lg">
          Site-ul Asigurari.ro are parteneriate cu majoritatea asiguratorilor
          care activează pe piața asigurărilor din România:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 w-full">
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            Allianz
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            Asirom
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            CertAsig
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            EuroIns
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            Groupama
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            Generali
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            Omniasig
          </span>
          <span className="text-gray-800 w-full px-4 py-2 rounded-lg font-semibold border border-gray-200">
            Uniqa
          </span>
        </div>
      </div>
    </div>
  )
}
