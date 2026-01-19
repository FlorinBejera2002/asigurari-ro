'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mobileMenuItems = [
    { href: '/asigurari/rca', icon: 'fa-car-crash', label: 'RCA' },
    { href: '/asigurari/pad', icon: 'fa-home', label: 'Locuință PAD' },
    {
      href: '/asigurari/home',
      icon: 'fa-house-damage',
      label: 'Locuință Facultativă'
    },
    { href: '/asigurari/travel', icon: 'fa-plane', label: 'Călătorie' },
    { href: '/asigurari/casco', icon: 'fa-shield-alt', label: 'Casco' },
    {
      href: '/asigurari/casco-econom',
      icon: 'fa-coins',
      label: 'Casco Econom'
    },
    {
      href: '/asigurari/breakdown',
      icon: 'fa-tools',
      label: 'Asistență Rutieră'
    },
    { href: '/asigurari/health', icon: 'fa-heartbeat', label: 'Sănătate' },
    {
      href: '/asigurari/rcp',
      icon: 'fa-briefcase-medical',
      label: 'Malpraxis'
    },
    { href: '/asigurari/life', icon: 'fa-heart', label: 'Viață' },
    {
      href: '/asigurari/accidents',
      icon: 'fa-user-injured',
      label: 'Accidente Persoane'
    },
    {
      href: '/asigurari/accidents-taxi',
      icon: 'fa-taxi',
      label: 'Accidente Taxi'
    },
    {
      href: '/asigurari/accidents-traveler',
      icon: 'fa-bus',
      label: 'Accidente Călători'
    },
    { href: '/asigurari/cmr', icon: 'fa-truck', label: 'CMR' },
    { href: '/toate-asigurarile', icon: 'fa-list', label: 'Lista Completă' }
  ]

  const mobileInfoItems = [
    { href: '/contact', icon: 'fa-phone', label: 'Contact' },
    { href: '/despre-noi', icon: 'fa-info-circle', label: 'Despre noi' },
    { href: '/sugestii', icon: 'fa-file-signature', label: 'Petiții' },
    { href: '/sugestii', icon: 'fa-comment', label: 'Sugestii și reclamații' },
    { href: '/blog', icon: 'fa-newspaper', label: 'Blog' },
    {
      href: '/termeni-conditii',
      icon: 'fa-file-contract',
      label: 'Termeni şi condiţii'
    },
    {
      href: '/gdpr',
      icon: 'fa-shield-alt',
      label: 'Politica de prelucrare a datelor cu caracter personal'
    },
    {
      href: '/politica-cookies',
      icon: 'fa-cookie-bite',
      label: 'Politica de utilizare cookie-uri'
    },
    {
      href: '/toate-asigurarile',
      icon: 'fa-briefcase',
      label: 'Produsele/Serviciile noastre'
    },
    {
      href: '/info-daune',
      icon: 'fa-exclamation-triangle',
      label: 'Info daune'
    },
    {
      href: 'https://anpc.ro',
      icon: 'fa-balance-scale',
      label: 'ANPC',
      external: true
    },
    {
      href: 'https://baar.ro',
      icon: 'fa-building',
      label: 'BAAR',
      external: true
    },
    {
      href: 'https://asfromania.ro',
      icon: 'fa-landmark',
      label: 'ASF',
      external: true
    },
    {
      href: '/asigurari/rca/euroins-faliment',
      icon: 'fa-exclamation-circle',
      label: 'Euroins faliment'
    },
    {
      href: 'https://baar.ro/asigurati-cu-risc-ridicat',
      icon: 'fa-triangle-exclamation',
      label: 'Asigurați cu risc ridicat',
      external: true
    },
    {
      href: '/asigurari/rca/verificare-rca',
      icon: 'fa-search',
      label: 'Verificare RCA'
    },
    {
      href: '/asigurari/rca/bonus-malus',
      icon: 'fa-chart-line',
      label: 'Bonus malus'
    },
    {
      href: '/asigurari/rca/schimbare-permis-auto',
      icon: 'fa-id-card',
      label: 'Schimbare permis auto'
    },
    {
      href: '/asigurari/rca/inmatriculare-masina',
      icon: 'fa-clipboard-list',
      label: 'Înmatriculare vehicul'
    },
    {
      href: '/asigurari/rca/destinatii-de-vacanta',
      icon: 'fa-map-marked-alt',
      label: 'Destinații de vacanță'
    },
    {
      href: '/asigurari/rca/orase',
      icon: 'fa-city',
      label: 'Asigurare RCA oraș'
    },
    {
      href: '/asigurari/rca/amiabila',
      icon: 'fa-mobile-alt',
      label: 'Despre aplicația Amiabilă'
    },
    {
      href: '/asigurari/rca/masina',
      icon: 'fa-tags',
      label: 'Asigurare RCA marcă auto'
    },
    {
      href: '/asigurari/travel/tari',
      icon: 'fa-flag',
      label: 'Asigurare călătorie țară'
    }
  ]

  return (
    <>
      <style jsx={true} global={true}>{`
        .mobile-menu-link {
          color: #1d4ed8 !important;
          background-color: transparent !important;
        }
        .mobile-menu-link:hover,
        .mobile-menu-link:focus,
        .mobile-menu-link:active {
          color: #1d4ed8 !important;
          background-color: transparent !important;
          outline: none !important;
        }
        .mobile-menu-link i,
        .mobile-menu-link span {
          color: #1d4ed8 !important;
        }
      `}</style>

      <div
        className={`inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[45] transition-all duration-300 ${
          mobileMenuOpen ? 'fixed opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        id="modalOverlay"
      />

      <div
        className={`lg:hidden mobile-modal fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 overflow-y-auto transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobileModal"
      >
        <div className="flex justify-between items-center border-b border-gray-200 bg-white sticky top-0 z-10 px-4 md:px-8 w-full py-2">
          <Link href="/">
            <Image
              src="/images/asigurari/logo.svg"
              alt="Asigurari.ro Logo"
              width={240}
              height={60}
              style={{ height: 'auto' }}
              className="flex max-w-xs w-full"
            />
          </Link>
          <button
            className="p-3 text-blue-700 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            id="closeBtn"
          >
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4 w-full">
          <ul className="space-y-2">
            {mobileMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="mobile-menu-link flex items-center space-x-3 text-blue-700 p-3 rounded-lg pointer-events-auto"
                >
                  <i className={`fas ${item.icon} text-xl w-full max-w-8`}></i>
                  <span className="font-medium text-xl">{item.label}</span>
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-200 my-4"></li>
            {mobileInfoItems.map((item, index) => (
              <li key={index}>
                {item.external ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-menu-link flex items-center space-x-3 text-blue-700 p-3 rounded-lg pointer-events-auto"
                  >
                    <i
                      className={`fas ${item.icon} text-xl w-full max-w-8`}
                    ></i>
                    <span className="font-medium text-xl">{item.label}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-menu-link flex items-center space-x-3 text-blue-700 p-3 rounded-lg pointer-events-auto"
                  >
                    <i
                      className={`fas ${item.icon} text-xl w-full max-w-8`}
                    ></i>
                    <span className="font-medium text-xl">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        id="headerContent"
        style={{ position: 'fixed' }}
        className="top-0 z-40 w-full"
      >
        <header
          className={`bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
            isScrolled ? 'shadow-2xl py-3' : 'shadow-md py-6'
          }`}
          id="scrollElement"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center h-12">
              <Link href="/">
                <Image
                  src="/images/asigurari/logo.svg"
                  alt="Asigurari.ro Logo"
                  width={240}
                  height={60}
                  style={{ height: 'auto' }}
                  className="flex w-[15rem] max-w-xs md:max-w-md"
                />
              </Link>

              <nav className="hidden lg:flex">
                <ul className="flex space-x-5">
                  <li>
                    <Link
                      href="/asigurari/rca"
                      className="hover:border-b-2 border-blue-700 text-gray-900 text-lg md:hover:text-blue-700 font-medium px-3 py-2 transition-all duration-100"
                    >
                      RCA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/asigurari/home"
                      className="hover:border-b-2 border-blue-700 text-gray-900 text-lg md:hover:text-blue-700 font-medium px-3 py-2 transition-all duration-100"
                    >
                      Locuința
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/asigurari/travel"
                      className="hover:border-b-2 border-blue-700 text-gray-900 text-lg md:hover:text-blue-700 font-medium px-3 py-2 transition-all duration-100"
                    >
                      Călătorie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/asigurari/casco"
                      className="hover:border-b-2 border-blue-700 text-gray-900 text-lg md:hover:text-blue-700 font-medium px-3 py-2 transition-all duration-100"
                    >
                      CASCO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toate-asigurarile"
                      className="text-lg font-medium transition-all duration-100 bg-blue-700 text-white px-6 py-3 rounded-md"
                    >
                      Lista Completă
                    </Link>
                  </li>
                </ul>
              </nav>

              <button
                className="lg:hidden hamburger-menu-toggle p-2 rounded-lg md:hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                id="hamburgerBtn"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  fill="#1E40AF"
                  viewBox="0 0 640 640"
                >
                  <path d="M96 152C96 138.7 106.7 128 120 128L520 128C533.3 128 544 138.7 544 152C544 165.3 533.3 176 520 176L120 176C106.7 176 96 165.3 96 152zM96 320C96 306.7 106.7 296 120 296L520 296C533.3 296 544 306.7 544 320C544 333.3 533.3 344 520 344L120 344C106.7 344 96 333.3 96 320zM544 488C544 501.3 533.3 512 520 512L120 512C106.7 512 96 501.3 96 488C96 474.7 106.7 464 120 464L520 464C533.3 464 544 474.7 544 488z" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
