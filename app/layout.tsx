import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Broker Asigurari - Firma de asigurari online - Asigurari.ro',
  description: 'Cea mai mare platformă de asigurări online'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className="antialiased">{children}</body>
    </html>
  )
}
