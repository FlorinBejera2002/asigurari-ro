'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
  timestamp: string
}

interface WindowWithGtag extends Window {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

const getCookie = (name: string): string | null => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

const loadCookies = (consent: CookieConsent) => {
  const win = window as WindowWithGtag

  // Update GTM consent
  if (typeof window !== 'undefined' && win.gtag) {
    win.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
      functionality_storage: consent.functional ? 'granted' : 'denied',
      personalization_storage: consent.functional ? 'granted' : 'denied'
    })
  }

  // Update dataLayer for GTM
  if (typeof window !== 'undefined' && win.dataLayer) {
    win.dataLayer.push({
      event: 'cookie_consent_update',
      consent_analytics: consent.analytics,
      consent_marketing: consent.marketing,
      consent_functional: consent.functional
    })
  }
}

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [analyticsCookies, setAnalyticsCookies] = useState(true)
  const [marketingCookies, setMarketingCookies] = useState(false)
  const [functionalCookies, setFunctionalCookies] = useState(true)

  const COOKIE_NAME = 'asigurari_cookie_consent'
  const COOKIE_EXPIRY_DAYS = 365

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME)
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      try {
        const consentObj = JSON.parse(consent)
        loadCookies(consentObj)
      } catch (_e) {
        deleteCookie(COOKIE_NAME)
        setTimeout(() => setShowBanner(true), 1000)
      }
    }

    // Close modal on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [showModal])

  useEffect(() => {
    if (showBanner) {
      document.body.style.paddingBottom = '200px'
    } else {
      document.body.style.paddingBottom = '0px'
    }
  }, [showBanner])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [showModal])

  const acceptAllCookies = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    }
    setCookie(COOKIE_NAME, JSON.stringify(consent), COOKIE_EXPIRY_DAYS)
    setShowBanner(false)
    loadCookies(consent)
  }

  const rejectAllCookies = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    }
    setCookie(COOKIE_NAME, JSON.stringify(consent), COOKIE_EXPIRY_DAYS)
    setShowBanner(false)
    loadCookies(consent)
  }

  const saveCustomSettings = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: analyticsCookies,
      marketing: marketingCookies,
      functional: functionalCookies,
      timestamp: new Date().toISOString()
    }
    setCookie(COOKIE_NAME, JSON.stringify(consent), COOKIE_EXPIRY_DAYS)
    setShowModal(false)
    setShowBanner(false)
    loadCookies(consent)
  }

  const acceptAllModal = () => {
    setAnalyticsCookies(true)
    setMarketingCookies(true)
    setFunctionalCookies(true)
    setTimeout(() => saveCustomSettings(), 0)
  }

  if (!showBanner && !showModal) return null

  return (
    <>
      {/* Cookies Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          showBanner ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-cookie-bite text-blue-700 text-2xl"></i>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Utilizăm cookie-uri
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Utilizăm cookie-uri pentru a îmbunătăți experiența ta pe
                  site-ul nostru, pentru a personaliza conținutul și
                  publicitatea, pentru a oferi funcții de rețele sociale și
                  pentru a analiza traficul. De asemenea, împărtășim informații
                  despre utilizarea site-ului nostru cu partenerii noștri de
                  rețele sociale, publicitate și analiză.{' '}
                  <Link
                    href="/politica-cookies"
                    className="text-blue-700 hover:text-blue-800 text-sm font-medium underline mt-1 inline-block"
                  >
                    Citește mai multe despre cookie-uri
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Setări cookie-uri
              </button>
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Doar esențiale
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Acceptă toate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false)
          }}
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Setări cookie-uri
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Poți controla ce tipuri de cookie-uri dorești să accepți.
                  Aceste setări se vor aplica doar pentru acest browser și
                  dispozitiv.
                </p>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Cookie-uri necesare
                      </h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">
                          Întotdeauna active
                        </span>
                        <div className="w-10 h-6 bg-blue-700 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Aceste cookie-uri sunt esențiale pentru funcționarea
                      site-ului și nu pot fi dezactivate. Includ cookie-uri
                      pentru sesiunea ta și alte cookie-uri tehnice necesare
                      pentru navigare și securitate.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Cookie-uri de analiză
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={analyticsCookies}
                          onChange={(e) =>
                            setAnalyticsCookies(e.target.checked)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-700"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ne ajută să înțelegem cum interacționezi cu site-ul nostru
                      prin Google Analytics 4 (GA4). Colectăm informații anonime
                      despre vizitele tale, paginile vizitate și comportamentul
                      pe site.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Cookie-uri de marketing
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={marketingCookies}
                          onChange={(e) =>
                            setMarketingCookies(e.target.checked)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-700"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Utilizate pentru remarketing și publicitate prin Google
                      Ads, Microsoft Bing Ads și Facebook Pixel. Ne permit să-ți
                      afișăm reclame relevante pe alte site-uri web pe baza
                      intereselor tale.
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Cookie-uri funcționale
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={functionalCookies}
                          onChange={(e) =>
                            setFunctionalCookies(e.target.checked)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-700"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Permit funcții îmbunătățite și personalizare, cum ar fi
                      videoclipuri și chat-ul live.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={saveCustomSettings}
                    className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                  >
                    Salvează setările
                  </button>
                  <button
                    onClick={acceptAllModal}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md font-medium transition-colors duration-200"
                  >
                    Acceptă toate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
