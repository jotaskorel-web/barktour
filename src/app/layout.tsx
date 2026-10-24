import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { SITE_NAME, SITE_URL } from '@/config/contact'
import '@/globals.css'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bark Tour — Transporte privativo em Foz do Iguaçu',
    template: '%s | Bark Tour',
  },
  description:
    'Transporte privativo e roteiros personalizados em Foz do Iguaçu, Paraguai e Argentina. Mais de 30 anos de experiência na Tríplice Fronteira.',
  keywords:
    'Bark Tour, Foz do Iguaçu, transporte privativo, transfer aeroporto, Cataratas, Paraguai, Argentina, Tríplice Fronteira, receptivo',
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Bark Tour — Conheça a Tríplice Fronteira do seu jeito',
    description:
      'Transporte privativo, experiência local e roteiros personalizados em Foz do Iguaçu, Paraguai e Argentina.',
    images: [{ url: '/images/hero/cataratas-br-hq.jpg', width: 1280, height: 720, alt: 'Cataratas do Iguaçu — Bark Tour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bark Tour — Transporte privativo em Foz do Iguaçu',
    description: 'Roteiros privativos na Tríplice Fronteira.',
    images: ['/images/hero/cataratas-br-hq.jpg'],
  },
  robots: 'index, follow',
  metadataBase: new URL(SITE_URL),
}

export const viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-white text-gray-900">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
