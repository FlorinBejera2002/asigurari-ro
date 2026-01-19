import { faCheckDouble } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OurSystemSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-black mb-4">
          Avantajele Sistemului Nostru
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="grid gap-4">
            <div className="advantage-item flex gap-4 items-start">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-green-500 text-base flex-shrink-0"
              />
              <div>
                <h3 className="advantage-title text-base font-semibold text-black mb-2">
                  Ofertare Online
                </h3>
                <p className="advantage-description text-gray-600 text-sm leading-relaxed">
                  Puteți obține online oferte comparative pentru asigurări RCA,
                  Locuință, Călătorie și Răspundere civilă profesională
                </p>
              </div>
            </div>
            <div className="advantage-item flex gap-4 items-start">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-green-500 text-base flex-shrink-0"
              />
              <div>
                <h3 className="advantage-title text-base font-semibold text-black mb-2">
                  Site securizat
                </h3>
                <p className="advantage-description text-gray-600 text-sm leading-relaxed">
                  Folosim protocoale de securitate moderne, sigure, adaptate
                  legislației în vigoare, toate datele fiind prelucrate în
                  condiții de siguranță maximă
                </p>
              </div>
            </div>
            <div className="advantage-item flex gap-4 items-start">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-green-500 text-base flex-shrink-0"
              />
              <div>
                <h3 className="advantage-title text-base font-semibold text-black mb-2">
                  Parteneri Asiguratori
                </h3>
                <p className="advantage-description text-gray-600 text-sm leading-relaxed">
                  Colaborăm cu majoritatea societăților de asigurări din România
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="advantage-item flex gap-4 items-start">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-green-500 text-base flex-shrink-0"
              />
              <div>
                <h3 className="advantage-title text-base font-semibold text-black mb-2">
                  Plată Online
                </h3>
                <p className="advantage-description text-gray-600 text-sm leading-relaxed">
                  Polițele pot fi plătite online cu card bancar emis sub siglele
                  VISA, VISA Electron, MASTERCARD și Maestro
                </p>
              </div>
            </div>
            <div className="advantage-item flex gap-4 items-start">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-green-500 text-base flex-shrink-0"
              />
              <div>
                <h3 className="advantage-title text-base font-semibold text-black mb-2">
                  Transfer Bancar
                </h3>
                <p className="advantage-description text-gray-600 text-sm leading-relaxed">
                  Acceptăm transfer bancar, în acest caz emiterea poliței se va
                  face după confirmarea tranzacției
                </p>
              </div>
            </div>
            <div className="advantage-item flex gap-4 items-start">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-green-500 text-base flex-shrink-0"
              />
              <div>
                <h3 className="advantage-title text-base font-semibold text-black mb-2">
                  Consultanță Gratuită
                </h3>
                <p className="advantage-description text-gray-600 text-sm leading-relaxed">
                  Oferim consultanță gratuită clienților noștri în vederea
                  alegerii unor soluții de asigurare potrivite
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
