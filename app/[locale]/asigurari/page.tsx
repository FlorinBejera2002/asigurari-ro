import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asigurări Online - Compară și Cumpără Asigurări | Asigurari.ro',
  description: 'Platformă online pentru compararea și achiziționarea asigurărilor: RCA, CASCO, călătorie, locuință, sănătate și multe altele.',
};

export default function AsigurariPage() {
  const insuranceTypes = [
    {
      slug: 'rca',
      title: 'Asigurare RCA',
      description: 'Asigurare obligatorie de răspundere civilă auto',
      icon: 'fa-car',
      color: 'blue',
    },
    {
      slug: 'casco',
      title: 'Asigurare CASCO',
      description: 'Protecție completă pentru vehiculul tău',
      icon: 'fa-shield-alt',
      color: 'green',
    },
    {
      slug: 'travel',
      title: 'Asigurare Călătorie',
      description: 'Protecție medicală în străinătate',
      icon: 'fa-plane',
      color: 'purple',
    },
    {
      slug: 'home',
      title: 'Asigurare Locuință',
      description: 'Protejează-ți casa și bunurile',
      icon: 'fa-home',
      color: 'orange',
    },
    {
      slug: 'pad',
      title: 'Asigurare PAD',
      description: 'Protecție pentru accidente de circulație',
      icon: 'fa-user-shield',
      color: 'red',
    },
    {
      slug: 'health',
      title: 'Asigurare Sănătate',
      description: 'Acces rapid la servicii medicale private',
      icon: 'fa-heartbeat',
      color: 'pink',
    },
    {
      slug: 'life',
      title: 'Asigurare de Viață',
      description: 'Securitate financiară pentru familia ta',
      icon: 'fa-heart',
      color: 'indigo',
    },
    {
      slug: 'accidents',
      title: 'Asigurare Accidente',
      description: 'Protecție în caz de accidente personale',
      icon: 'fa-ambulance',
      color: 'yellow',
    },
    {
      slug: 'breakdown',
      title: 'Asigurare Asistență Rutieră',
      description: 'Ajutor rapid în caz de pană',
      icon: 'fa-tools',
      color: 'gray',
    },
    {
      slug: 'cmr',
      title: 'Asigurare CMR',
      description: 'Asigurare transport mărfuri',
      icon: 'fa-truck',
      color: 'teal',
    },
    {
      slug: 'rcp',
      title: 'Asigurare RCP',
      description: 'Răspundere civilă profesională',
      icon: 'fa-briefcase',
      color: 'cyan',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Asigurări Online
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Compară oferte de la cei mai importanți asigurători din România și alege cea mai bună asigurare pentru tine
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insuranceTypes.map((insurance) => (
          <Link
            key={insurance.slug}
            href={`/asigurari/${insurance.slug}`}
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${insurance.color}-100 flex items-center justify-center`}>
                <i className={`fas ${insurance.icon} text-${insurance.color}-600 text-xl`} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {insurance.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {insurance.description}
                </p>
              </div>
              <i className="fas fa-arrow-right text-gray-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          De ce să alegi Asigurari.ro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <i className="fas fa-search text-blue-700 text-4xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Compară Oferte</h3>
            <p className="text-gray-600">
              Primești oferte de la toți asigurătorii într-un singur loc
            </p>
          </div>
          <div>
            <i className="fas fa-bolt text-blue-700 text-4xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Rapid și Simplu</h3>
            <p className="text-gray-600">
              Completezi un singur formular și primești oferte în câteva minute
            </p>
          </div>
          <div>
            <i className="fas fa-shield-alt text-blue-700 text-4xl mb-4" />
            <h3 className="font-bold text-lg mb-2">Sigur și Securizat</h3>
            <p className="text-gray-600">
              Datele tale sunt protejate și tranzacțiile sunt securizate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
