import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ContactForm from '@/components/forms/ContactForm'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('asigurari.page.contact.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function ContactPage() {
  const _t = await getTranslations('asigurari.page.contact')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <h1 className="sr-only">Contact Asigurari.ro</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="bg-white rounded-xl shadow-sm max-w-4xl w-full mx-auto overflow-hidden py-8 md:py-0">
          <div className="px-6 md:px-8 md:py-6">
            <div className="flex items-center gap-3 mb-4">
              <i
                className="fa-solid fa-id-badge text-blue-900 text-3xl"
                aria-hidden="true"
              />
              <h2 className="text-xl font-bold text-gray-800">Contact</h2>
            </div>
            <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-0">
              Completați formularul de mai jos pentru a ne contacta. Vă vom
              răspunde în cel mai scurt timp posibil.
            </p>
          </div>

          <div className="px-6 md:px-8">
            <ContactForm />
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <i
                className="fa fa-clock text-blue-700 text-xl"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-gray-800">Program</h3>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-3 py-1">
                <h4 className="font-semibold text-gray-800 text-sm">
                  Luni - Vineri
                </h4>
                <p className="text-gray-600 text-sm">09:00 - 18:00</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-1">
                <h4 className="font-semibold text-gray-800 text-sm">
                  Sâmbătă - Duminică
                </h4>
                <p className="text-gray-600 text-sm">Închis</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-1">
                <h4 className="font-semibold text-gray-800 text-sm">
                  Sărbători legale
                </h4>
                <p className="text-gray-600 text-sm">Închis</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <i
                className="fa fa-user text-blue-700 text-xl"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-gray-800">Contact</h3>
            </div>
            <p>
              <i
                className="fa fa-envelope text-blue-700 text-sm"
                aria-hidden="true"
              />{' '}
              <Link
                href="mailto:suport@asigurari.ro"
                target="_top"
                className="text-blue-600 md:hover:text-blue-800 font-medium text-base underline break-all"
              >
                suport@asigurari.ro
              </Link>
            </p>
            <p>
              <i
                className="fa fa-phone text-blue-700 text-sm"
                aria-hidden="true"
              />{' '}
              <Link
                href="tel:+40314257000"
                target="_top"
                className="text-blue-600 md:hover:text-blue-800 font-medium text-base underline break-all"
              >
                +40 314 257 000
              </Link>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Suntem disponibili pentru a vă ajuta cu orice întrebări sau
              nelămuriri.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <i
                className="fas fa-map-marker-alt text-blue-700 text-xl"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-gray-800">Adresa</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 text-sm">
                Wilson Insurance Broker SRL
              </p>
              <p className="text-gray-700 text-sm">
                Strada Coriolan Brediceanu 10
              </p>
              <p className="text-gray-700 text-sm">Clădire B, Mezanin</p>
              <p className="text-gray-700 text-sm">Timișoara 300011, România</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <i
                className="fas fa-map text-blue-700 text-xl"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-gray-800">
                Locația noastră
              </h3>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                style={{ border: 0, width: '100%', height: '100%' }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm8Q6TcMJRUcRQVGxF-qGF3I&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen={true}
                title="Locația Wilson Insurance Broker"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
