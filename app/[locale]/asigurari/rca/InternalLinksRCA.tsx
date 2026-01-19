import { faCar } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

interface Vehicle {
  name: string
  brand: string
  slug: string
}

interface City {
  name: string
  slug: string
}

const brandLogos: Record<string, string> = {
  skoda: '/images/brands/skoda.svg',
  renault: '/images/brands/renault.svg',
  seat: '/images/brands/seat.svg',
  peugeot: '/images/brands/peugeot.svg',
  opel: '/images/brands/opel.svg',
  mercedes: '/images/brands/mercedes.svg',
  dacia: '/images/brands/dacia.svg',
  volkswagen: '/images/brands/volkswagen.svg'
}

const vehicles: Vehicle[] = [
  { name: 'Skoda Octavia', brand: 'skoda', slug: 'skoda-octavia' },
  { name: 'Renault Kangoo', brand: 'renault', slug: 'renault-kangoo' },
  { name: 'Renault Clio', brand: 'renault', slug: 'renault-clio' },
  { name: 'Renault Fluence', brand: 'renault', slug: 'renault-fluence' },
  { name: 'Renault Megane 3', brand: 'renault', slug: 'renault-megane-3' },
  { name: 'Seat Leon', brand: 'seat', slug: 'seat-leon' },
  { name: 'Seat Toledo', brand: 'seat', slug: 'seat-toledo' },
  { name: 'Seat Cordoba', brand: 'seat', slug: 'seat-cordoba' },
  { name: 'Seat Ibiza', brand: 'seat', slug: 'seat-ibiza' },
  { name: 'Seat Altea', brand: 'seat', slug: 'seat-altea' },
  { name: 'Peugeot Partner', brand: 'peugeot', slug: 'peugeot-partner' },
  { name: 'Peugeot 207', brand: 'peugeot', slug: 'peugeot-207' },
  { name: 'Peugeot 307', brand: 'peugeot', slug: 'peugeot-307' },
  { name: 'Peugeot 406', brand: 'peugeot', slug: 'peugeot-406' },
  { name: 'Peugeot 407', brand: 'peugeot', slug: 'peugeot-407' },
  { name: 'Peugeot 206', brand: 'peugeot', slug: 'peugeot-206' },
  { name: 'Peugeot 107', brand: 'peugeot', slug: 'peugeot-107' },
  { name: 'Opel Zafira', brand: 'opel', slug: 'opel-zafira' },
  { name: 'Opel Vectra', brand: 'opel', slug: 'opel-vectra' },
  { name: 'Opel Astra', brand: 'opel', slug: 'opel-astra' },
  { name: 'Opel Corsa', brand: 'opel', slug: 'opel-corsa' },
  {
    name: 'Mercedes Benz E 320',
    brand: 'mercedes',
    slug: 'mercedes-benz-e-320'
  },
  { name: 'Mercedes E220', brand: 'mercedes', slug: 'mercedes-e220' },
  { name: 'Mercedes Vito', brand: 'mercedes', slug: 'mercedes-vito' },
  { name: 'Mercedes C220', brand: 'mercedes', slug: 'mercedes-c220' },
  { name: 'Dacia Logan', brand: 'dacia', slug: 'dacia-logan' },
  { name: 'Dacia Sandero', brand: 'dacia', slug: 'dacia-sandero' },
  { name: 'VW Passat 1.9 TDI', brand: 'volkswagen', slug: 'vw-passat-1-9-tdi' }
]

const cities: City[] = [
  { name: 'Alba Iulia', slug: 'alba-iulia' },
  { name: 'Alexandria', slug: 'alexandria' },
  { name: 'Arad', slug: 'arad' },
  { name: 'Bacău', slug: 'bacau' },
  { name: 'Baia Mare', slug: 'baia-mare' },
  { name: 'Bârlad', slug: 'barlad' },
  { name: 'Bistrița', slug: 'bistrita' },
  { name: 'Botoșani', slug: 'botosani' },
  { name: 'Brăila', slug: 'braila' },
  { name: 'Brașov', slug: 'brasov' },
  { name: 'București', slug: 'bucuresti' },
  { name: 'Buzău', slug: 'buzau' },
  { name: 'Călărași', slug: 'calarasi' },
  { name: 'Câmpina', slug: 'campina' },
  { name: 'Cluj-Napoca', slug: 'cluj-napoca' },
  { name: 'Constanța', slug: 'constanta' },
  { name: 'Craiova', slug: 'craiova' },
  { name: 'Deva', slug: 'deva' },
  { name: 'Drobeta-Turnu Severin', slug: 'drobeta-turnu-severin' },
  { name: 'Focșani', slug: 'focsani' },
  { name: 'Galați', slug: 'galati' },
  { name: 'Giurgiu', slug: 'giurgiu' },
  { name: 'Hunedoara', slug: 'hunedoara' },
  { name: 'Iași', slug: 'iasi' },
  { name: 'Ilfov', slug: 'ilfov' },
  { name: 'Lugoj', slug: 'lugoj' },
  { name: 'Mangalia', slug: 'mangalia' },
  { name: 'Miercurea Ciuc', slug: 'miercurea-ciuc' },
  { name: 'Năvodari', slug: 'navodari' },
  { name: 'Onești', slug: 'onesti' },
  { name: 'Oradea', slug: 'oradea' },
  { name: 'Oravița', slug: 'oravita' },
  { name: 'Otopeni', slug: 'otopeni' },
  { name: 'Piatra Neamț', slug: 'piatra-neamt' },
  { name: 'Pitești', slug: 'pitesti' },
  { name: 'Ploiești', slug: 'ploiesti' },
  { name: 'Râmnicu Vâlcea', slug: 'ramnicu-valcea' },
  { name: 'Reșița', slug: 'resita' },
  { name: 'Roman', slug: 'roman' },
  { name: 'Satu Mare', slug: 'satu-mare' },
  { name: 'Sfântu Gheorghe', slug: 'sfantu-gheorghe' },
  { name: 'Sibiu', slug: 'sibiu' },
  { name: 'Slatina', slug: 'slatina' },
  { name: 'Slobozia', slug: 'slobozia' },
  { name: 'Suceava', slug: 'suceava' },
  { name: 'Târgoviște', slug: 'targoviste' },
  { name: 'Târgu Jiu', slug: 'targu-jiu' },
  { name: 'Târgu Mureș', slug: 'targu-mures' },
  { name: 'Timișoara', slug: 'timisoara' },
  { name: 'Tulcea', slug: 'tulcea' },
  { name: 'Turda', slug: 'turda' },
  { name: 'Vaslui', slug: 'vaslui' },
  { name: 'Victoria', slug: 'victoria' },
  { name: 'Zalău', slug: 'zalau' }
]

export default function InternalLinksRCA() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 md:pb-16">
      <div className="bg-white rounded-xl shadow-sm mb-8">
        <h2 className="flex items-center text-lg md:text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-200 px-4 md:px-6 py-4">
          <i className="fas fa-car-crash text-blue-700 mr-3 text-2xl"></i>
          Asigurare RCA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-4 md:p-6">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.slug}
              href={`/asigurari/rca/${vehicle.slug}`}
              className="flex items-center gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-700 flex items-center justify-center w-6 h-6">
                {brandLogos[vehicle.brand] ? (
                  <Image
                    src={brandLogos[vehicle.brand]}
                    alt={vehicle.brand}
                    width={25}
                    height={25}
                    className="w-full h-full object-contain brightness-0 saturate-100"
                    style={{
                      filter:
                        'invert(22%) sepia(89%) saturate(3283%) hue-rotate(208deg) brightness(93%) contrast(101%)'
                    }}
                  />
                ) : (
                  <FontAwesomeIcon icon={faCar} className="w-6 h-6" />
                )}
              </span>
              <span className="font-bold text-gray-800">{vehicle.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <h2 className="flex items-center text-lg md:text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-200 px-4 md:px-6 py-4">
          <i className="fas fa-car-crash text-blue-700 mr-3 text-2xl"></i>
          Asigurare RCA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-4 md:p-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/asigurari/rca/${city.slug}`}
              className="flex items-center gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-blue-700">{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
