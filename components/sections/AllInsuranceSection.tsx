import {
  faAddressBook,
  faBuilding,
  faCertificate,
  faDna,
  faGavel,
  faHardHat,
  faIndustry,
  faMountain,
  faSeedling,
  faShip,
  faShippingFast,
  faSolarPanel,
  faSuitcase,
  faTools,
  faTruckMoving,
  faUserShield,
  faUserTie
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function AllInsuranceSection() {
  return (
    <div className="bg-gray-50">
      <section className="products-section max-w-7xl pb-8 mx-auto px-4 md:px-8 md:pb-16">
        <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
          <h2 className="text-xl font-semibold text-black mb-10 text-left">
            Pentru produsele de asigurare listate mai jos, ne puteți contacta:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-6 w-full">
            <div className="flex flex-col gap-3 w-full">
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  societăților comerciale
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faTools}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  utilajelor și echipamentelor mobile
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faSuitcase}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">caselor de expediții</span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  de răspundere civilă a managerilor
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faTruckMoving}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  de răspundere a operatorilor de transport rutier
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faHardHat}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  utilajelor de construcții
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">de garanții</span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faShip}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">feroviară și navală</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full mt-2">
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faIndustry}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  întreprinderi mici și mijlocii (IMM)
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faSolarPanel}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  centralelor fotovoltaice și eoliene
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faGavel}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">de răspundere civilă</span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  de răspundere civilă profesională
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faShippingFast}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  răspunderea transportatorului pentru marfa transportată
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faMountain}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  lucrărilor de construcții montaj
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faSeedling}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  culturilor agricole și a animalelor
                </span>
              </div>
              <div className="flex md:items-center gap-3">
                <FontAwesomeIcon
                  icon={faDna}
                  className="mt-1 md:mt-0 text-green-500 text-base w-5"
                />
                <span className="text-black text-lg">
                  transplant cu celule stem
                </span>
              </div>
            </div>
          </div>
          <div className="email-button-container flex justify-center">
            <Link
              href="{{ path('root',{'pageName':'contact'}) }}"
              className="btn-email bg-blue-700 text-white py-3 px-6 rounded-md text-base font-semibold flex items-center gap-2 md:hover:bg-blue-700 md:hover:-translate-y-0.5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faAddressBook} className="text-base" />
              Contactați-ne
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
