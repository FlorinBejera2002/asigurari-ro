import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import ScrollToTop from '@/components/common/ScrollToTop'
import CookiesBanner from '@/components/layout/CookiesBanner'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { locales } from '@/i18n'
import '@/lib/fontawesome'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // biome-ignore lint/suspicious/noExplicitAny: false positive
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div id="container" className="!w-full !max-w-none !m-0 pt-24">
            <Header />
            <div id="page" className="!bg-gray-50 !w-full !max-w-none !m-0">
              {children}
            </div>
            <ScrollToTop />
            <Footer />
            <CookiesBanner />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
