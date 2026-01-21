import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import './globals.css'

export const metadata: Metadata = {
  title: 'Broker Asigurari - Firma de asigurari online - Asigurari.ro',
  description: 'Cea mai mare platformă de asigurări online'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
