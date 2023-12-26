import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const baseFont = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={baseFont.className}>{children}</body>
    </html>
  )
}
