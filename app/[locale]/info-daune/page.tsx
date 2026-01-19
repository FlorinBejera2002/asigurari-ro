import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ce am de făcut în caz de daună? | Asigurari.ro',
  description: 'Ghid complet pentru gestionarea daunelor RCA, CASCO și locuință. Aflați pașii necesari pentru deschiderea dosarului de daună.',
};

export default function InfoDaunePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Ce am de făcut în caz de daună?
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-4 md:mb-8">
        <ul className="space-y-4 border-l-4 border-green-500 pl-4">
          <li className="flex items-start gap-3">
            <span className="text-gray-700">
              Contactez
              {' '}
              <strong>Asigurari.ro</strong>
              {' '}
              trimițând e-mail la adresa
              {' '}
              <strong className="text-red-600">suport@asigurari.ro</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-700">
              Mergi la cel mai apropiat centru de constatări al asiguratorului pentru deschiderea dosarului de daună
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-700">Deplasarea la service pentru reparația autovehiculului</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-car-crash text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Daună RCA
          </h2>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">
              Dacă nu sunt vătămari corporale, mai mult de două autovehicule implicate în eveniment sau pagube la alte bunuri, decât la cele două autovehicule implicate, se completează constatul amiabil de accident de către ambii conducători auto implicați, în caz contrar se apelează număr de telefon unic de urgență
              {' '}
              <strong className="text-red-600">112</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">
              Deschiderea dosarului ON-Line sau prin CALL Center la asiguratorul vinovatului de eveniment
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">Programarea pentru constatare</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">
              Constatarea avariilor conform programării la data și în locul stabilit împreună cu cel care face evaluarea pagubele
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">Deplasarea la service cu documentul de intrare în reparative</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">Reparația</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-green-600 text-xs flex-shrink-0 mt-1" />
            <span className="text-gray-700">Închiderea dosarului</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-home text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Daună Locuință
          </h2>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-xs text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">
              Contactez
              {' '}
              <strong>Asigurari.ro</strong>
              {' '}
              trimițând e-mail la adresa
              {' '}
              <strong className="text-red-600">suport@asigurari.ro</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-xs text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">
              Deschiderea dosarului ON-Line sau prin CALL Center la asiguratorul poliței de locuință
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-xs text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Programarea pentru constatare</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-xs text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Constatarea daunelor și întocmirea dosarului de daună</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-xs text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Închiderea dosarului</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-circle text-xs text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Plata despăgubirii</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <i className="fas fa-shield-alt text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2" />
            Daună Casco
          </h2>
        </div>

        <p className="text-gray-700 mb-6 font-semibold">
          La deschiderea dosarului de daună se solicită următoarele documente:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <i className="fas fa-id-card text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              permisul de conducere al persoanei care a condus autovehiculul la data daunei
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-user text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              cartea/buletinul de identitate al persoanei care a condus autovehiculul la data daunei
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-user-friends text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              cartea/buletinul de identitate al proprietarului autovehiculului (dacă acesta este diferit de șofer, și este persoană fizică)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-car text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">certificatul de înmatriculare al vehiculului și polița CASCO</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-file-alt text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              autorizația de reparație în original în cazul avariilor cu autor necunoscut, procesul-verbal de constatare a pagubei eliberat de organele de poliție în cazul furturilor parțiale, constatare amiabilă de accident, de la caz la caz actele în original și cheia/cheile în caz de furt al autovehiculului
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-shield-virus text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              copie asigurare RCA (sau după caz Cartea Verde în cazul în care autovehiculul celălalt este înmatriculat în străinătate) a mașinii conduse de șoferul vinovat de producerea accidentului
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-id-badge text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              copie după permisul de conducere al șoferului vinovat, respectiv cartea de identitate și certificatul de înmatriculare a mașinii răspunzătoare de eveniment, dacă aceasta nu are asigurare RCA validă la data producerii accidentului
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-building text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              în cazul autovehiculelor aparținând persoanelor juridice, inclusiv societăți de leasing, este necesar o împuternicire din partea deținătoarei autovehiculului
            </span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-file-invoice-dollar text-green-500 w-5 flex-shrink-0 leading-none pt-[5px]" />
            <span className="text-gray-700">
              documentele fiscale (în original) care dovedesc reparația autovehiculului, precum facturi, chitanțe, deviz de reparații, cele de tractare a autovehicului, etc…, asta dacă reparația nu s-a făcut în regim de decontare directă cu service-ul partener
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-xl p-4 md:p-6 shadow-sm bg-red-50">
        <div className="flex items-start flex-col border-l-4 border-red-800 pl-4">
          <h3 className="text-xl font-bold text-red-800 mb-3">Important!</h3>
          <p className="text-red-800 leading-relaxed">
            În caz de furt se vor alerta autoritățile în termen de maxim 24 h de la momentul constatării evenimentului, și în maxim 48 h societatea de asigurare, emitentă a contractului de asigurare.
          </p>
        </div>
      </div>
    </div>
  );
}
