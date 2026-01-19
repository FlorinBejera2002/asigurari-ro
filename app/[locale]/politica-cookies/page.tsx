import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Utilizare a Cookie-urilor | Asigurari.ro',
  description:
    'Informații despre modul în care folosim cookie-urile pe site-ul Asigurari.ro și cum puteți gestiona preferințele dumneavoastră.'
}

export default function CookiePolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Politica de Utilizare a Cookie-urilor
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 text-base md:text-lg mb-4">
            <strong>Asigurari.ro</strong> folosește cookie-uri pentru
            următoarele scopuri:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 text-sm md:text-base space-y-2">
            <li>
              <strong>Funcționalitate a site-ului web</strong> având scopul de a
              asigura buna funcționare a site-ului
            </li>
            <li>
              <strong>
                Analiză a comportamentului vizitatorilor site-ului web
              </strong>{' '}
              având scopul de a îmbunătăți permanent funcționalitatea site-ului
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base mb-3">
            Această politică de utilizare a cookie-urilor este complementară cu
            politica de protecție a datelor personale, respectiv politica de
            confidențialitate, asigurând respectarea legislației în vigoare cu
            privire la protecția datelor cu caracter personal (GDPR),
            securitatea datelor personale ale clienților noștri fiind un
            obiectiv important pentru Asigurari.ro.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            <strong>Important:</strong> Cookie-urile strict necesare/funcționale
            nu necesită consimțământul Dumneavoastră și sunt esențiale pentru
            funcționarea site-ului. Cookie-urile analitice și de marketing
            necesită consimțământul explicit, pe care îl puteți oferi sau
            retrage oricând.
          </p>
        </div>
      </div>

      <div
        id="ce-sunt"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-cookie-bite text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Ce sunt cookie-urile?
          </h2>
        </div>
        <p className="text-gray-700 mb-4 text-base md:text-lg">
          Cookie-urile sunt fișiere de mici dimensiuni, formate din litere și
          numere, care sunt stocate pe computerul, terminalul mobil sau alte
          echipamente ale unui utilizator când acesta vizitează un website.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Cookie-urile ne ajută să adaptăm conținutul website-ului în funcție de
          preferințele dvs., îmbunătățind astfel calitatea serviciilor noastre.
          Ele permit site-ului să funcționeze corect, să vă recunoască la
          vizitele ulterioare și să vă ofere o experiență personalizată.
        </p>
        <p className="text-gray-600 text-sm">
          Mai multe informații:{' '}
          <Link
            href="https://www.youronlinechoices.eu/"
            target="_blank"
            rel="noopener"
            className="text-blue-600 hover:underline"
          >
            YourOnlineChoices.eu
          </Link>
          {' | '}
          <Link
            href="https://allaboutcookies.org/"
            target="_blank"
            rel="noopener"
            className="text-blue-600 hover:underline"
          >
            AllAboutCookies.org
          </Link>
        </p>
      </div>

      <div
        id="tipuri"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-layer-group text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Tipuri de cookie-uri
          </h2>
        </div>

        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Cookie-urile pot fi de sesiune (se șterg când închideți browserul) sau
          permanente (rămân pe dispozitiv până la expirare sau ștergere
          manuală).
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-bold text-gray-800 mb-1">
              1. Cookie-uri strict necesare
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și
              vă permit să navigați și să utilizați funcțiile de bază, precum
              accesarea zonelor securizate. Fără acestea, site-ul nu poate
              funcționa corect. Nu necesită consimțământ.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-bold text-gray-800 mb-1">
              2. Cookie-uri de performanță (analitice)
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Aceste cookie-uri colectează informații despre modul în care
              vizitatorii utilizează site-ul nostru, cum ar fi paginile cele mai
              vizitate. Toate informațiile sunt agregate și anonime. Ne ajută să
              îmbunătățim performanța site-ului.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-bold text-gray-800 mb-1">
              3. Cookie-uri de marketing (publicitate)
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Aceste cookie-uri sunt utilizate pentru a vă urmări activitatea pe
              diferite site-uri web, pentru a afișa reclame relevante și a
              măsura eficiența campaniilor publicitare. Pot fi setate de
              partenerii noștri de publicitate.
            </p>
          </div>
        </div>
      </div>

      <div
        id="detalii"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-list text-blue-700 text-xl" />
          <h2 className="text-lg md:text-2xl font-bold">
            Cookie-uri utilizate
          </h2>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Cookie-uri necesare
          </h3>
          <div className="overflow-x-auto cookie-table-container">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Nume Cookie
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Furnizor
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Scop
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold w-[100px]">
                    Durată
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-green-50">
                  <td className="p-3 border border-gray-300">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      PHPSESSID
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300">Asigurari.ro</td>
                  <td className="p-3 border border-gray-300">
                    Menține sesiunea utilizatorului pentru generarea ofertelor
                    de asigurare
                  </td>
                  <td className="p-3 border border-gray-300">Sesiune</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border border-gray-300">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      asigurari_cookie_consent
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300">Asigurari.ro</td>
                  <td className="p-3 border border-gray-300">
                    Stochează preferințele utilizatorului privind acceptarea
                    cookie-urilor
                  </td>
                  <td className="p-3 border border-gray-300">1 an</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Cookie-uri de analiză
          </h3>
          <div className="overflow-x-auto cookie-table-container">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Nume Cookie
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Furnizor
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Scop
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Durată
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-yellow-50">
                  <td className="p-3 border border-gray-300">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      _ga
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300">
                    Google Analytics
                  </td>
                  <td className="p-3 border border-gray-300">
                    Distinge utilizatorii unici
                  </td>
                  <td className="p-3 border border-gray-300 text-nowrap">
                    2 ani
                  </td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="p-3 border border-gray-300">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      _gid
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300">
                    Google Analytics
                  </td>
                  <td className="p-3 border border-gray-300">
                    Distinge utilizatorii unici
                  </td>
                  <td className="p-3 border border-gray-300 text-nowrap">
                    24 ore
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            Cookie-uri de marketing
          </h3>
          <div className="overflow-x-auto cookie-table-container">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Nume Cookie
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Furnizor
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold">
                    Scop
                  </th>
                  <th className="p-3 text-left border border-gray-300 font-semibold w-[100px]">
                    Durată
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-purple-50">
                  <td className="p-3 border border-gray-300">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      _fbp
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300">
                    Meta (Facebook)
                  </td>
                  <td className="p-3 border border-gray-300">
                    Urmărește vizitele pe site-uri pentru afișarea de reclame
                    relevante
                  </td>
                  <td className="p-3 border border-gray-300">90 zile</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3 border border-gray-300">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      _gcl_au
                    </code>
                  </td>
                  <td className="p-3 border border-gray-300">Google Ads</td>
                  <td className="p-3 border border-gray-300">
                    Stochează și urmărește conversiile
                  </td>
                  <td className="p-3 border border-gray-300">90 zile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        id="control"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-sliders-h text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Cum puteți controla cookie-urile?
          </h2>
        </div>

        <p className="text-gray-700 mb-4 text-base md:text-lg">
          Puteți controla și șterge cookie-urile după preferințe. Toate
          browserele moderne oferă posibilitatea de a gestiona setările
          cookie-urilor.
        </p>

        <h3 className="text-base md:text-lg font-bold mb-3 text-gray-800">
          Setări browser:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <Link
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <i className="fab fa-chrome text-black text-xl" />
            <div>
              <p className="font-semibold text-gray-800">Google Chrome</p>
              <p className="text-xs text-gray-600">Setări cookie-uri →</p>
            </div>
          </Link>

          <Link
            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <i className="fab fa-firefox text-black text-xl" />
            <div>
              <p className="font-semibold text-gray-800">Mozilla Firefox</p>
              <p className="text-xs text-gray-600">Setări cookie-uri →</p>
            </div>
          </Link>

          <Link
            href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <i className="fab fa-safari text-black text-xl" />
            <div>
              <p className="font-semibold text-gray-800">Safari</p>
              <p className="text-xs text-gray-600">Setări cookie-uri →</p>
            </div>
          </Link>

          <Link
            href="https://support.microsoft.com/ro-ro/microsoft-edge/sterge-cookie-urile-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <i className="fab fa-edge text-black text-xl" />
            <div>
              <p className="font-semibold text-gray-800">Microsoft Edge</p>
              <p className="text-xs text-gray-600">Setări cookie-uri →</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
